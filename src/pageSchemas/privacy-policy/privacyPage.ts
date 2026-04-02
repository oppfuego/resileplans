import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Privacy Policy – ResilePlans",
        description:
            "ResilePlans Privacy Policy: details on what data we collect, how we use it, how long we retain it, and your rights under UK GDPR.",
        keywords: [
            "privacy policy",
            "GDPR",
            "data protection",
            "resileplans",
            "personal data",
            "uk gdpr",
            "business plan",
            "financial model",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: "ResilePlans – Privacy Policy",
            description:
                "Transparent privacy practices for ResilePlans under UK GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description: "Effective date: 20 January 2026",
        },
        {
            type: "text",
            title: "1. Introduction",
            description:
                "We respect your privacy and the confidentiality of your business ideas. This Privacy Policy explains what personal data we collect, why we use it, how long we keep it, and how you can exercise your rights when using resileplans.co.uk and our related services (the “Service”). By using the Service to generate Business Plans, Investor Packs, or Financial Models, you acknowledge that your personal data will be processed in accordance with this Privacy Policy and applicable data protection laws, including the UK GDPR and the Data Protection Act 2018.",
            bullets: [
                `Controller: ${COMPANY_LEGAL_NAME} (Company No. ${COMPANY_NUMBER}), ${COMPANY_ADDRESS} (“ResilePlans”, “we”, “us”, “our”).`,
                `Contact: ${COMPANY_EMAIL}`,
                "Scope: This Policy applies to all users of the Service, including individual entrepreneurs, company directors, and corporate representatives.",
            ],
        },
        {
            type: "text",
            title: "2. Personal Data We Collect",
            description:
                "We collect only the data necessary to generate your documents, process payments, and improve our AI models.",
            bullets: [
                "2.1. Data you provide directly",
                "2.2. Data collected automatically",
                "2.3. Data from third parties",
                "2.4. Special Category Data",
            ],
        },
        {
            type: "text",
            title: "2.1. Data you provide directly",
            bullets: [
                "Account & Identity: Name, email address, phone number, and password.",
                "Business & Project Inputs: Information contained in the business plans you generate. This often includes mixed data: commercial facts (market size, revenue) and personal data of stakeholders (e.g., names of directors, CVs of team members, shareholding structures, and biographies of founders).",
                "Financial Data (for Plans): Projected revenues, salary data of staff, and investment requirements entered into our financial modeling tools.",
                "Billing Information: Billing name, registered address, VAT/Tax ID, and payment method details.",
                'Wallet & Tokens: Transaction history, Token consumption logs (e.g., "5000 Tokens used for Investor Pack"), and current balance.',
                "Support & Consultancy: Communications with our support team or details provided to our human consultants for Custom Plan orders.",
            ],
        },
        {
            type: "text",
            title: "2.2. Data collected automatically",
            bullets: [
                "Technical Data: IP address, browser type, device information, timezone, and operating system.",
                "Usage & AI Interaction: How you interact with the AI (prompts used, sections generated, edits made), which helps us refine the quality of our output.",
                "Security Telemetry: Login logs, failed authentication attempts, and fraud detection signals (e.g., to prevent payment fraud or token abuse).",
            ],
        },
        {
            type: "text",
            title: "2.3. Data from third parties",
            bullets: [
                "Payment Processors: Confirmation of payment, partial card details (last 4 digits), and fraud risk scores. We do not store full credit card numbers.",
                "Linked Accounts: If you choose to log in via a third-party provider (e.g., Google or LinkedIn), we receive your basic profile info based on your privacy settings.",
            ],
        },
        {
            type: "text",
            title: "2.4. Special Category Data",
            description:
                'We do not require "special category" data (race, religion, health, political views) to create a business plan. However, if you voluntarily include such information in your founder biography or market research, we process it on the basis of your explicit consent given by the act of uploading it.',
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            description:
                "We process personal data under the UK GDPR on the following legal bases:",
            bullets: [
                "3.1. Performance of a Contract",
                "3.2. Legitimate Interests",
                "3.3. Legal Obligation",
                "3.4. Consent",
            ],
        },
        {
            type: "text",
            title: "3.1. Performance of a Contract",
            bullets: [
                "To create your Account and provide access to the platform.",
                "To generate the Business Plans, Financial Models, and Pitch Decks you have ordered using Tokens.",
                "To facilitate manual consultancy services for Custom Plan clients (where a human expert reviews your data).",
                "To manage your Token Wallet and process payments.",
            ],
        },
        {
            type: "text",
            title: "3.2. Legitimate Interests",
            bullets: [
                "Fraud Prevention: Detecting unusual token usage or suspicious payments to protect our business.",
                "AI Improvement: Using de-identified or aggregated input data to train and refine our prompts and financial models (ensuring no personal data leaks into public models).",
                "Security: Protecting our infrastructure from cyber-attacks.",
                "B2B Communication: Sending relevant service updates to business clients.",
            ],
        },
        {
            type: "text",
            title: "3.3. Legal Obligation",
            bullets: [
                "Maintaining financial records for HMRC and tax authorities.",
                "Complying with court orders or regulatory requests.",
            ],
        },
        {
            type: "text",
            title: "3.4. Consent",
            bullets: [
                "Sending marketing newsletters (which you can opt-out of at any time).",
                "Publishing success stories or testimonials that identify you personally.",
            ],
        },
        {
            type: "text",
            title: "4. Automated Processing & AI",
            bullets: [
                "4.1. AI Generation: The core of our Service uses Generative AI (Large Language Models) to draft text and calculate financial projections. Your input data is processed by these algorithms to produce the output.",
                "4.2. Data Privacy in AI: We utilise enterprise-grade API agreements where feasible to ensure your specific business secrets are not used to train public-facing models in a way that could expose your IP.",
                "4.3. No Legal Decisions: Our AI does not make automated decisions that have legal or similarly significant effects on you (such as credit scoring). It acts solely as a drafting assistant.",
            ],
        },
        {
            type: "text",
            title: "5 Sharing and International Transfers",
            description:
                "We share personal data only when necessary to operate the Service:",
            bullets: [
                "AI & Cloud Providers: Trusted third-party processors (e.g., cloud hosting, AI API providers) that provide the computational power to generate your plans.",
                "Consultants: For Custom Plans, we may share your data with contracted business analysts or financial experts bound by Non-Disclosure Agreements (NDAs).",
                "Payment Gateways: To process Visa/Mastercard transactions securely.",
                "Professional Advisers: Lawyers, accountants, and insurers.",
            ],
        },
        {
            type: "text",
            title: "5.1 International Transfers",
            description:
                "Some of our technology partners may be located outside the UK or EEA (e.g., in the USA). We ensure your data is protected through:",
            bullets: [
                "Adequacy Decisions: UK/EU recognition of the destination country's data protection standards.",
                "Standard Contractual Clauses (SCCs / IDTA): Legal contracts that require the recipient to protect your data.",
            ],
        },
        {
            type: "text",
            title: "6. Retention of Data",
            description:
                "We adhere to strict data retention policies:",
            bullets: [
                "Generated Documents: We retain your Business Plans and Financial Models in your dashboard for as long as your Account is active, allowing you to download or edit them. You may delete these documents manually at any time.",
                "Inactive Accounts: If your Account remains inactive for 24 months, we may delete your data and documents to save storage and protect privacy.",
                "Financial Records: We retain transaction data (Token purchases) for 6 years as required by UK tax law.",
                "Consultancy Data: Information shared for Custom Plans is retained for the duration of the project plus a limitation period for legal claims.",
            ],
        },
        {
            type: "text",
            title: "7. Security",
            description:
                "We treat your business data with high confidentiality. Measures include:",
            bullets: [
                "Encryption: Data is encrypted in transit (TLS) and at rest where possible.",
                "Access Control: Only authorized staff and consultants have access to Custom Plan data.",
                "Segregation: We separate payment data from business plan content.",
            ],
        },
        {
            type: "text",
            title: "7.1 Security Notice",
            description:
                "While we implement robust security, no online transmission is 100% secure. You are responsible for keeping your password confidential.",
        },
        {
            type: "text",
            title: "8. Your Rights",
            description:
                "Under the UK GDPR, you have the right to:",
            bullets: [
                "Access: Request a copy of the personal data we hold about you.",
                "Rectification: Correct inaccurate personal data (e.g., update your name).",
                'Erasure: Request deletion of your data ("Right to be Forgotten"), subject to our legal obligation to keep financial records.',
                "Portability: Request your data in a machine-readable format.",
                "Object: Object to processing based on legitimate interests (e.g., direct marketing).",
            ],
        },
        {
            type: "text",
            title: "8.1 Exercising Your Rights",
            description: `To exercise these rights, email ${COMPANY_EMAIL}. We aim to respond within 30 days.`,
        },
        {
            type: "text",
            title: "9. Cookies",
            description:
                "We use cookies to manage your login session, remember your currency preferences (£/€/$), and analyze site traffic. Essential cookies are required for the Service to function (e.g., maintaining your Token balance). For more details, please refer to our Cookie Policy.",
        },
        {
            type: "text",
            title: "10. Contact Details",
            bullets: [
                COMPANY_LEGAL_NAME || "",
                `Address: ${COMPANY_ADDRESS || ""}`,
                `Company Number: ${COMPANY_NUMBER || ""}`,
                `Email: ${COMPANY_EMAIL || ""}`,
                `Phone: ${COMPANY_PHONE || ""}`,
            ],
        },
        {
            type: "text",
            title: "Supervisory Authority",
            description:
                "If you believe we have mishandled your data, you have the right to complain to the Information Commissioner’s Office (ICO) in the UK. We would, however, appreciate the chance to deal with your concerns before you approach the ICO.",
        },
    ],
};

export default privacyPolicySchema;