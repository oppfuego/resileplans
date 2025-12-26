"use client";
import React from "react";
import Media from "../image/Media";
import styles from "./Card.module.scss";
import { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
    image: string | StaticImageData;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const Card: React.FC<CardProps> = ({
                                       image,
                                       title,
                                       description,
                                       buttonText,
                                       buttonLink,
                                   }) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <Media
                src={image}
                type="image"
                alt={title}
                objectFit="cover"
            />
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        {buttonText && buttonLink && (
            <a
                href={buttonLink}
                className={styles.link}
                rel="noopener noreferrer"
            >
                <span>{buttonText}</span>
                <FaArrowRight />
            </a>
        )}
    </div>

);

export default Card;
