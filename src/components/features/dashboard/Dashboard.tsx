"use client";

import React, { useState } from "react";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import TransactionHistory from "@/components/widgets/all-transactions/AllTransactions";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
    const [activeTab, setActiveTab] =
        useState<"orders" | "transactions">("orders");

    return (
        <section className={styles.section}>
            <div className={styles.tabs}>
                <button
                    className={activeTab === "orders" ? styles.active : ""}
                    onClick={() => setActiveTab("orders")}
                >
                    Projects
                </button>
                <button
                    className={activeTab === "transactions" ? styles.active : ""}
                    onClick={() => setActiveTab("transactions")}
                >
                    Payments
                </button>
            </div>

            <div className={styles.content}>
                {activeTab === "orders" ? <AllOrders /> : <TransactionHistory />}
            </div>
        </section>
    );
}
