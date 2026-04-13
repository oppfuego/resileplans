"use client";
import React from "react";
import { Document, Page, Text, View, pdf } from "@react-pdf/renderer";
import { UniversalOrderType } from "@/backend/types/universal.types";
import { pdfStylesBusiness } from "./pdfTheme";
import { isUniversalOrderDownloadUnlocked } from "@/utils/universalOrderAvailability";

type PDFStyles = typeof pdfStylesBusiness;
const styles: PDFStyles = pdfStylesBusiness;

type Block =
    | { type: "h1"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] };

// 🧹 Мінімальне очищення тексту
function cleanText(raw: string) {
    if (!raw) return "";
    return String(raw).normalize("NFKC");
}

function cleanTitle(raw: string) {
    if (!raw) return "";
    return String(raw)
        .normalize("NFKC")
        .replace(/\uFEFF/g, "")
        // удалить явные артефакты и кавычки
        .replace(/[=¡!~_*•·«»"“”'`>]/g, "")
        // удалить ведущие hash-символы и любые прочие небуквенно-цифровые символы в начале
        .replace(/^#{1,3}\s*/u, "")
        .replace(/^[^\p{L}\p{N}]+/u, "")
        // нормализовать пробелы и обрезать
        .replace(/\s{2,}/g, " ")
        .trim();
}

// 🔤 Інлайн форматування Markdown (**bold**)
function renderInlineMarkdown(text: string, styles: PDFStyles) {
    if (!/\*\*/.test(text)) return [text];
    const parts: Array<string | React.ReactElement> = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let idx = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
        parts.push(
            <Text key={`b-${idx++}`} style={styles.boldInline}>
                {match[1]}
            </Text>
        );
        lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length ? parts : [text];
}

// 📦 Парсинг у блоки (заголовки, абзаци, списки)
function parseBlocks(raw: string): Block[] {
    const cleaned = cleanText(raw)
        .replace(/^[-_*]{3,}$/gm, "") // прибрати роздільники --- ___ ***
        .replace(/^#{1,3}([^#\s])/gm, (_, c) => `# ${c}`) // прибрати заголовки без пробілу
        .replace(/\uFEFF/g, "")
        .trim();

    const lines = cleaned.split(/\r?\n/).map((l) => l.trimEnd());
    const blocks: Block[] = [];

    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (!line || !line.trim()) {
            i++;
            continue;
        }
        const t = line.trim();

        // Заголовки ###, ##, #
        const h3 = t.match(/^#{3}\s*(.+)$/);
        if (h3) {
            blocks.push({ type: "h3", text: cleanTitle(h3[1]) });
            i++;
            continue;
        }
        const h2 = t.match(/^#{2}\s*(.+)$/);
        if (h2) {
            blocks.push({ type: "h2", text: cleanTitle(h2[1]) });
            i++;
            continue;
        }
        const h1 = t.match(/^#\s*(.+)$/);
        if (h1) {
            blocks.push({ type: "h1", text: cleanTitle(h1[1]) });
            i++;
            continue;
        }

        // Списки UL
        if (/^[-–—•*]\s+/.test(t)) {
            const items: string[] = [];
            while (i < lines.length) {
                const ln = lines[i]?.trim();
                if (!ln || !/^[-–—•*]\s+/.test(ln)) break;
                items.push(ln.replace(/^[-–—•*]\s+/, "").trim());
                i++;
            }
            blocks.push({ type: "ul", items });
            continue;
        }

        // Списки OL
        if (/^\d+\.\s+/.test(t)) {
            const items: string[] = [];
            while (i < lines.length) {
                const ln = lines[i]?.trim();
                if (!ln || !/^\d+\.\s+/.test(ln)) break;
                items.push(ln.replace(/^\d+\.\s+/, "").trim());
                i++;
            }
            blocks.push({ type: "ol", items });
            continue;
        }

        // Абзаци
        const pLines: string[] = [t];
        i++;
        while (i < lines.length) {
            const ln = lines[i];
            const trimmed = ln.trim();
            if (!trimmed) break;
            if (/^#{1,3}\s*/.test(trimmed)) break;
            if (/^[-–—•*]\s+/.test(trimmed)) break;
            if (/^\d+\.\s+/.test(trimmed)) break;
            if (/^[-_*]{3,}$/.test(trimmed)) break;
            pLines.push(trimmed);
            i++;
        }
        blocks.push({ type: "p", text: pLines.join(" ") });
    }
    return blocks;
}

// 🪄 Рендер блоків
function renderExtrasContent(text: string, styles: PDFStyles): React.ReactNode {
    if (!text) return null;
    const blocks = parseBlocks(text);
    const out: React.ReactNode[] = [];
    let globalCounter = 1;

    for (let i = 0; i < blocks.length; i++) {
        const b = blocks[i];
        const next = blocks[i + 1];

        const renderBlock = (blk: Block, key: string | number): React.ReactNode => {
            switch (blk.type) {
                case "h1":
                    return (
                        <Text key={key} style={styles.mainHeading}>
                            {blk.text}
                        </Text>
                    );
                case "h2":
                    return (
                        <Text key={key} style={styles.sectionTitle}>
                            {blk.text}
                        </Text>
                    );
                case "h3":
                    return (
                        <Text key={key} style={styles.infoTitle}>
                            {blk.text}
                        </Text>
                    );
                case "p":
                    return (
                        <Text key={key} style={styles.paragraph}>
                            {renderInlineMarkdown(blk.text, styles)}
                        </Text>
                    );
                case "ul":
                    return (
                        <View key={key}>
                            {blk.items.map((it, idx) => (
                                <Text key={idx} style={styles.bulletItem}>
                                    {"• "}
                                    {renderInlineMarkdown(it, styles)}
                                </Text>
                            ))}
                        </View>
                    );
                case "ol":
                    return (
                        <View key={key}>
                            {blk.items.map((it, idx) => (
                                <Text key={idx} style={styles.bulletItem}>
                                    {`${globalCounter++}. `}
                                    {renderInlineMarkdown(it, styles)}
                                </Text>
                            ))}
                        </View>
                    );
                default:
                    return null;
            }
        };

        // Захист від висячих заголовків
        if (
            (b.type === "h1" || b.type === "h2" || b.type === "h3") &&
            next &&
            next.type !== "h1" &&
            next.type !== "h2" &&
            next.type !== "h3"
        ) {
            if (next.type === "p" && next.text.length <= 400) {
                out.push(
                    <View key={`grp-${i}`} wrap={false}>
                        {renderBlock(b, `h-${i}`)}
                        {renderBlock(next, `n-${i + 1}`)}
                    </View>
                );
                i++;
                continue;
            }
            if ((next.type === "ul" || next.type === "ol") && next.items.length) {
                out.push(
                    <View key={`grp-${i}`} wrap={false}>
                        {renderBlock(b, `h-${i}`)}
                        {renderBlock(next, `n-${i + 1}`)}
                    </View>
                );
                i++;
                continue;
            }
            out.push(
                <View key={`grp-${i}`} wrap={false}>
                    {renderBlock(b, `h-${i}`)}
                    <View style={styles.headingSpacer} />
                </View>
            );
            continue;
        }

        out.push(renderBlock(b, i));
    }

    return <>{out}</>;
}

// 🔸 Таблиця
const Table = ({
                   headers,
                   rows,
                   styles,
               }: {
    headers: string[];
    rows: string[][];
    styles: PDFStyles;
}) => (
    <View style={styles.table}>
        <View style={styles.tableRow}>
            {headers.map((h, i) => (
                <Text key={i} style={styles.tableHeader}>
                    {cleanText(h)}
                </Text>
            ))}
        </View>
        {rows.map((row, i) => (
            <View key={i} style={styles.tableRow}>
                {row.map((cell, j) => (
                    <Text key={j} style={styles.tableCell}>
                        {cleanText(cell)}
                    </Text>
                ))}
            </View>
        ))}
    </View>
);

// === AI (автоматичний план)
function renderBusinessPlanAI(order: UniversalOrderType, styles: PDFStyles) {
    const { response, extrasData = {}, fields } = order;
    const businessName = cleanText(fields.businessName || "");
    const niche = cleanText(fields.niche || "");
    const budget = cleanText(fields.budget || "");

    return (
        <Document>
            <Page style={styles.pageAI}>
                <View style={styles.headerAI}>
                    <Text style={styles.titleAI}>🤖 AI-Generated Business Plan</Text>
                    <Text style={styles.subtitleAI}>{businessName}</Text>
                    <Text style={styles.metaAI}>
                        Niche: {niche} • Budget: {budget}
                    </Text>
                </View>

                <View style={styles.dividerAI} />

                <View style={styles.infoCardAI}>
                    <Text style={styles.infoCardTitle}>AI Executive Summary</Text>
                    {renderExtrasContent(response, styles)}
                </View>

                {Object.entries(extrasData).map(([key, val], idx) => {
                    const title = cleanTitle(key.replace(/([A-Z])/g, " $1")).replace(/^./, s => s.toUpperCase());
                    return (
                        <View key={key} style={styles.sectionAI}>
                            <Text style={styles.sectionHeaderAI}>
                                💡 {title}
                            </Text>
                            <View style={styles.aiInsightBox}>
                                <Text style={styles.aiInsightLabel}>Generated Insight:</Text>
                                {renderExtrasContent(val as string, styles)}
                            </View>
                            {idx % 2 === 0 && (
                                <View style={styles.aiHintBox}>
                                    <Text style={styles.aiHintText}>
                                        🔍 Recommendation: review this section for market opportunities or process
                                        optimization based on AI metrics.
                                    </Text>
                                </View>
                            )}
                        </View>
                    );
                })}

                <View style={styles.footerAI}>
                    <Text style={styles.footerTextAI}>
                        Generated automatically by OpenShip AI © {new Date().getFullYear()}
                    </Text>
                    <Text style={styles.footerSubAI}>⚙️ Confidence Level: 92%</Text>
                </View>
            </Page>
        </Document>
    );
}

// === Reviewed (людський план)
function renderBusinessPlanReviewed(order: UniversalOrderType, styles: PDFStyles) {
    const { response, extrasData = {}, fields } = order;
    const businessName = cleanText(fields.businessName || "");
    const niche = cleanText(fields.niche || "");
    const budget = cleanText(fields.budget || "");
    const owner = cleanText(fields.owner || "");

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Business Plan — {businessName}</Text>
                    <Text style={styles.meta}>
                        Niche: {niche} | Budget: {budget}
                    </Text>
                </View>

                <Text style={styles.sectionTitle}>Executive Summary</Text>
                {renderExtrasContent(response, styles)}

                <Text style={styles.sectionTitle}>Financial Projection</Text>
                <Table
                    styles={styles}
                    headers={["Year", "Revenue", "Expenses", "Profit"]}
                    rows={[
                        ["2025", "$120,000", "$70,000", "$50,000"],
                        ["2026", "$180,000", "$95,000", "$85,000"],
                        ["2027", "$250,000", "$130,000", "$120,000"],
                    ]}
                />

                {Object.entries(extrasData).map(([key, val]) => {
                    const title = cleanTitle(key.replace(/([A-Z])/g, " $1")).replace(/^./, s => s.toUpperCase());
                    return (
                        <View key={key}>
                            <Text style={styles.sectionTitle}>
                                {title}
                            </Text>
                            {renderExtrasContent(val as string, styles)}
                        </View>
                    );
                })}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Reviewed by: {owner || "Business Specialist"}</Text>
                </View>
            </Page>
        </Document>
    );
}

// === Основна функція генерації PDF
export async function downloadBusinessPDF(order: UniversalOrderType) {
    if (!isUniversalOrderDownloadUnlocked(order)) {
        throw new Error("This reviewed plan is not available for download yet.");
    }

    const isReviewed = order.planType === "reviewed";
    const businessName = cleanText(order.fields.businessName || "Business");

    const doc = isReviewed
        ? renderBusinessPlanReviewed(order, styles)
        : renderBusinessPlanAI(order, styles);

    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `business-plan-${businessName}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
}

export { downloadBusinessPDF as downloadUniversalPDF };
