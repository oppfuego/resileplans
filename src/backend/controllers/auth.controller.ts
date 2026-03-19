import { connectDB } from "../config/db";
import { authService } from "../services/auth.service";
import { LogoutResponse } from "@/backend/types/auth.types";
import { UserType } from "@/backend/types/user.types";

export const authController = {
    async register(body: {
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
        await connectDB();

        const { user, accessToken, refreshToken } = await authService.register(body);

        return {
            user: toUser(user),
            tokens: { accessToken, refreshToken },
        };
    },

    async login(body: { email: string; password: string }, userAgent?: string, ip?: string) {
        await connectDB();

        const { user, accessToken, refreshToken } = await authService.login(
            body.email,
            body.password,
            userAgent,
            ip
        );

        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async refresh(refreshJWT: string, userAgent?: string, ip?: string) {
        await connectDB();

        const { user, accessToken, refreshToken } = await authService.refresh(
            refreshJWT,
            userAgent,
            ip
        );

        return { user: toUser(user), tokens: { accessToken, refreshToken } };
    },

    async me(userId: string): Promise<UserType> {
        await connectDB();
        const user = await authService.me(userId);
        return toUser(user);
    },

    async logout(refreshJWT: string): Promise<LogoutResponse> {
        await connectDB();
        await authService.logout(refreshJWT);
        return { message: "Logged out successfully" };
    },

    async logoutAll(userId: string): Promise<LogoutResponse> {
        await connectDB();
        await authService.logoutAll(userId);
        return { message: "All sessions revoked" };
    },
};

function toUser(u: any): UserType {
    const postCode = u.address?.postCode || u.address?.zip || "";
    const phoneNumber = u.phoneNumber || u.phone || "";

    return {
        _id: u._id.toString(),
        name: [u.firstName, u.lastName].filter(Boolean).join(" "),
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        phoneNumber,
        dateOfBirth: u.dateOfBirth ? new Date(u.dateOfBirth).toISOString().slice(0, 10) : null,
        address: {
            street: u.address?.street || "",
            city: u.address?.city || "",
            country: u.address?.country || "",
            postCode,
        },
        role: u.role,
        tokens: u.tokens,
        createdAt: u.createdAt,
        updatedAt: u.updatedAt,
    };
}
