import bcrypt from "bcryptjs";
import { Types } from "mongoose";
import { User } from "../models/user.model";
import { RefreshSession } from "../models/refreshSession.model";
import { sha256, randomToken } from "../utils/crypto";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import { ENV } from "../config/env";
import { emailService } from "@/backend/services/email.service";
import { isAllowedCountry } from "@/resources/countries";

function parseDurationToSec(input: string): number {
    const m = input.match(/^(\d+)([smhd])?$/i);
    if (!m) return 60 * 60 * 24 * 30;

    const n = parseInt(m[1], 10);
    const unit = (m[2] || "s").toLowerCase();
    const mult = unit === "s" ? 1 : unit === "m" ? 60 : unit === "h" ? 3600 : 86400;

    return n * mult;
}

const REFRESH_TTL_SEC = parseDurationToSec(ENV.REFRESH_TOKEN_EXPIRES);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DOB_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function trimRequiredString(value: unknown, fieldLabel: string): string {
    if (typeof value !== "string" || !value.trim()) {
        throw new Error(`${fieldLabel} is required`);
    }

    return value.trim();
}

function normalizeDateOfBirth(value: unknown): Date {
    const normalized = trimRequiredString(value, "Date of birth");

    if (!DOB_REGEX.test(normalized)) {
        throw new Error("Date of birth must be in YYYY-MM-DD format");
    }

    const date = new Date(`${normalized}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== normalized) {
        throw new Error("Date of birth must be a real date");
    }

    if (date > new Date()) {
        throw new Error("Date of birth cannot be in the future");
    }

    return date;
}

function normalizeRegistrationData(data: {
    firstName: unknown;
    lastName: unknown;
    email: unknown;
    password: unknown;
    phoneNumber: unknown;
    dateOfBirth: unknown;
    street: unknown;
    city: unknown;
    country: unknown;
    postCode: unknown;
}) {
    const firstName = trimRequiredString(data.firstName, "First name");
    const lastName = trimRequiredString(data.lastName, "Last name");
    const email = trimRequiredString(data.email, "Email").toLowerCase();
    const password = typeof data.password === "string" ? data.password : "";
    const phoneNumber = trimRequiredString(data.phoneNumber, "Phone number");
    const dateOfBirth = normalizeDateOfBirth(data.dateOfBirth);
    const street = trimRequiredString(data.street, "Street");
    const city = trimRequiredString(data.city, "City");
    const country = trimRequiredString(data.country, "Country");
    const postCode = trimRequiredString(data.postCode, "Post code");

    if (!EMAIL_REGEX.test(email)) {
        throw new Error("Enter a valid email address");
    }

    if (!password) {
        throw new Error("Password is required");
    }

    if (!isAllowedCountry(country)) {
        throw new Error("Selected country is not supported");
    }

    return {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        dateOfBirth,
        street,
        city,
        country,
        postCode,
    };
}

export const authService = {
    async register(data: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phoneNumber: string;
        dateOfBirth: string;
        street: string;
        city: string;
        country: string;
        postCode: string;
    }) {
        const normalizedData = normalizeRegistrationData(data);

        const existing = await User.findOne({ email: normalizedData.email });
        if (existing) throw new Error("Email already registered");

        const hashed = await bcrypt.hash(normalizedData.password, 12);

        const user = await User.create({
            firstName: normalizedData.firstName,
            lastName: normalizedData.lastName,
            email: normalizedData.email,
            password: hashed,
            phoneNumber: normalizedData.phoneNumber,
            phone: normalizedData.phoneNumber,
            dateOfBirth: normalizedData.dateOfBirth,
            address: {
                street: normalizedData.street,
                city: normalizedData.city,
                country: normalizedData.country,
                postCode: normalizedData.postCode,
                zip: normalizedData.postCode,
            },
        });

        const result = await this.issueTokensAndSession(
            user._id,
            user.email,
            user.role,
            undefined,
            undefined
        );

        try {
            await emailService.sendWelcomeEmail({
                email: user.email,
                firstName: user.firstName,
            });
        } catch (error) {
            console.error("❌ Welcome email failed:", error);
        }

        return { user, ...result };
    },

    async login(email: string, password: string, userAgent?: string, ip?: string) {
        const normalizedEmail = email.toLowerCase().trim();

        const user = await User.findOne({ email: normalizedEmail }).select("+password");
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        await RefreshSession.deleteMany({ userId: user._id });

        const result = await this.issueTokensAndSession(
            user._id,
            user.email,
            user.role,
            userAgent,
            ip
        );

        console.log(`[authService.login] ✅ New login for ${user.email}, old sessions cleared.`);

        return { user, ...result };
    },

    async issueTokensAndSession(
        userId: Types.ObjectId,
        email: string,
        role: string,
        userAgent?: string,
        ip?: string
    ) {
        const rawRefresh = randomToken(64);
        const tokenHash = sha256(rawRefresh);

        const expiresAt = new Date(Date.now() + REFRESH_TTL_SEC * 1000);

        const session = await RefreshSession.create({
            userId,
            tokenHash,
            userAgent,
            ip,
            expiresAt,
        });

        const accessToken = await signAccessToken({
            sub: userId.toString(),
            email,
            role,
        });

        const refreshJWT = await signRefreshToken(
            { sub: userId.toString(), sid: (session as any)._id.toString() },
            ENV.REFRESH_TOKEN_EXPIRES
        );

        return { accessToken, refreshToken: refreshJWT, session };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        const { verifyRefreshToken } = await import("../utils/jwt");
        let payload: { sub: string; sid: string };

        try {
            payload = await verifyRefreshToken(refreshJWT);
        } catch {
            throw new Error("SessionInvalid");
        }

        const session = await RefreshSession.findById(payload.sid);
        if (!session || session.revokedAt || session.expiresAt.getTime() < Date.now()) {
            throw new Error("SessionInvalid");
        }

        session.revokedAt = new Date();
        await session.save();

        const user = await User.findById(session.userId);
        if (!user) throw new Error("UserNotFound");

        const { accessToken, refreshToken } = await this.issueTokensAndSession(
            user._id,
            user.email,
            user.role,
            userAgent,
            ip
        );

        return { user, accessToken, refreshToken };
    },

    async me(userId: string) {
        const user = await User.findById(userId).select("-password");
        if (!user) throw new Error("UserNotFound");
        return user;
    },

    async logout(refreshJWT: string) {
        const { verifyRefreshToken } = await import("../utils/jwt");

        try {
            const payload = await verifyRefreshToken<{ sub: string; sid: string }>(refreshJWT);
            await RefreshSession.findByIdAndUpdate(payload.sid, {
                $set: { revokedAt: new Date() },
            });
        } catch {
            // idempotent
        }
    },

    async logoutAll(userId: string) {
        await RefreshSession.updateMany(
            { userId },
            { $set: { revokedAt: new Date() } }
        );
    },
};
