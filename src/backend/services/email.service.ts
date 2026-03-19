import { sendEmail } from "@/backend/utils/sendEmail";
import {
    COMPANY_NAME,
    COMPANY_ADDRESS,
    COMPANY_PHONE,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

interface EmailDetail {
    label: string;
    value: string;
}

function escapeHtml(value: string) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function buildContactBlock() {
    if (!COMPANY_EMAIL && !COMPANY_PHONE && !COMPANY_ADDRESS) {
        return { text: "", html: "" };
    }

    return {
        text: [
            COMPANY_EMAIL ? `Support email: ${COMPANY_EMAIL}` : "",
            COMPANY_PHONE ? `Phone: ${COMPANY_PHONE}` : "",
            COMPANY_ADDRESS ? `Address: ${COMPANY_ADDRESS}` : "",
        ]
            .filter(Boolean)
            .join("\n"),
        html: `
            <div style="margin-top:24px; padding:16px; background:#f8fbff; border-radius:8px;">
              <p style="margin:0 0 10px; font-size:14px; font-weight:bold;">Contact details</p>
              ${COMPANY_EMAIL ? `<p style="margin:4px 0; font-size:14px;">Email: ${escapeHtml(COMPANY_EMAIL)}</p>` : ""}
              ${COMPANY_PHONE ? `<p style="margin:4px 0; font-size:14px;">Phone: ${escapeHtml(COMPANY_PHONE)}</p>` : ""}
              ${COMPANY_ADDRESS ? `<p style="margin:4px 0; font-size:14px;">Address: ${escapeHtml(COMPANY_ADDRESS)}</p>` : ""}
            </div>
        `,
    };
}

function renderEmailShell(title: string, bodyHtml: string) {
    const companyName = COMPANY_NAME || "Website";

    return `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="color:#007BFF; text-align:center; margin-bottom:24px;">
              ${escapeHtml(title)}
            </h2>
            ${bodyHtml}
            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />
            <p style="font-size:14px; color:#777; text-align:center; margin:0 0 8px;">
              © ${new Date().getFullYear()} ${escapeHtml(companyName)} - All rights reserved.
            </p>
            ${
                COMPANY_LEGAL_NAME || COMPANY_NUMBER
                    ? `
                <p style="font-size:13px; color:#999; text-align:center; margin:0;">
                  ${COMPANY_LEGAL_NAME ? escapeHtml(COMPANY_LEGAL_NAME) : ""}
                  ${COMPANY_LEGAL_NAME && COMPANY_NUMBER ? " · " : ""}
                  ${COMPANY_NUMBER ? `Company No. ${escapeHtml(COMPANY_NUMBER)}` : ""}
                </p>
            `
                    : ""
            }
          </div>
        </div>
    `;
}

function renderDetails(details: EmailDetail[]) {
    const text = details.map((detail) => `${detail.label}: ${detail.value}`).join("\n");
    const html = details
        .map(
            (detail) => `
                <tr>
                  <td style="padding:8px 0; font-size:14px; color:#666; vertical-align:top;">${escapeHtml(detail.label)}</td>
                  <td style="padding:8px 0; font-size:14px; color:#111; font-weight:600; text-align:right;">${escapeHtml(detail.value)}</td>
                </tr>
            `
        )
        .join("");

    return { text, html };
}

export const emailService = {
    async sendWelcomeEmail(data: {
        email: string;
        firstName: string;
    }) {
        const companyName = COMPANY_NAME || "Website";
        const subject = `Welcome to ${companyName} 🎉`;
        const contact = buildContactBlock();

        const text = `
Hi ${data.firstName},

Thank you for registering at ${companyName}.
Your account has been successfully created.

You can now sign in and start using the platform.

${contact.text}

Best regards,
${companyName} Team
        `.trim();

        const html = renderEmailShell(
            subject,
            `
                <p style="font-size:16px; line-height:1.6;">Hi <strong>${escapeHtml(data.firstName)}</strong>,</p>
                <p style="font-size:16px; line-height:1.6;">
                  Thank you for registering at <strong>${escapeHtml(companyName)}</strong>.
                  Your account has been successfully created.
                </p>
                <p style="font-size:16px; line-height:1.6;">You can now sign in and start using the platform.</p>
                ${contact.html}
            `
        );

        return await sendEmail(data.email, subject, text, html);
    },

    async sendOrderConfirmationEmail(data: {
        email: string;
        firstName?: string;
        serviceName: string;
        orderId: string;
        tokensUsed: number;
        transactionDate: Date;
        summary: string;
        details: EmailDetail[];
    }) {
        const companyName = COMPANY_NAME || "Website";
        const subject = `${data.serviceName} confirmation`;
        const greeting = data.firstName ? `Hi ${data.firstName},` : "Hello,";
        const detailRows = renderDetails([
            ...data.details,
            { label: "Tokens used", value: String(data.tokensUsed) },
            {
                label: "Transaction date",
                value: data.transactionDate.toISOString().slice(0, 10),
            },
            { label: "Order ID", value: data.orderId },
        ]);
        const contact = buildContactBlock();

        const text = `
${greeting}

Your ${data.serviceName.toLowerCase()} has been confirmed.
${data.summary}

${detailRows.text}

${contact.text}

Best regards,
${companyName} Team
        `.trim();

        const html = renderEmailShell(
            `${data.serviceName} confirmation`,
            `
                <p style="font-size:16px; line-height:1.6;">
                  ${escapeHtml(greeting.replace(",", ""))},
                </p>
                <p style="font-size:16px; line-height:1.6;">
                  Your <strong>${escapeHtml(data.serviceName.toLowerCase())}</strong> has been confirmed.
                </p>
                <p style="font-size:16px; line-height:1.6;">${escapeHtml(data.summary)}</p>
                <div style="margin-top:24px; padding:16px; background:#f8fbff; border-radius:8px;">
                  <table style="width:100%; border-collapse:collapse;">${detailRows.html}</table>
                </div>
                ${contact.html}
            `
        );

        return await sendEmail(data.email, subject, text, html);
    },

    async sendTokenPurchaseConfirmationEmail(data: {
        email: string;
        firstName?: string;
        tokensAdded: number;
        balanceAfter: number;
        transactionDate: Date;
    }) {
        const companyName = COMPANY_NAME || "Website";
        const subject = "Token purchase confirmation";
        const greeting = data.firstName ? `Hi ${data.firstName},` : "Hello,";
        const details = renderDetails([
            { label: "Tokens added", value: String(data.tokensAdded) },
            { label: "Balance after purchase", value: String(data.balanceAfter) },
            {
                label: "Transaction date",
                value: data.transactionDate.toISOString().slice(0, 10),
            },
        ]);
        const contact = buildContactBlock();

        const text = `
${greeting}

Your token purchase was successful.
Your account has been credited with ${data.tokensAdded} tokens.

${details.text}

${contact.text}

Best regards,
${companyName} Team
        `.trim();

        const html = renderEmailShell(
            subject,
            `
                <p style="font-size:16px; line-height:1.6;">${escapeHtml(greeting.replace(",", ""))},</p>
                <p style="font-size:16px; line-height:1.6;">Your token purchase was successful.</p>
                <p style="font-size:16px; line-height:1.6;">
                  Your account has been credited with <strong>${escapeHtml(String(data.tokensAdded))} tokens</strong>.
                </p>
                <div style="margin-top:24px; padding:16px; background:#f8fbff; border-radius:8px;">
                  <table style="width:100%; border-collapse:collapse;">${details.html}</table>
                </div>
                ${contact.html}
            `
        );

        return await sendEmail(data.email, subject, text, html);
    },
};
