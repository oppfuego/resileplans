import { Document, Types } from "mongoose";

export interface UserAddress {
    street: string;
    city: string;
    country: string;
    postCode: string;
}

export interface IUserSchema extends Document {
    _id: Types.ObjectId;

    firstName: string;
    lastName: string;

    email: string;
    password: string;

    phoneNumber?: string;
    phone?: string;
    dateOfBirth?: Date | null;

    address: {
        street: string;
        city: string;
        country: string;
        postCode?: string;
        zip?: string;
    };

    tokens: number;
    role: "user" | "admin";

    createdAt: Date;
    updatedAt: Date;
}

export interface UserType {
    _id: string;
    name: string;

    firstName: string;
    lastName: string;

    email: string;
    phoneNumber: string;
    dateOfBirth: string | null;
    address: UserAddress;

    tokens: number;
    role: "user" | "admin";

    createdAt: Date;
    updatedAt: Date;
}
