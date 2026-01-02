import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Business Plans Built by Experts`,
        description:
            "Professional business plans written by real analysts, with AI used as a supportive tool for speed and clarity.",
        canonical: "/",
    },

    blocks: [
        // 1️⃣ HERO — людина на першому місці
        {
            type: "custom",
            component: "HeroSection",
            title: "Business plans",
            highlight: "built by professionals",
            description:
                "Your business plan is created by real experts. AI helps with structure and speed — but every important decision is made by a human.",
            primaryCta: { text: "Start with Expert Plan", link: "/profile" },
            secondaryCta: { text: "Draft with AI", link: "/profile" },
            image: "image1",
            align: "left",
        },

        // 2️⃣ VALUE GRID
        {
            type: "grid",
            columns: 3,
            gap: "1.5rem",
            cards: [
                {
                    image: "image2",
                    title: "Human-led business logic",
                    description:
                        "Every plan is structured and validated by professionals who understand real business decisions, not just templates.",
                },
                {
                    image: "image20",
                    title: "Financials you can defend",
                    description:
                        "Clear assumptions, realistic projections, and financial logic that investors, professors, and partners can follow.",
                },
                {
                    image: "image3",
                    title: "Professional document quality",
                    description:
                        "Well-designed, clean, and credible documents that are ready to present, submit, or print without extra work.",
                },
                {
                    image: "image4",
                    title: "Story investors understand",
                    description:
                        "Your plan explains not only what you do, but why it works, why now, and how it grows.",
                },
                {
                    image: "image5",
                    title: "Flexible and editable",
                    description:
                        "You can refine sections, adjust assumptions, and improve clarity at any stage of the process.",
                },
                {
                    image: "image6",
                    title: "Made for real scenarios",
                    description:
                        "Used for startups, education, grants, consulting, and fundraising — not generic exercises.",
                },
            ],
        },

        // 3️⃣ HUMAN → AI SUPPORT
        {
            type: "section",
            align: "start",
            left: {
                type: "custom",
                component: "InfoBlock",
                icon: "expert",
                title: "Expert-written first",
                description:
                    "Your plan is written and reviewed by real analysts who focus on accuracy, logic, and real-world credibility.",
                bullets: [
                    "Written by professionals",
                    "Business logic validation",
                    "Clear investor narrative",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                icon: "ai",
                title: "AI as a supporting tool",
                description:
                    "AI helps speed up drafts, structure ideas, and iterate faster — always under human control.",
                bullets: [
                    "Fast initial structuring",
                    "Easy iterations",
                    "Editable supporting drafts",
                ],
            },
        },

        // 4️⃣ PROCESS TIMELINE
        {
            type: "section",
            align: "center",
            gap: "1rem",
            left: {
                type: "custom",
                component: "Timeline",
                title: "How we build and evolve the platform",
                description:
                    `${COMPANY_NAME} was not created overnight. It’s the result of years of consulting experience, product development, and continuous collaboration between humans and AI.`,
                steps: [
                    {
                        title: "Your idea",
                        description:
                            "You provide the idea, goals, and context — even if it’s rough or unstructured.",
                    },
                    {
                        title: "Structured draft",
                        description:
                            "AI helps organize inputs into a clear draft that speeds up professional work.",
                    },
                    {
                        title: "Expert refinement",
                        description:
                            "A human expert reviews, rewrites, validates assumptions, and prepares the final version.",
                    },
                ],
            },
            right: {
                type: "slider",
                images: ["image7", "image8", "image9"],
            },
        },

        // 5️⃣ VIDEO
        {
            type: "custom",
            component: "VideoDemo",
            title: "From questions to a real business document",
            description:
                "See how expert guidance and structured inputs turn into a complete business plan.",
            video: "planDemo",
        },

        // 6️⃣ VALUES
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Why this approach works",
            description:
                "We combine human expertise with smart tools to deliver plans that make sense in the real world.",
            values: [
                {
                    title: "Human judgment",
                    description:
                        "Key decisions are made by professionals, not automated scripts.",
                },
                {
                    title: "Clear business structure",
                    description:
                        "Every plan follows proven logic that investors and institutions expect.",
                },
                {
                    title: "Understandable financials",
                    description:
                        "Numbers are explained clearly, not hidden behind formulas.",
                },
                {
                    title: "Controlled use of AI",
                    description:
                        "AI supports speed and clarity without replacing expertise.",
                },
                {
                    title: "Professional review",
                    description:
                        "Every important section is reviewed and improved by a human.",
                },
                {
                    title: "Real-world focus",
                    description:
                        "Built for actual decisions, not theoretical exercises.",
                },
            ],
        },

        // 7️⃣ TESTIMONIALS
        {
            type: "custom",
            component: "TestimonialsSlider",
            title: "What clients say",
            description:
                "Feedback from founders and professionals who worked directly with our experts.",
            testimonials: [
                {
                    name: "Daniel Wright",
                    role: "Founder, SaaS Startup",
                    image: "review5",
                    text: "This felt like working with a consultant, not a generator. The logic finally made sense to investors.",
                    rating: 5,
                },
                {
                    name: "Michael Andersen",
                    role: "CEO, Logistics Company",
                    image: "review8",
                    text: "They challenged our assumptions and improved the plan instead of just formatting it.",
                    rating: 5,
                },
                {
                    name: "Thomas Keller",
                    role: "Managing Director, Manufacturing",
                    image: "review4",
                    text: "Clear numbers, realistic thinking, and strong explanations. Definitely not AI fluff.",
                    rating: 5,
                },
                {
                    name: "Laura Mitchell",
                    role: "Marketing Lead, E-commerce Brand",
                    image: "review7",
                    text: "The expert explained everything clearly. I finally understood our margins and limits.",
                    rating: 5,
                },
            ],
        },

        // 8️⃣ PRICING
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
                    badgeTop: "Draft",
                    description:
                        "A fast, structured AI-generated draft to shape your idea and prepare it for expert refinement.",
                    features: [
                        "Structured AI draft",
                        "Editable content",
                        "Multiple languages",
                        "Unlimited revisions",
                    ],
                    buttonText: "Create Draft",
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
                        "A complete business plan written and reviewed by professionals, with AI used only as a supporting tool.",
                    features: [
                        "Expert-written business plan",
                        "Investor-ready structure",
                        "Clear financial logic",
                        "Professional formatting",
                        "Revisions included",
                    ],
                    buttonText: "Work with Expert",
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
                        "An advanced package for fundraising, grants, and negotiations — built with deep analysis and investor focus.",
                    features: [
                        "Advanced expert-written plan",
                        "Detailed financial modeling",
                        "Investor narrative & positioning",
                        "Pitch deck structure guidance",
                        "Priority expert review",
                    ],
                    buttonText: "Get Investor Pack",
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
                description: "Tailored scope based on your needs.",
                features: ["Flexible", "Tailored", "Professional"],
                buttonText: "Request Custom Plan",
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "Need a different solution?",
                description:
                    "If your project has unique requirements or a larger scope, we offer custom plans tailored to your needs. Contact us to discuss your specific situation and get a personalized quote.",

            }
        },

        // 9️⃣ FAQ (без 24 годин)
        {
            type: "faq",
            items: [
                {
                    question: "Is the business plan written by a real person?",
                    answer:
                        "Yes. All expert plans are written and reviewed by real business analysts.",
                },
                {
                    question: "What role does AI play?",
                    answer:
                        "AI helps structure drafts and speed up iterations, but final decisions are made by humans.",
                },
                {
                    question: "Can I start with an AI draft?",
                    answer:
                        "Yes. Many users start with a draft and later upgrade to a fully expert-written plan.",
                },
                {
                    question: "Are financial projections included?",
                    answer:
                        "Yes. All plans include structured financial projections with clear assumptions.",
                },
                {
                    question: "Can I edit my plan?",
                    answer:
                        "Absolutely. All content is editable and can be refined at any stage.",
                },
                {
                    question: "Is my idea confidential?",
                    answer:
                        "Yes. Confidentiality and data protection are a top priority.",
                },
            ],
        },

        // 10️⃣ CTA
        {
            type: "custom",
            component: "TextWithButton",
            title: "Have specific requirements?",
            description:
                "Talk to us and we’ll help you choose the right approach.",
            buttonText: "Contact Support",
            buttonLink: "/contact-us",
        },
    ],
};

export default schema;
