"use client";
import React from "react";
import styles from "./ValuesIcons.module.scss";
import { motion } from "framer-motion";

interface ValueItem {
    title: string;
    description?: string;
    text?: string;
}

interface Props {
    title?: string;
    description?: string;
    values: ValueItem[];
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const ValuesIcons: React.FC<Props> = ({ title, description, values }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.head}>
                    {title && <h2 className={styles.sectionTitle}>{title}</h2>}
                    {description && (
                        <p className={styles.sectionDesc}>{description}</p>
                    )}
                </div>


                <div className={styles.valuesGrid}>
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            className={styles.valueCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                        >
                            <div className={styles.icon}>
                                {(i + 1).toString().padStart(2, "0")}
                            </div>

                            <div className={styles.valueContent}>
                                <h3>{v.title}</h3>
                                <p>{v.description ?? v.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesIcons;
