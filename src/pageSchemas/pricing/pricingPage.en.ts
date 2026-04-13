import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Pricing — How ${COMPANY_NAME} Works`,
        description:
            `Clear pricing based on how much expert involvement your business needs. From AI-assisted drafts to full expert-led planning.`,
        canonical: "/pricing",
    },

    blocks: [
        // 1️⃣ HERO — пояснення, не продаж
        {
            type: "custom",
            component: "HeroSection",
            title: "Pricing based on involvement",
            highlight: "not templates",
            description:
                "Our pricing reflects how much expert time and responsibility is involved in your project — not artificial feature limits.",
            image: "image19",
            align: "left",
            primaryCta: { text: "Choose my option", link: "#pricing" },
        },

        // 2️⃣ HOW PRICING WORKS
        {
            type: "section",
            title: "How our pricing model works",
            description:
                "We don’t sell generic plans. Each option represents a different level of human involvement.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "AI-assisted",
                description:
                    "Minimal human involvement. Best for early exploration and validation.",
                bullets: [
                    "AI-generated structure",
                    "Fast output",
                    "Self-managed editing",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Expert-led",
                description:
                    "Full responsibility on our side. Best when outcomes matter.",
                bullets: [
                    "Assigned specialist",
                    "Human-written content",
                    "Quality review included",
                ],
            },
        },

        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "starter",
                    title: "AI Draft",
                    price: "€9",
                    tokens: 900,
                    badgeTop: "Fast Start",
                    description:
                        "Use your tokens to instantly generate a structured business plan with AI. Perfect for testing ideas and quick drafts.",
                    features: [
                        "Instant AI generation",
                        "Editable business plan",
                        "Multiple languages",
                        "Unlimited regenerations with tokens",
                    ],
                    buttonText: "Generate with AI",
                    buttonLink: "/checkout?plan=ai",
                },
                {
                    type: "pricing",
                    variant: "pro",
                    title: "Expert Business Plan",
                    price: "€50",
                    tokens: 5000,
                    badgeTop: "Most Popular",
                    description:
                        "Spend tokens on a more refined business plan with expert-level structure and deeper analysis. Delivered with a realistic review timeframe.",
                    features: [
                        "Advanced AI-generated plan",
                        "Enhanced structure & clarity",
                        "Improved financial logic",
                        "Professional formatting",
                        "Simulated expert review experience",
                    ],
                    buttonText: "Get Expert Plan",
                    buttonLink: "/checkout?plan=expert",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Investor Pack",
                    price: "€200",
                    tokens: 20000,
                    badgeTop: "For Fundraising",
                    description:
                        "Use more tokens to generate a comprehensive, investor-focused business plan with deeper insights and strategic positioning.",
                    features: [
                        "In-depth AI-generated plan",
                        "Detailed financial projections",
                        "Investor-ready structure",
                        "Strategic positioning",
                        "Priority processing simulation",
                    ],
                    buttonText: "Unlock Investor Pack",
                    buttonLink: "/checkout?plan=investor",
                },
            ],
        },

        {
            type: "section",
            align: "center",
            left: {
                type: "pricing",
                variant: "custom",
                title: "Custom Project",
                price: "dynamic",
                tokens: 0,
                description: "A flexible token-based solution tailored to your specific needs.",
                features: ["Flexible scope", "Custom logic", "Scalable tokens"],
                buttonText: "Request Custom Plan",
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Need something more specific?",
                description:
                    "If your project requires a unique approach or larger scope, we can create a custom token-based solution. Contact us to define your needs and get a tailored offer.",
            }
        },

        // 4️⃣ WHO SHOULD CHOOSE WHAT
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Which option fits you",
            description:
                "Choose based on what you need — not on features you don’t.",
            values: [
                {
                    title: "Students & early ideas",
                    description:
                        "AI Draft helps explore structure and logic quickly.",
                },
                {
                    title: "Founders & SMEs",
                    description:
                        "Expert Plan provides credibility and clarity.",
                },
                {
                    title: "Investors & grants",
                    description:
                        "Investor Package covers full presentation needs.",
                },
                {
                    title: "Consultants",
                    description:
                        "Reusable structure for client work.",
                },
                {
                    title: "Accelerators",
                    description:
                        "Standardized yet human-reviewed output.",
                },
                {
                    title: "Scaling teams",
                    description:
                        "Clear documentation for growth planning.",
                },
            ],
        },


        // 7️⃣ FAQ
        {
            type: "faq",
            items: [
                {
                    question: "Why is the Expert Plan so affordable?",
                    answer:
                        "Because AI speeds up preparation, allowing experts to focus on logic and quality.",
                },
                {
                    question: "Is AI content reviewed by humans?",
                    answer:
                        "Yes, in all expert-led options.",
                },
                {
                    question: "Can I upgrade later?",
                    answer:
                        "Yes. Many clients start with AI Draft and upgrade.",
                },
                {
                    question: "Do prices include revisions?",
                    answer:
                        "Expert options include at least one revision.",
                },
                {
                    question: "Is there long-term commitment?",
                    answer:
                        "No. All plans are one-time engagements unless otherwise agreed.",
                },
            ],
        },

    ],
};

export default schema;
