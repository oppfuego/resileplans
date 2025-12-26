"use client";
import React from "react";
import styles from "./InfoBlock.module.scss";
import Media from "../image/Media";
import Text from "../text/Text";
import AttributionTwoToneIcon from '@mui/icons-material/AttributionTwoTone';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

interface InfoBlockProps {
    title?: string;
    description?: string;
    icon?: string;
    image?: string;
    bullets?: string[];
    align?: "left" | "center" | "right";
}

const ICON_MAP: Record<string, React.ReactNode> = {
    ai: <PrecisionManufacturingIcon />,
    expert: <AttributionTwoToneIcon />,
};


const InfoBlock: React.FC<InfoBlockProps> = ({
                                                 title,
                                                 description,
                                                 icon,
                                                 image,
                                                 bullets,
                                                 align = "left",
                                             }) => {
    return (
        <div className={`${styles.infoBlock} ${styles[align]}`}>
            {icon && ICON_MAP[icon] && (
                <div className={styles.icon}>
                    {ICON_MAP[icon]}
                </div>
            )}

            {image && (
                <div className={styles.imageWrapper}>
                    <Media
                        src={image}
                        type="image"
                        alt={title || "Info"}
                        objectFit="cover"
                    />
                </div>
            )}

            <Text
                title={title}
                description={description}
                bullets={bullets}
                centerTitle={align === "center"}
                centerDescription={align === "center"}
                centerBullets={align === "center"}
            />
        </div>
    );
};

export default InfoBlock;
