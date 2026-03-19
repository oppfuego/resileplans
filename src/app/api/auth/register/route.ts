import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/backend/controllers/auth.controller";
import { attachAuthCookies } from "@/backend/utils/cookies";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { user, tokens } = await authController.register(body);

        const res = NextResponse.json({ user }, { status: 200 });

        attachAuthCookies(
            res,
            tokens.accessToken,
            tokens.refreshToken,
            60 * 60 * 24 * 30
        );

        return res;
    } catch (e: any) {
        console.error("REGISTER API ERROR:", e);
        console.error("REGISTER API ERROR MESSAGE:", e?.message);
        console.error("REGISTER API ERROR STACK:", e?.stack);

        const msg = e?.message || "Registration error";
        const validationMessages = [
            "required",
            "valid email",
            "supported",
            "Date of birth",
            "Password is required",
        ];
        const code =
            msg.includes("registered") ||
            validationMessages.some((entry) => msg.includes(entry))
                ? 400
                : 500;

        return NextResponse.json(
            {
                type: code === 400 ? "RegistrationValidationError" : "RegistrationError",
                message: msg,
            },
            { status: code }
        );
    }
}
