"use client";

import { useUser } from "@/context/UserContext";
import styles from "./ProfileHead.module.scss";

const ProfileHead = () => {
    const user = useUser();

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <h1>Your workspace</h1>
                <p>
                    This is where you work with our experts, review your business
                    plans, and manage ongoing projects.
                </p>
            </div>

            <div className={styles.right}>
                <span className={styles.label}>Signed in as</span>
                <strong>{user?.email}</strong>
            </div>
        </header>
    );
};

export default ProfileHead;
