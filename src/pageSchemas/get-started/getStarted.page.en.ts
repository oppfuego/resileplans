import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started — How ${COMPANY_NAME} Works`,
        description:
            `${COMPANY_NAME} is a human-led business planning service. Learn how our experts work with you, how AI supports the process internally, and what you receive.`,
        canonical: "/get-started",
    },

    blocks: [
        // 1️⃣ HERO — людина в центрі
        {
            type: "custom",
            component: "HeroSection",
            title: "How we work with you",
            highlight: `${COMPANY_NAME}`,
            description:
                "This page explains how our experts work with your idea, how decisions are made, and how your business plan is created step by step.",
            image: "image16",
            align: "left",
            primaryCta: { text: "Start My Request", link: "/sign-up" },
        },

        // 2️⃣ WHO WE ARE
        {
            type: "section",
            title: "Who you work with",
            description:
                `${COMPANY_NAME} is not an automated tool. You work with real business analysts, financial specialists, and editors who take responsibility for the final result.`,
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Our team",
                description:
                    "We operate as a distributed consulting team. Each project is handled by a specialist with relevant experience.",
                bullets: [
                    "Business analysts with real-world background",
                    "Financial specialists who build and explain models",
                    "Editors focused on clarity and investor expectations",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
            },
        },

        // 3️⃣ HOW AI IS USED — спокійно і чесно
        {
            type: "section",
            title: "How AI supports our work",
            description:
                "AI helps our experts work faster and more consistently, but it never replaces human judgment.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Where AI helps",
                description:
                    "AI is used internally as a supporting tool during preparation.",
                bullets: [
                    "Structuring background information",
                    "Assisting with early drafts and outlines",
                    "Supporting financial model preparation",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Where humans lead",
                description:
                    "All meaningful decisions and final content are created by people.",
                bullets: [
                    "Business strategy and positioning",
                    "Validation of assumptions",
                    "Final writing, tone, and conclusions",
                ],
            },
        },

        // 4️⃣ PROCESS — ключовий блок
        {
            type: "custom",
            component: "Timeline",
            title: "Our internal workflow",
            description:
                "This is how your business plan moves through our team — from initial request to final delivery.",
            steps: [
                {
                    title: "Request review",
                    description:
                        "Your request is reviewed to understand goals, scope, and industry context.",
                },
                {
                    title: "Expert assignment",
                    description:
                        "A specialist with relevant experience is assigned to your project.",
                },
                {
                    title: "Clarification & alignment",
                    description:
                        "If needed, the expert contacts you to clarify details before work begins.",
                },
                {
                    title: "Research & preparation",
                    description:
                        "Market information and financial structures are prepared with internal tools.",
                },
                {
                    title: "Expert writing",
                    description:
                        "The business plan is written manually by the assigned analyst.",
                },
                {
                    title: "Quality review",
                    description:
                        "Another specialist reviews logic, clarity, and overall consistency.",
                },
                {
                    title: "Delivery",
                    description:
                        "You receive a complete, structured business plan ready for use.",
                },
            ],
        },

        // 5️⃣ WHAT YOU RECEIVE
        {
            type: "custom",
            component: "ValuesIcons",
            title: "What you receive",
            description:
                "Each project includes clear and practical deliverables.",
            values: [
                {
                    title: "Structured business plan",
                    description:
                        "Logical sections, clear flow, and professional presentation.",
                },
                {
                    title: "Financial projections",
                    description:
                        "Multi-year forecasts with explained assumptions.",
                },
                {
                    title: "Editable documents",
                    description:
                        "Formats suitable for editing, sharing, and presenting.",
                },
                {
                    title: "Expert validation",
                    description:
                        "Reviewed and approved by professionals, not auto-generated text.",
                },
                {
                    title: "Revision option",
                    description:
                        "One revision included to refine details if needed.",
                },
                {
                    title: "Optional follow-up work",
                    description:
                        "Additional materials such as pitch decks can be prepared on request.",
                },
            ],
        },

        // 6️⃣ CTA
        {
            type: "custom",
            component: "MissionBanner",
            title: "Start working with our team",
            description:
                "Submit your request and let our specialists take care of the planning.",
            image: "image19",
        },

        // 7️⃣ FAQ — без акценту на швидкість
        {
            type: "faq",
            items: [
                {
                    question: "Is this service automated?",
                    answer:
                        "No. AI is used internally, but every plan is written and reviewed by people.",
                },
                {
                    question: "Will I work with a real expert?",
                    answer:
                        "Yes. Each project is handled by a dedicated specialist.",
                },
                {
                    question: "What if something is unclear?",
                    answer:
                        "The expert will contact you to clarify details before finalizing the plan.",
                },
                {
                    question: "Can I request changes?",
                    answer:
                        "Yes. One revision is included to ensure the plan meets your needs.",
                },
            ],
        },
    ],
};

export default schema;
