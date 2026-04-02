import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
} from "@/resources/constants";

const cookiePolicyEn: PageSchema = {
    meta: {
        title: "Cookies Policy – ResilePlans",
        description:
            "ResilePlans Cookies Policy: how we use cookies, local storage, pixels, and similar technologies, including consent options and your control preferences.",
        keywords: [
            "cookies policy",
            "cookies",
            "GDPR",
            "tracking",
            "privacy",
            "consent",
            "resileplans",
            "localStorage",
        ],
        canonical: "/cookies-policy",
        ogImage: {
            title: "ResilePlans – Cookies Policy",
            description:
                "Transparent cookies and consent policy for ResilePlans business planning platform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Cookies Policy",
            description: "Effective date: 20 January 2026",
        },
        {
            type: "text",
            title: "1. Overview",
            description:
                "This Cookies Policy explains how MANAGEMENT RESILIENCE LTD (“ResilePlans”, “we”, “us”, “our”) uses cookies and similar technologies (including localStorage, sessionStorage, pixels, and SDKs) on resileplans.co.uk and our related applications (the “Service”). It complements our Privacy Policy.",
            bullets: [
                `Controller: ${COMPANY_LEGAL_NAME} (Company No. ${COMPANY_NUMBER})`,
                `Address: ${COMPANY_ADDRESS}`,
                `Contact: ${COMPANY_EMAIL}`,
                "Context: The Service provides professional tools for generating Business Plans, Pitch Decks, and Financial Models using AI assistance and expert consultancy. We operate a Token-based payment system accepting GBP (£), EUR (€), and USD ($). Cookies are essential to maintain your secure session, manage your Token wallet balance, remember your currency preferences, and preserve your work-in-progress drafts.",
            ],
        },
        {
            type: "text",
            title: "2. What are Cookies?",
            description:
                "Cookies are small text files placed on your device by a website. They allow the Service to:",
            bullets: [
                "Identify you as you navigate between pages (so you don't have to log in constantly).",
                "Remember settings (e.g., your chosen currency or language).",
                "Protect data (e.g., preventing Cross-Site Request Forgery attacks).",
                "Analyze performance (helping us fix bugs and improve AI generation speed).",
            ],
        },
        {
            type: "text",
            title: "2. Local Storage",
            description:
                `We also use "Local Storage" (part of your browser), which allows us to save larger amounts of data locally—such as the text you are typing into your Business Plan builder—so you don't lose your work if your internet connection drops.`,
        },
        {
            type: "text",
            title: "3. Categories We Use",
            description:
                "We classify cookies and similar technologies into four categories:",
            bullets: [
                "Strictly Necessary / Essential: Required for the core operation of the Service. Without these, you cannot log in, purchase Tokens, or use the dashboard. These do not require your consent.",
                "Functional: Enable enhanced functionality and personalisation. For example, remembering which currency (£/€/$) you prefer to view prices in, or auto-saving your business plan drafts in your browser.",
                "Performance / Analytics: Help us understand how users interact with the Service (e.g., which sections of a business plan are most difficult to complete). We use this data to improve our platform. Data is typically aggregated and anonymised.",
                "Marketing / Attribution: Used to track the effectiveness of our advertising campaigns (e.g., determining if you clicked a Google Ad before registering). These are only set if you give your consent.",
            ],
        },
        {
            type: "text",
            title: "4. Typical Cookies & Storage Keys (Examples)",
            description:
                "The specific names of cookies may change as we update our software. The list below is illustrative of how we use these technologies on ResilePlans:",
            bullets: [
                "rp_session — Identifies your secure login session and Account ID. — Necessary — Session",
                "XSRF-TOKEN — Protects against Cross-Site Request Forgery attacks. — Necessary — Session",
                "rp_currency — Remembers your selected currency (GBP, EUR, or USD). — Functional — 12 months",
                "rp_draft_autosave (LocalStorage) — Temporarily saves the text of your Business Plan locally to prevent data loss. — Functional — Until cleared",
                "__stripe_mid — Used by our payment processor for fraud detection during Token purchases. — Necessary — 1 year",
                "_ga, _gid — Google Analytics cookies to measure site traffic and performance. — Analytics — 24 hours – 2 years",
                "ads_attribution — Tracks which marketing campaign referred you to us. — Marketing — 30–90 days",
            ],
        },
        {
            type: "text",
            title: "4. Notes",
            description:
                "Note: For the most up-to-date list of third-party providers, please refer to the Cookie Settings panel in the website footer.",
        },
        {
            type: "text",
            title: "5. Consent and Lawful Basis",
            bullets: [
                "Essential Cookies: We process data from these cookies based on our legitimate interest in keeping the Service secure and the performance of a contract (to allow you to access the services you paid for). You cannot opt-out of these.",
                "Non-Essential Cookies: We only use Functional, Analytics, and Marketing cookies if you have given your explicit consent via our Cookie Banner or Settings Centre. You can withdraw this consent at any time.",
            ],
        },
        {
            type: "text",
            title: "6. How We Record Consent",
            description:
                "When you interact with our Cookie Banner, we record:",
            bullets: [
                "Your IP address (anonymised where possible).",
                "The date and time of your consent.",
                "The specific categories you accepted or rejected.",
            ],
        },
        {
            type: "text",
            title: "6. Retention of Consent Records",
            description:
                "We retain this record for 24 months to demonstrate compliance with the UK GDPR and PECR (Privacy and Electronic Communications Regulations).",
        },
        {
            type: "text",
            title: "7. Third Parties & International Transfers",
            description:
                "We use trusted third-party providers to help us run the Service. These providers may set their own cookies:",
            bullets: [
                "Payment Processors: (e.g., Stripe/PayPal) for fraud detection.",
                "Analytics: (e.g., Google Analytics) for traffic measurement.",
                "AI Services: To manage API sessions for document generation.",
            ],
        },
        {
            type: "text",
            title: "7. International Transfers",
            description:
                "Some of these providers may process data outside the UK/EEA. We ensure appropriate safeguards are in place (such as Standard Contractual Clauses) to protect your data during these transfers.",
        },
        {
            type: "text",
            title: "8. Managing or Withdrawing Consent",
            description:
                "You have full control over your cookie preferences:",
            bullets: [
                '1. Cookie Settings: Click the "Cookie Preferences" link in the footer of our website at any time to change your choices.',
                "2. Browser Settings: You can block or delete cookies via your browser settings (Chrome, Safari, Firefox, Edge).",
            ],
        },
        {
            type: "text",
            title: "8. Warning",
            description:
                "Warning: If you block Functional cookies (or clear Local Storage), you may lose unsaved drafts of your Business Plan or your currency preferences may reset.",
        },
        {
            type: "text",
            title: "9. Do Not Track / Global Privacy Control",
            description:
                "We endeavour to respect automated privacy signals (such as Global Privacy Control) where technically feasible. If your browser sends a signal indicating a request to opt-out of tracking, our system will automatically disable non-essential Marketing and Analytics cookies for your session.",
        },
        {
            type: "text",
            title: "10. Changes to this Policy",
            description:
                `We may update this Cookies Policy to reflect changes in technology or legislation. Material changes will be highlighted via a notice on the Service. The "Effective date" at the top of this page indicates when the latest version went live.`,
        },
        {
            type: "text",
            title: "11. Contact Details",
            description:
                "If you have questions about how we use cookies, please contact us:",
            bullets: [
                COMPANY_LEGAL_NAME || "",
                `Email: ${COMPANY_EMAIL || ""}`,
                `Address: ${COMPANY_ADDRESS || ""}`,
            ],
        },
    ],
};

export default cookiePolicyEn;