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
                    title: "AI Instant Plan",
                    price: "€9",
                    tokens: 900,
                    badgeTop: "Instant",
                    description:
                        "Generate your business plan in seconds with our AI-powered generator. Perfect for early-stage ideas or quick drafts.",
                    features: [
                        "Instant AI-generated plan",
                        "Editable PDF & DOCX",
                        "Multiple languages",
                        "Unlimited revisions",
                    ],
                    buttonText: "Start with AI",
                    buttonLink: "/checkout?plan=ai",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Investor Pack",
                    price: "€50",
                    tokens: 5000,
                    badgeTop: "Complete Package",
                    description:
                        "All-in-one: full business plan + investor pitch deck + design layout. Ideal for fundraising and professional presentations.",
                    features: [
                        "Business plan + Pitch deck",
                        "Branded design templates",
                        "Investor-ready formatting",
                        "Expert revisions included",
                    ],
                    buttonText: "Get Full Pack",
                    buttonLink: "/checkout?plan=premium",
                },
                {
                    type: "pricing",
                    variant: "custom",
                    title: "Custom Plan",
                    price: "dynamic",
                    tokens: 0,
                    description: "Pay what fits your needs.",
                    features: ["Flexible", "Fast", "Tailored"],
                    buttonText: "Build Custom Plan",
                },
            ],
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
