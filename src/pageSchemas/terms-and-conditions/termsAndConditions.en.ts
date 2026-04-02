import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_ADDRESS,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_NUMBER,
    COMPANY_PHONE,
} from "@/resources/constants";

const termsSchema: PageSchema = {
    meta: {
        title: "Terms and Conditions – ResilePlans",
        description:
            "Official Terms and Conditions for using resileplans.co.uk – tokens, refunds, payments, AI-generated business plans, consultancy services, and user rights.",
        keywords: [
            "terms and conditions",
            "resileplans",
            "tokens",
            "refunds",
            "business plan",
            "pitch deck",
            "financial model",
            "AI business plan generator",
        ],
        canonical: "/terms-and-conditions",
        ogImage: {
            title: "ResilePlans – Terms and Conditions",
            description: "Full Terms and Conditions for ResilePlans services.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Terms and Conditions",
            bullets: [
                "Effective date: 20 January 2026",
                `These Terms and Conditions govern your access to and use of resileplans.co.uk and any related pages, applications, dashboards or downloadable content (the “Service”), operated by ${COMPANY_LEGAL_NAME} (company number ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}) (“ResilePlans”, “we”, “us”, “our”).`,
            ],
        },
        {
            type: "text",
            title: "1. Introduction",
            bullets: [
                `1.1. These Terms and Conditions (“Terms”) govern your access to and use of resileplans.co.uk and any related pages, applications, dashboards or downloadable content (the “Service”), operated by ${COMPANY_LEGAL_NAME} (company number ${COMPANY_NUMBER}, registered office: ${COMPANY_ADDRESS}) (“ResilePlans”, “we”, “us”, “our”).`,
                "1.2. By creating an account, purchasing Tokens or using any business plan generation features, investor packs, or consultancy services on the Service, you agree to be legally bound by these Terms. If you do not agree to these Terms, you must not use the Service.",
                "1.3. ResilePlans provides an online platform that allows entrepreneurs and businesses to create, generate and download professional Business Plans, Financial Models, Pitch Decks and related corporate documentation using a token-based payment system. Services range from automated AI-generated drafts to specialist-reviewed documents.",
                "1.4. Important Notice: We are a documentation and consultancy support service. We do not provide regulated financial advice, legal counsel, or guaranteed investment brokerage. We do not guarantee that any Business Plan, Pitch Deck or other document will be accepted by any specific investor, bank, grant authority or third party, or that it will result in funding, loans or business success. All investment and business decisions remain entirely with the client.",
            ],
        },
        {
            type: "text",
            title: "2. Definitions",
            bullets: [
                "2.1. Account – your user profile on the Service, created with an email address and password.",
                "2.2. Tokens / Wallet – pre-paid, non-transferable digital credits in your Account that can be used to access paid features (e.g., AI Instant Plan, Investor Pack). Tokens are not cash, e-money, or financial instruments.",
                "2.3. Services – the functionalities and tools made available by ResilePlans, including AI text generation, financial modeling tools, manual expert reviews, and dashboard management.",
                "2.4. Client Input – all information, data, financial figures, business ideas, text and materials that you submit to or upload into the Service.",
                "2.5. Deliverables / Outputs – any Business Plans, Pitch Decks, Financial Spreadsheets, reports or other materials generated or prepared for you via the Service based on your Client Input.",
                "2.6. Third-Party Platforms – any external systems, investors, banks, AI API providers (e.g., OpenAI), or cloud services with which you may use the Deliverables.",
                "2.7. Order – a confirmed purchase of Tokens or a specific Service plan.",
            ],
        },
        {
            type: "text",
            title: "3. Eligibility & Account Registration",
            bullets: [
                "3.1. You must be at least 18 years old to use the Service. If you are using the Service on behalf of a business, company or organisation, you confirm that you are authorised to bind that entity to these Terms.",
                "3.2. You must provide accurate, current and complete information when creating your Account. You are responsible for maintaining the confidentiality of your login details and for all activities that occur under your Account.",
                `3.3. If you suspect unauthorised access or any security breach, you must notify us promptly at ${COMPANY_EMAIL}.`,
            ],
        },
        {
            type: "text",
            title: "4. Nature of Services & Contract Structure",
            bullets: [
                "4.1. ResilePlans provides tools for preparing professional business documentation. Depending on the package (AI Instant Plan, Investor Pack, or Custom Plan), your documents may be generated purely by AI, or prepared with human specialist input.",
                "4.2. Deliverables are generated based on the Client Input you provide. We do not independently verify the accuracy, realistic nature, or legality of your financial projections or business model. You remain solely responsible for ensuring that all data in your Business Plan is accurate and not misleading to potential investors.",
                "4.3. The decision-making criteria of investors, banks, and grant bodies are outside our control. We do not promise that any particular document will comply with a specific third party’s lending criteria or investment thesis.",
                "4.4. Your contract with us is formed when you create an Account and is supplemented each time you purchase Tokens or order a Service.",
                "4.5. Nothing in the Service constitutes financial advice under the Financial Services and Markets Act 2000 (FSMA) or similar legislation. You are responsible for seeking independent financial or legal advice before soliciting investment.",
                '4.6. AI-generated Outputs may contain "hallucinations" (factually incorrect data) or generic assumptions. You must carefully review, edit and validate all financial assumptions and market data before using the documents.',
            ],
        },
        {
            type: "text",
            title: "5. Scope of Services & Delivery",
            bullets: [
                "5.1. Depending on your chosen plan, the Services may include AI Instant Plan: Automated generation of business plan sections.",
                "5.2. Depending on your chosen plan, the Services may include Investor Pack: Comprehensive plans including financial projections and pitch decks.",
                "5.3. Depending on your chosen plan, the Services may include Custom Plan: Bespoke consultancy and drafting.",
                "5.4. Depending on your chosen plan, the Services may include token-based payment and project management via the dashboard.",
                "5.5. All Deliverables are provided digitally via email (to the address registered on your Account) and/or available for download in your Account dashboard.",
                "5.6. AI Instant Plans are delivered immediately or within minutes, subject to system availability.",
                "5.7. Investor & Custom Plans delivery times depend on the complexity of the project. Estimated timelines (typically 3–7 business days) will be indicated at the start of the project.",
                "5.8. You have a period of 7 days from delivery to review the Deliverables. If no revisions are requested within this timeframe, the Service is deemed successfully completed.",
                "5.9. We do not guarantee that all third-party software (e.g., Excel versions, PDF readers) will render the documents perfectly if your software is outdated.",
            ],
        },
        {
            type: "text",
            title: "6. Client Input & Your Responsibilities",
            bullets: [
                "6.1. You warrant that you have all necessary rights and permissions to use the Client Input (including any intellectual property or trade secrets included therein).",
                "6.2. You must ensure that Client Input is lawful and does not infringe any third-party rights. You must not use the Service to generate documentation for illegal businesses, fraudulent schemes, money laundering, or prohibited industries.",
                "6.3. You are solely responsible for backing up your Client Input and Deliverables. We are not a cloud storage provider and do not guarantee permanent archiving of your business plans.",
                "6.4. You must not upload content that contains malware or malicious code.",
                "6.5. You remain responsible for any personal data contained in your Client Input (e.g., details of your company directors) and for complying with applicable data protection laws (GDPR) as a controller of that data.",
                "6.6. You must not use the Service to fabricate financial history or knowingly misrepresent the state of your business to defraud investors.",
            ],
        },
        {
            type: "text",
            title: "7. Acceptable Use",
            bullets: [
                "7.1. You must use the Service in a fair and lawful manner.",
                "7.2. You must not reverse engineer, scrape, or automate data extraction from the Service.",
                "7.3. You must not use robots or spiders to create Accounts.",
                "7.4. You must not attempt to manipulate the Token system or billing records.",
                "7.5. You must not resell the AI-generated content as a standalone software service (SaaS) competing with ResilePlans.",
                "7.6. We may apply rate limits or suspend access if we suspect abuse or risk to our system stability.",
            ],
        },
        {
            type: "text",
            title: "8. Tokens, Pricing & Payment",
            bullets: [
                "8.1. Accepted payment methods: Visa and Mastercard. We accept payments in GBP (£), EUR (€), and USD ($).",
                "8.2. The reference rate for Tokens is approximately 100 Tokens = £1.00 / €1.17 / $1.29.",
                "8.3. AI Instant Plan: 900 Tokens (approx. £9.00 / €10.53 / $11.61).",
                "8.4. Investor Pack: 5000 Tokens (approx. £50.00 / €58.50 / $64.50).",
                "8.5. Custom Plan: Custom Token amount based on agreed scope.",
                "8.6. Prices are subject to change and will be displayed at the point of purchase.",
                "8.7. Tokens are an advance payment for Services. They are not a bank account or financial instrument.",
                "8.8. By submitting a payment method, you authorise us and our payment processors to charge the relevant amount.",
                "8.9. Tokens are deducted from your Wallet when you order a plan or feature. Once consumed for a Service (e.g., generating a plan), they are non-returnable.",
                "8.10. Tokens do not currently have a fixed expiry date, but we reserve the right to introduce inactivity rules with prior notice.",
                "8.11. Prices typically include applicable taxes unless stated otherwise. You will receive an electronic receipt/invoice.",
            ],
        },
        {
            type: "text",
            title: "9. Cancellations, Refunds & Chargebacks",
            bullets: [
                "9.1. The Service provides digital content. By purchasing Tokens and ordering a Business Plan, you acknowledge and agree that performance begins immediately (especially for AI plans or when a specialist starts work). Consequently, you explicitly waive your right to a 14-day cooling-off period under the Consumer Contracts Regulations 2013, to the extent permitted by law.",
                '9.2. Wallet top-ups are generally non-refundable. Refunds are only considered in exceptional circumstances (e.g., technical error resulting in double charge). Subjectivity regarding the "quality" of a business idea or the writing style is not grounds for a refund.',
                `9.3. If a technical fault prevents delivery, you must notify ${COMPANY_EMAIL}. We will investigate and may re-credit Tokens or re-perform the service.`,
                "9.4. Unjustified chargebacks will result in immediate Account termination and potential debt recovery action.",
            ],
        },
        {
            type: "text",
            title: "10. Intellectual Property",
            bullets: [
                `10.1. The Service (software, design, templates, financial formulas, AI models) is owned by ${COMPANY_LEGAL_NAME} or its licensors.`,
                "10.2. Upon payment of Tokens, we grant you a perpetual, non-exclusive, worldwide licence to use, download, modify, and distribute the Deliverables (Business Plans, Pitch Decks) for your business purposes (e.g., sending to investors, partners).",
                "10.3. You must not resell access to the Service itself or white-label our platform without a separate partnership agreement.",
                "10.4. We do not claim ownership of your specific business idea or Client Input. However, you grant us a licence to process your Input solely to generate the Deliverables and improve our AI models (anonymised data only).",
            ],
        },
        {
            type: "text",
            title: "11. Confidentiality",
            bullets: [
                "11.1. We recognise that Business Plans contain sensitive commercial data. We agree to treat your Client Input and Deliverables as Confidential Information.",
                "11.2. We will not share your Confidential Information with our employees and contractors bound by NDAs (Non-Disclosure Agreements).",
                "11.3. We will not share your Confidential Information except with trusted AI and cloud infrastructure providers necessary to run the Service.",
                "11.4. We may disclose Confidential Information where required by law or court order.",
                "11.5. This obligation does not apply to information that is already public or becomes public through no fault of ours.",
            ],
        },
        {
            type: "text",
            title: "12. Third-Party Platforms & Links",
            bullets: [
                "12.1. The Service may interact with Third-Party Platforms (e.g., payment gateways, cloud drives). We are not responsible for the security or practices of these third parties.",
                "12.2. If you use our documents to apply to third-party investors or banks, their terms and criteria apply. We do not endorse any specific investor or lending platform.",
            ],
        },
        {
            type: "text",
            title: "13. Warranties & Disclaimers",
            bullets: [
                "13.1. We warrant that we will provide the Service with reasonable skill and care.",
                '13.2. The Service is provided "as is". We expressly disclaim any warranty that the Deliverables will secure funding, grants, or loans.',
                "13.3. The Service is provided as is and we expressly disclaim any warranty that the Deliverables will be error-free regarding financial calculations (Excel formulas should be checked).",
                "13.4. The Service is provided as is and we expressly disclaim any warranty that the Deliverables will comply with specific regulatory standards of your industry.",
                "13.5. You acknowledge that AI technology is experimental and may produce content that is plausible-sounding but factually incorrect. You are the final editor of your business plan.",
            ],
        },
        {
            type: "text",
            title: "14. Limitation of Liability",
            bullets: [
                "14.1. Nothing in these Terms limits liability for death or personal injury caused by negligence, or for fraud.",
                "14.2. Subject to Clause 14.1, our total aggregate liability to you in connection with the Service shall not exceed the total fees (Tokens) paid by you to us in the 12 months preceding the claim.",
                "14.3. We shall not be liable for loss of profits, business, revenue, or anticipated savings (including failed investments).",
                "14.4. We shall not be liable for loss of goodwill or reputation.",
                "14.5. We shall not be liable for loss of data.",
                "14.6. We shall not be liable for indirect or consequential losses.",
            ],
        },
        {
            type: "text",
            title: "15. Indemnity",
            bullets: [
                `15.1. You agree to indemnify and hold harmless ${COMPANY_LEGAL_NAME}, its directors and employees from any claims, damages, losses, and legal fees arising out of your breach of these Terms.`,
                "15.2. You agree to indemnify and hold harmless the company for your violation of any law or third-party rights (including copyright or privacy).",
                "15.3. You agree to indemnify and hold harmless the company for any claim by an investor or third party resulting from your use of the Deliverables (e.g., if you are accused of misrepresentation in your business plan).",
            ],
        },
        {
            type: "text",
            title: "16. Data Protection & Privacy",
            bullets: [
                "16.1. We process personal data in accordance with the UK GDPR and Data Protection Act 2018.",
                "16.2. Please refer to our Privacy Policy for details on how we collect and protect your data.",
                "16.3. We may share data with payment processors and fraud prevention tools strictly for operational purposes.",
            ],
        },
        {
            type: "text",
            title: "17. Suspension & Termination",
            bullets: [
                "17.1. We may suspend or terminate your Account if we reasonably believe you have breached these Terms, are involved in fraud, or pose a security risk.",
                "17.2. You may close your Account at any time. Unused Tokens are not automatically refunded upon closure.",
                "17.3. Upon termination, your right to access the Service ceases. We may retain records as required by tax and legal regulations.",
            ],
        },
        {
            type: "text",
            title: "18. Changes to the Service or Terms",
            bullets: [
                "18.1. We may update the Service, features, and pricing from time to time.",
                "18.2. We may modify these Terms. Material changes will be notified to you (e.g., via email or dashboard notice). Continued use of the Service constitutes acceptance of the new Terms.",
            ],
        },
        {
            type: "text",
            title: "19. Governing Law & Jurisdiction",
            bullets: [
                "19.1. These Terms are governed by the laws of England and Wales.",
                "19.2. The courts of England and Wales shall have exclusive jurisdiction to settle any dispute. If you are a consumer in Scotland, Northern Ireland or the EU, you may have additional rights to bring proceedings in your local courts.",
            ],
        },
        {
            type: "text",
            title: "20. Miscellaneous",
            bullets: [
                "20.1. If any provision of these Terms is invalid, the remaining provisions remain in full force.",
                "20.2. No waiver of any term shall be deemed a further or continuing waiver of such term.",
                "20.3. You may not assign your rights under these Terms without our consent. We may assign our rights to an affiliate or in the event of a merger/acquisition.",
                "20.4. These Terms constitute the entire agreement between you and ResilePlans regarding the Service.",
            ],
        },
        {
            type: "text",
            title: "21. Contact Details",
            bullets: [
                COMPANY_LEGAL_NAME || "",
                `Address: ${COMPANY_ADDRESS || ""}`,
                `Company number: ${COMPANY_NUMBER || ""}`,
                `Email: ${COMPANY_EMAIL || ""}`,
                `Tel: ${COMPANY_PHONE || ""}`,
            ],
        },
    ],
};

export default termsSchema;