// typescript
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdStar, MdStarBorder, MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "./TestimonialsSlider.module.scss";
import { media } from "@/resources/media";

interface Testimonial {
    name: string;
    role?: string;
    image?: string;
    text: string;
    rating?: number;
}

interface Props {
    title?: string;
    description?: string;
    testimonials: Testimonial[];
}

export default function TestimonialsSlider({ title, description, testimonials }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = testimonials[currentIndex];

    // Безопасно вычисляем src для изображения вне JSX, чтобы избежать проблем парсинга и ошибок типов
    let srcValue: string | undefined = undefined;
    if (current?.image) {
        const key = current.image as keyof typeof media;
        const m = media[key];
        if (typeof m === "string") {
            srcValue = m;
        } else {
            // m может быть StaticImageData или другой объект
            srcValue = (m as any)?.src ?? String(m);
        }
    }

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                {title && <h2 className={styles.title}>{title}</h2>}
                {description && <p className={styles.description}>{description}</p>}
            </div>

            <div className={styles.sliderWrapper}>
                <button className={`${styles.nav} ${styles.left}`} onClick={prevSlide}>
                    <MdChevronLeft size={22} />
                </button>

                <div className={styles.slider}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className={styles.statement}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.45 }}
                        >
                            {/* Quote */}
                            <blockquote className={styles.quote}>
                                {current.text}
                            </blockquote>

                            {/* Meta */}
                            <div className={styles.meta}>
                                {srcValue && (
                                    <img
                                        src={srcValue}
                                        alt={current.name}
                                        className={styles.avatar}
                                    />
                                )}

                                <div className={styles.person}>
                                    <span className={styles.name}>{current.name}</span>
                                    {current.role && (
                                        <span className={styles.role}>{current.role}</span>
                                    )}
                                </div>

                                {typeof current.rating === "number" && (
                                    <div className={styles.rating}>
                                        {Array.from({ length: current.rating }).map((_, i) => (
                                            <MdStar key={i} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className={`${styles.nav} ${styles.right}`} onClick={nextSlide}>
                    <MdChevronRight size={22} />
                </button>
            </div>

            <div className={styles.progress}>
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.line} ${i === currentIndex ? styles.active : ""}`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}