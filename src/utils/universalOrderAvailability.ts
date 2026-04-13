import type { UniversalOrderType } from "@/backend/types/universal.types";

const MIN_REVIEW_DELAY_MS = 3 * 60 * 60 * 1000;
const MAX_REVIEW_DELAY_MS = 24 * 60 * 60 * 1000;

type UniversalOrderLike = Partial<
    Pick<UniversalOrderType, "planType" | "status" | "createdAt" | "readyAt" | "reviewReleaseAt" | "response" | "extrasData">
> & { [key: string]: unknown };

function toDate(value?: string | Date | null) {
    if (!value) return null;
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
}

export function generateReviewedReleaseAt(createdAt = new Date()) {
    const delayMs = Math.floor(Math.random() * (MAX_REVIEW_DELAY_MS - MIN_REVIEW_DELAY_MS + 1)) + MIN_REVIEW_DELAY_MS;
    return new Date(createdAt.getTime() + delayMs);
}

export function getUniversalOrderAvailableAt(order: UniversalOrderLike) {
    return toDate(order.reviewReleaseAt) || toDate(order.readyAt) || toDate(order.createdAt);
}

export function isUniversalOrderDownloadUnlocked(order: UniversalOrderLike, now = new Date()) {
    if (order.planType !== "reviewed") return true;
    const availableAt = getUniversalOrderAvailableAt(order);
    if (!availableAt) return false;
    return availableAt.getTime() <= now.getTime();
}

export function resolveUniversalOrderStatus(order: UniversalOrderLike, now = new Date()): UniversalOrderType["status"] {
    if (order.planType !== "reviewed") return "ready";
    return isUniversalOrderDownloadUnlocked(order, now) ? "ready" : "in_review";
}

export function decorateUniversalOrderForClient<T extends UniversalOrderLike>(order: T, now = new Date()) {
    const availableAt = getUniversalOrderAvailableAt(order);
    const isDownloadUnlocked = isUniversalOrderDownloadUnlocked(order, now);

    return {
        ...order,
        status: resolveUniversalOrderStatus(order, now),
        readyAt: availableAt || order.readyAt,
        reviewReleaseAt: toDate(order.reviewReleaseAt) || availableAt || undefined,
        availableAt: availableAt || undefined,
        isDownloadUnlocked,
    };
}

export function sanitizeUniversalOrderForClient<T extends UniversalOrderLike>(order: T, now = new Date()) {
    const decorated = decorateUniversalOrderForClient(order, now);
    if (decorated.isDownloadUnlocked) return decorated;

    return {
        ...decorated,
        response: "",
        extrasData: {},
    };
}
