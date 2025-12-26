import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const caseStudiesSchema: PageSchema = {
    meta: {
        title: `Case Studies — How ${COMPANY_NAME} Delivers Results`,
        description:
            `Real examples of how ${COMPANY_NAME} helps businesses move from idea to execution using expert-led planning supported by AI.`,
        canonical: "/case-studies",
    },

    blocks: [
        // 1️⃣ HERO — не “вау”, а довіра
        {
            type: "custom",
            component: "HeroSection",
            title: "How our clients succeed",
            highlight: "with structured planning",
            description:
                "This page shows how our company works with real businesses — what problems they bring, how we approach them, and what outcomes they achieve.",
            image: "image18",
            align: "left",
        },

        // 3️⃣ COMMON PROBLEMS (company insight)
        {
            type: "section",
            title: "Common challenges we see",
            description:
                "Despite different industries, most clients come to us with similar issues.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Before working with us",
                description:
                    "Most clients already have an idea — but struggle to formalize it.",
                bullets: [
                    "Unclear business structure",
                    "Weak financial logic",
                    "Difficulty explaining value to investors",
                    "Too much time spent on documentation",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "What they need",
                description:
                    "They don’t need generic templates — they need clarity and credibility.",
                bullets: [
                    "Clear narrative and logic",
                    "Investor-ready structure",
                    "Numbers that make sense",
                    "Fast turnaround",
                ],
            },
        },

        // 4️⃣ HOW COMPANY HANDLES CASES (Timeline, не StoryTimeline)
        {
            type: "custom",
            component: "Timeline",
            title: "How we approach every case",
            description:
                "Regardless of industry, every project inside our company follows the same internal logic.",
            steps: [
                {
                    title: "Problem framing",
                    description:
                        "We clarify what the business really is, who it’s for, and why it should exist.",
                },
                {
                    title: "Market & logic validation",
                    description:
                        "Experts validate assumptions using research and AI-supported data.",
                },
                {
                    title: "Financial modeling",
                    description:
                        "Revenue, costs, and growth are built in a way investors can understand.",
                },
                {
                    title: "Narrative & structure",
                    description:
                        "The plan is written as a coherent story, not a set of sections.",
                },
                {
                    title: "Quality review",
                    description:
                        "Each plan is reviewed internally before delivery.",
                },
            ],
        },

        // 5️⃣ CASE TYPES (instead of random stories)
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Types of results we deliver",
            description:
                "These are the most common outcomes our clients achieve.",
            values: [
                {
                    title: "Investor readiness",
                    description:
                        "Clear plans that help founders confidently present to investors.",
                },
                {
                    title: "Funding applications",
                    description:
                        "Documents suitable for grants, accelerators, and bank reviews.",
                },
                {
                    title: "Strategic clarity",
                    description:
                        "Founders understand their own business better after the process.",
                },
                {
                    title: "Scalable structure",
                    description:
                        "Plans that can be reused for growth, hiring, and expansion.",
                },
                {
                    title: "Time savings",
                    description:
                        "Weeks of work compressed into a structured 24-hour process.",
                },
                {
                    title: "Professional credibility",
                    description:
                        "Plans that look and read like real consulting output.",
                },
            ],
        },

        // 6️⃣ REAL EXAMPLES (коротко, але предметно)
        {
            type: "section",
            title: "Selected case examples",
            description:
                "A few representative projects that show how this process works in practice.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "SaaS startup — seed round",
                description:
                    "A first-time founder needed a clear pitch-ready plan.",
                bullets: [
                    "Clarified value proposition",
                    "Built 3-year revenue model",
                    "Prepared investor narrative",
                    "Result: successful seed funding",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Consultant → agency",
                description:
                    "A solo consultant wanted to scale into an agency.",
                bullets: [
                    "Service packaging",
                    "Pricing logic",
                    "Growth roadmap",
                    "Result: first B2B contracts",
                ],
            },
        },

        // 7️⃣ CTA — стати кейсом
        {
            type: "custom",
            component: "TextWithButton",
            title: "Your business could be next",
            description:
                `If you’re facing similar challenges, our team can guide you through the same process.`,
            buttonText: "Start my project",
            buttonLink: "/profile",
            align: "center",
        },

        // 8️⃣ FINAL CTA
        {
            type: "custom",
            component: "MissionBanner",
            title: "Structured planning. Real outcomes.",
            description:
                `At ${COMPANY_NAME}, every case is treated as a real business — not a template.`,
            image: "image16",
        },
    ],
};

export default caseStudiesSchema;
