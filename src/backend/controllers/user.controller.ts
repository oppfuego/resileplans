import { connectDB } from "../config/db";
import { userService } from "../services/user.service";
import { UserType } from "@/backend/types/user.types";
import { transactionService } from "@/backend/services/transaction.service";
import { emailService } from "@/backend/services/email.service";

export const userController = {
    async buyTokens(userId: string, amount: number): Promise<UserType> {
        await connectDB();

        const user = await userService.addTokens(userId, amount);

        await transactionService.record(user._id, user.email, amount, "add", user.tokens);

        try {
            await emailService.sendTokenPurchaseConfirmationEmail({
                email: user.email,
                firstName: user.firstName,
                tokensAdded: amount,
                balanceAfter: user.tokens,
                transactionDate: new Date(),
            });
        } catch (error) {
            console.error("[userController.buyTokens] Confirmation email failed", {
                userId,
                email: user.email,
                amount,
                error,
            });
        }

        return formatUser(user);
    },

    async spendTokens(userId: string, amount: number, _reason?: string): Promise<UserType> {
        await connectDB();

        const user = await userService.getUserById(userId);
        if (!user) throw new Error("User not found");
        if ((user.tokens || 0) < amount) throw new Error("Not enough tokens");

        user.tokens -= amount;
        await user.save();

        await transactionService.record(user._id, user.email, amount, "spend", user.tokens);

        return formatUser(user);
    },
};

function formatUser(user: any): UserType {
    const postCode = user.address?.postCode || user.address?.zip || "";
    const phoneNumber = user.phoneNumber || user.phone || "";

    return {
        _id: user._id.toString(),
        name: [user.firstName, user.lastName].filter(Boolean).join(" "),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber,
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().slice(0, 10) : null,
        address: {
            street: user.address?.street || "",
            city: user.address?.city || "",
            country: user.address?.country || "",
            postCode,
        },
        role: user.role,
        tokens: user.tokens,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}
