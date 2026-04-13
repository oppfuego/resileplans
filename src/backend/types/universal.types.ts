import { Types } from "mongoose";

export interface UniversalOrderType {
    _id: Types.ObjectId;
    userId: Types.ObjectId;
    email: string;
    category: string;
    fields: Record<string, unknown>;
    extras: string[];
    totalTokens: number;
    planType: "default" | "reviewed";
    language?: string;
    response: string;
    extrasData: Record<string, string>;
    status: "pending" | "paid" | "in_review" | "ready";
    readyAt: Date;
    reviewReleaseAt?: Date;
    availableAt?: Date;
    isDownloadUnlocked?: boolean;
    createdAt: Date;
}

export interface CreateUniversalOrderRequest {
    category: string;
    fields: Record<string, unknown>;
    extras: string[];
    totalTokens: number;
    planType: "default" | "reviewed";
    language?: string;
    email: string;
}

export interface CreateUniversalOrderResponse {
    order: UniversalOrderType;
}
