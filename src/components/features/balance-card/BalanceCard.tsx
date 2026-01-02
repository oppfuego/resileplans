"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import styles from "./BalanceCard.module.scss";

export default function BalanceCard() {
    const user = useUser();

    return (
        <section className={styles.card}>
            <div>
                <h3>Account overview</h3>
                <p className={styles.tokens}>
                    {user?.tokens ?? 0} tokens available
                </p>
                <p className={styles.note}>
                    Tokens are used to start new projects or request expert work.
                </p>
            </div>

            <Link href="/pricing">
                <ButtonUI variant="solid" color="primary">
                    Add tokens
                </ButtonUI>
            </Link>
        </section>
    );
}
