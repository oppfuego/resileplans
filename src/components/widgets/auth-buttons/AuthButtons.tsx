import React from "react";
import {useUser} from "@/context/UserContext";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";
import styles from "./AuthButtons.module.scss";
import {FaUser} from "react-icons/fa";
import {GrMoney} from "react-icons/gr";

const AuthButtons: React.FC = () => {
    const user = useUser();

    if (user) {
        return (
            <div className={styles.userCompact}>
                <Link href="/profile" className={styles.userButton}>
                    <div className={styles.balance}>
                        <GrMoney className={styles.iconMoney} />
                        <span>{user?.tokens ?? 0}</span>
                    </div>
                    <FaUser className={styles.iconUser} />
                </Link>
            </div>

        )
        ;
    }

    // 🔹 Якщо неавторизований
    return (
        <div className={styles.nonAuthedButtons}>
            <Link href="/sign-in">
                <ButtonUI
                    text="Sign In"
                    color="text"
                    shape="default"
                    hoverColor="link"
                    hoverEffect="scale"
                    fullWidth
                    textColor="quaternary"
                />
            </Link>
            <Link href="/sign-up">
                <ButtonUI
                    text="Sign Up"
                    shape="default"
                    color="quaternary"
                    hoverColor="tertiary"
                    hoverTextColor="border"
                    hoverEffect="scale"
                    fullWidth
                    textColor="link"
                />
            </Link>
        </div>
    );
};

export default AuthButtons;
