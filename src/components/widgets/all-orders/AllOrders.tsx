"use client";

import React, { useEffect, useState } from "react";
import {useAllOrders} from "@/context/AllOrdersContext";
import styles from "./AllOrders.module.scss";
import {FaFileDownload, FaRegClock, FaCoins} from "react-icons/fa";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import {downloadUniversalPDF} from "@/pdf-creator/PdfCreator";
import {UniversalOrderType} from "@/backend/types/universal.types";
import {
    getUniversalOrderAvailableAt,
    isUniversalOrderDownloadUnlocked,
    resolveUniversalOrderStatus,
} from "@/utils/universalOrderAvailability";

const AllOrders: React.FC = () => {
    const {aiOrders, loading, refreshOrders} = useAllOrders();
    const [now, setNow] = useState(() => Date.now());
    const universalOrders = aiOrders;

    useEffect(() => {
        const timer = window.setInterval(() => setNow(Date.now()), 30000);
        return () => window.clearInterval(timer);
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const formatTime = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
    };

    const formatId = (id: string) => id.slice(-6);

    const formatRemainingTime = (dateValue?: string | Date) => {
        if (!dateValue) return "Available for download later";

        const diff = new Date(dateValue).getTime() - now;
        if (diff <= 0) return "Ready";

        const totalMinutes = Math.ceil(diff / 60000);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (hours <= 0) return `${minutes}m left`;
        return `${hours}h ${minutes}m left`;
    };

    const handleDownloadUniversal = async (order: UniversalOrderType) => {
        try {
            if (!isUniversalOrderDownloadUnlocked(order)) return;

            if (order.extrasData && Object.keys(order.extrasData).length > 0) {
                await downloadUniversalPDF(order);
                return;
            }

            const res = await fetch(`/api/universal/get-order?id=${order._id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            const data = await res.json();

            if (data?.order) await downloadUniversalPDF(data.order);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Unknown error";
            console.error("❌ Business plan download error:", message);
        }
    };


    if (loading) return <p className={styles.loading}>Loading orders...</p>;

    if (universalOrders.length === 0)
        return (
            <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>📭</span>
                <p>No orders yet.</p>
                <Link href="/dashboard">
                    <ButtonUI color="primary" size="md" shape="rounded" hoverEffect="shadow">
                        Create your first order
                    </ButtonUI>
                </Link>
            </div>
        );

    return (
        <section className={styles.ordersSection}>
            <div className={styles.header}>
                <h3>Your Orders</h3>
                <p>View and download your generated content</p>
                <ButtonUI onClick={refreshOrders} color="primary" size="sm">
                    Refresh
                </ButtonUI>
            </div>

            {/* ====================== UNIVERSAL ORDERS ====================== */}
            {universalOrders.length > 0 && (
                <>
                    <h4 className={styles.sectionTitle}>Business Plan Orders</h4>
                    <div className={styles.ordersGrid}>
                        {universalOrders.map((order) => (
                            <div key={String(order._id)} className={styles.card}>
                                {(() => {
                                    const availableAt = getUniversalOrderAvailableAt(order);
                                    const isUnlocked = isUniversalOrderDownloadUnlocked(order, new Date(now));
                                    const status = resolveUniversalOrderStatus(order, new Date(now));

                                    return (
                                        <>
                                            <div className={styles.cardHeader}>
                                                <div className={styles.idWrapper}>
                                                    <span className={styles.orderId}>#{formatId(String(order._id))}</span>
                                                    <span
                                                        className={`${styles.badge} ${
                                                            order.planType === "reviewed" ? styles.manager : styles.instant
                                                        }`}
                                                    >
                                                        {order.planType === "reviewed" ? "Reviewed" : "Instant"}
                                                    </span>
                                                </div>
                                                <button
                                                    className={`${styles.downloadBtn} ${!isUnlocked ? styles.downloadBtnLocked : ""}`}
                                                    onClick={() => handleDownloadUniversal(order)}
                                                    aria-label={isUnlocked ? "Download PDF" : "Available later"}
                                                    disabled={!isUnlocked}
                                                    title={isUnlocked ? "Download PDF" : "Available for download later"}
                                                >
                                                    <FaFileDownload/>
                                                </button>
                                            </div>

                                            <div className={styles.cardBody}>
                                                <p className={styles.email}>{order.email}</p>
                                                <div className={styles.meta}>
                                                    <span className={styles.date}>
                                                        <FaRegClock/> {formatDate(String(order.createdAt))} at {formatTime(String(order.createdAt))}
                                                    </span>
                                                    <span className={styles.tokens}>
                                                        <FaCoins/> -{order.totalTokens} tokens
                                                    </span>
                                                </div>
                                                <p className={styles.extraInfo}>
                                                    Category: <strong>{order.category}</strong> | Language:{" "}
                                                    {order.language || "English"}
                                                </p>
                                                <div className={styles.statusBlock}>
                                                    {order.planType === "reviewed" && !isUnlocked ? (
                                                        <>
                                                            <p className={styles.statusTitle}>Order received</p>
                                                            <p className={styles.statusText}>
                                                                Your plan is being reviewed by a specialist
                                                            </p>
                                                            <p className={styles.statusText}>Estimated delivery within 24 hours</p>
                                                            <p className={styles.statusEta}>
                                                                {status === "in_review" ? formatRemainingTime(availableAt || undefined) : "Ready"}
                                                            </p>
                                                            <p className={styles.statusHint}>Available for download later</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <p className={styles.statusTitle}>
                                                                {status === "ready" ? "Ready for download" : "Order received"}
                                                            </p>
                                                            <p className={styles.statusText}>
                                                                {order.planType === "reviewed"
                                                                    ? "Reviewed plan completed and unlocked."
                                                                    : "AI plan generated instantly and available now."}
                                                            </p>
                                                            {availableAt && (
                                                                <p className={styles.statusHint}>
                                                                    Available since {formatDate(String(availableAt))} at {formatTime(String(availableAt))}
                                                                </p>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default AllOrders;
