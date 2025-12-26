import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Get Started — How ${COMPANY_NAME} Works`,
        description:
            `${COMPANY_NAME} is a human-first business planning service. Learn how our experts work, how AI supports the process, and what you receive in 24 hours.`,
        canonical: "/get-started",
    },

    blocks: [
        // 1️⃣ HERO — спокійний, впевнений
        {
            type: "custom",
            component: "HeroSection",
            title: "How we work with you",
            highlight: `${COMPANY_NAME}`,
            description:
                "This page explains how our company operates, how experts and AI collaborate, and what happens after you submit your request.",
            image: "image16",
            align: "left",
            primaryCta: { text: "Start My Request", link: "/sign-up" },
        },

        // 2️⃣ WHO WE ARE (коротко, але по суті)
        {
            type: "section",
            title: "Who you work with",
            description:
                `${COMPANY_NAME} is not an automated generator. We are a team of business analysts, financial specialists, and editors supported by AI tools.`,
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "The company",
                description:
                    "We operate as a distributed consulting team. Each project is assigned to a real specialist with relevant industry experience.",
                bullets: [
                    "Business analysts & financial modelers",
                    "Editors with investor experience",
                    "Internal quality review process",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
            },
        },

        // 3️⃣ HOW AI IS USED (без маркетингу)
        {
            type: "section",
            title: "How we use AI (and where we don’t)",
            description:
                "AI supports our team, but never replaces human decision-making.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "AI supports",
                description:
                    "AI is used internally to speed up structured research and preparation.",
                bullets: [
                    "Market data aggregation",
                    "Initial structure drafts",
                    "Financial model templates",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Humans decide",
                description:
                    "All strategic decisions, wording, assumptions, and conclusions are made by experts.",
                bullets: [
                    "Strategy & positioning",
                    "Assumption validation",
                    "Final writing & tone",
                ],
            },
        },

        // 4️⃣ COMPANY PROCESS — Timeline (ключова частина)
        {
            type: "custom",
            component: "Timeline",
            title: "Our internal workflow",
            description:
                "This is how a business plan moves through our company — from request to delivery.",
            steps: [
                {
                    title: "Request intake",
                    description:
                        "Your submission is reviewed by our coordination team to understand scope, goals, and industry.",
                },
                {
                    title: "Expert assignment",
                    description:
                        "We assign a specialist with experience relevant to your business model.",
                },
                {
                    title: "Clarification & alignment",
                    description:
                        "If needed, the expert уточнює деталі before writing begins.",
                },
                {
                    title: "Research & modeling",
                    description:
                        "Market data and financial models are prepared with AI-assisted tooling.",
                },
                {
                    title: "Expert writing",
                    description:
                        "The plan is written manually by the assigned analyst.",
                },
                {
                    title: "Internal quality review",
                    description:
                        "A second specialist checks logic, clarity, and investor readiness.",
                },
                {
                    title: "Delivery",
                    description:
                        "You receive the final document within 24 hours.",
                },
            ],
        },

        // 5️⃣ WHAT YOU RECEIVE (чітко і без прикрас)
        {
            type: "custom",
            component: "ValuesIcons",
            title: "What you receive",
            description:
                "Every project includes the following deliverables.",
            values: [
                {
                    title: "Structured business plan",
                    description:
                        "Clear sections, logical flow, and professional formatting.",
                },
                {
                    title: "Financial projections",
                    description:
                        "3-year forecasts with explained assumptions.",
                },
                {
                    title: "Editable formats",
                    description:
                        "Delivered in formats suitable for editing and presentation.",
                },
                {
                    title: "Expert validation",
                    description:
                        "Reviewed by professionals, not auto-generated text.",
                },
                {
                    title: "Revision option",
                    description:
                        "One revision included after delivery.",
                },
                {
                    title: "Optional follow-up",
                    description:
                        "Pitch decks and updates available if needed.",
                },
            ],
        },

        // 7️⃣ CTA — спокійний
        {
            type: "custom",
            component: "MissionBanner",
            title: "Start working with our team",
            description:
                "Submit your request and let our specialists handle the rest.",
            image: "image19",
        },

        // 8️⃣ FAQ — коротко, по суті
        {
            type: "faq",
            items: [
                {
                    question: "Is this service automated?",
                    answer:
                        "No. AI is used internally, but all plans are written by people.",
                },
                {
                    question: "Can I communicate with the expert?",
                    answer:
                        "Yes. Communication is available during the process.",
                },
                {
                    question: "What happens if something is unclear?",
                    answer:
                        "The expert will reach out before finalizing the plan.",
                },
                {
                    question: "Is 24 hours guaranteed?",
                    answer:
                        "Yes, for standard projects. Complex cases may be discussed in advance.",
                },
            ],
        },
    ],
};

export default schema;
