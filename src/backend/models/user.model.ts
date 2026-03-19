import mongoose, { Schema, Model } from "mongoose";
import { IUserSchema } from "@/backend/types/user.types";

const UserSchema: Schema<IUserSchema> = new Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
            trim: true,
        },
        password: { type: String, required: true, select: false },
        phoneNumber: { type: String, trim: true, default: null },
        phone: { type: String, trim: true, default: null },
        dateOfBirth: { type: Date, default: null },
        address: {
            street: { type: String, required: true, trim: true },
            city: { type: String, required: true, trim: true },
            country: { type: String, required: true, trim: true },
            postCode: { type: String, trim: true, default: null },
            zip: { type: String, trim: true, default: null },
        },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        tokens: { type: Number, default: 10 },
    },
    { timestamps: true }
);

export const User: Model<IUserSchema> =
    mongoose.models.User || mongoose.model<IUserSchema>("User", UserSchema);
