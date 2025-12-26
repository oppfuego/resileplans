import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — From Idea to Investor-Ready Plan`,
        description:
            "Generate a business plan instantly with AI or upgrade to a professional expert-written version in 24 hours.",
        canonical: "/",
    },

    blocks: [
        // 1️⃣ HERO — компактний, сильний
        {
            type: "custom",
            component: "HeroSection",
            title: "Business plans",
            highlight: "without the headache",
            description:
                "Start with AI in minutes. Upgrade to a professional plan in 24 hours. One platform — two speeds.",
            primaryCta: { text: "Generate with AI", link: "/profile" },
            secondaryCta: { text: "Expert in 24h", link: "/profile" },
            image: "image1",
            align: "left",
        },

        {
            type: "grid",
            columns: 3,
            gap: "1.5rem",
            cards: [
                {
                    image: "image2",
                    title: "Clear business structure",
                    description:
                        "A logically built business plan with executive summary, market overview, strategy, operations, and financials — all in the right order, without confusion.",
                },
                {
                    image: "image20",
                    title: "Financials that tell a story",
                    description:
                        "3-year financial forecasts with clear assumptions, revenue logic, and cost structure — easy to explain to investors or professors.",
                },
                {
                    image: "image3",
                    title: "Professional document design",
                    description:
                        "Clean, minimal layouts that look credible and serious — ready to send, print, or present without extra formatting.",
                },
                {
                    image: "image4",
                    title: "Investor-focused narrative",
                    description:
                        "Not just information, but a clear story: what problem you solve, why now, how you win, and how the business scales.",
                },
                {
                    image: "image5",
                    title: "Editable & flexible content",
                    description:
                        "Every section can be edited, regenerated, or refined — perfect for iterations, feedback, and changing assumptions.",
                },
                {
                    image: "image6",
                    title: "Built for real use cases",
                    description:
                        "Suitable for startups, students, accelerators, consultants, and grant applications — not a generic template.",
                },
            ],
        },


        // 4️⃣ SECTION — AI → Expert (асиметрія)
        {
            type: "section",
            align: "start",
            left: {
                type: "custom",
                component: "InfoBlock",
                icon: "ai",
                title: "Start with AI",
                description:
                    "Perfect for exploring ideas, learning, and creating a solid first draft in minutes.",
                bullets: [
                    "Instant structured draft",
                    "Unlimited regenerations",
                    "Fully editable sections",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                icon: "expert",
                title: "Upgrade to Expert",
                description:
                    "When accuracy and credibility matter, professionals refine and validate every detail.",
                bullets: [
                    "Written by real analysts",
                    "Delivered within 24 hours",
                    "Investor-focused logic",
                ],
            },
        },


        {
            type: "section",
            align: "center",
            gap: "1rem",
            left: {
                type: "custom",
                component: "StoryTimeline",
                steps: [
                    {
                        year: "Day 1",
                        title: "Idea in your head",
                        description:
                            "You have a concept, but it’s messy — notes, thoughts, and assumptions without structure.",
                    },
                    {
                        year: "Day 1",
                        title: "AI-generated draft",
                        description:
                            "The idea turns into a clear business plan draft with logic, sections, and direction.",
                    },
                    {
                        year: "Day 2",
                        title: "Expert-ready version",
                        description:
                            "A professional refines the plan, validates assumptions, and prepares it for investors.",
                    },
                ],
            },
            right: {
                type: "slider",
                images: ["image7", "image8", "image9"],
            },
        },


        // 7️⃣ VIDEO DEMO — всередині сторінки
        {
            type: "custom",
            component: "VideoDemo",
            title: "From answers to a real document",
            description:
                "See how a simple form becomes a complete business plan.",
            video: "planDemo",
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Why this actually works",
            description:
                "We focus on real outcomes and clear logic — not buzzwords or generic templates.",
            values: [
                {
                    title: "Guided thinking",
                    description:
                        "Step-by-step questions help you explain your idea clearly, even if you’re not a business expert.",
                },
                {
                    title: "Real business structure",
                    description:
                        "Every plan follows proven logic: problem, solution, market, strategy, and finances.",
                },
                {
                    title: "Actionable financials",
                    description:
                        "Revenue, costs, and growth assumptions are built to be understandable and defensible.",
                },
                {
                    title: "Flexible depth",
                    description:
                        "Use a quick draft for validation or upgrade to a fully detailed, investor-ready version.",
                },
                {
                    title: "Human expertise on demand",
                    description:
                        "When precision matters, professionals review, rewrite, and improve your plan.",
                },
                {
                    title: "Built for real scenarios",
                    description:
                        "Works for startups, education, grants, consulting, and fundraising — not just theory.",
                },
            ],
        },


        // 9️⃣ TESTIMONIALS — оновлені зарубіжні імена
        {
            type: "custom",
            component: "TestimonialsSlider",
            title: "What Our Clients Say",
            description: "Feedback from businesses that worked with our team and saw measurable results.",
            testimonials: [
                {
                    name: "Daniel Wright",
                    role: "Founder, SaaS Startup",
                    image: "review5",
                    text: "The planning process was structured and transparent. We finally had numbers and logic investors could actually understand.",
                    rating: 5,
                },
                {
                    name: "Michael Andersen",
                    role: "CEO, Logistics Company",
                    image: "review8",
                    text: "They approached our case like partners, not vendors. The business plan helped us restructure operations and prepare for negotiations.",
                    rating: 5,
                },
                {
                    name: "Thomas Keller",
                    role: "Managing Director, Manufacturing",
                    image: "review4",
                    text: "Clear communication, strong financial logic, and realistic assumptions. This was not a template — it was tailored to our business.",
                    rating: 5,
                },
                {
                    name: "Laura Mitchell",
                    role: "Marketing Lead, E-commerce Brand",
                    image: "review7",
                    text: "The expert explained everything in plain language. I finally understood our margins and growth limits.",
                    rating: 5,
                },
                {
                    name: "Sophie Laurent",
                    role: "Co-founder, EdTech Project",
                    image: "review6",
                    text: "We used the plan for a grant application. The structure and clarity made a huge difference for reviewers.",
                    rating: 5,
                },
                {
                    name: "Emily Carter",
                    role: "Business Consultant",
                    image: "review9",
                    text: "I now use their process as a base for my own clients. It saves weeks of work and delivers consistent quality.",
                    rating: 5,
                },
            ],
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

        {
            type: "faq",
            items: [
                {
                    question: "Can I start with AI and upgrade to an expert plan later?",
                    answer:
                        "Yes. Most users begin with an AI-generated draft and then upgrade to an expert-written version when they need higher accuracy or investor-ready quality.",
                },
                {
                    question: "Is the expert-written plan created by a real person?",
                    answer:
                        "Absolutely. Expert plans are written and reviewed by real business analysts, not AI-edited content.",
                },
                {
                    question: "How long does the expert plan take?",
                    answer:
                        "Expert-written plans are delivered within 24 hours after you submit your details.",
                },
                {
                    question: "What do I get with the AI-generated plan?",
                    answer:
                        "You receive a complete draft including executive summary, market analysis, strategy, and financial projections — generated instantly.",
                },
                {
                    question: "Can I edit the business plan after generation?",
                    answer:
                        "Yes. All plans are fully editable. You can revise sections, regenerate content, and export updated versions at any time.",
                },
                {
                    question: "Are financial projections included?",
                    answer:
                        "Yes. Both AI and expert plans include 3-year financial projections with clear assumptions and structure.",
                },
                {
                    question: "Is my business idea confidential?",
                    answer:
                        "Yes. Your data is securely stored and never shared with third parties. Confidentiality is a top priority.",
                },
                {
                    question: "Who is this platform best for?",
                    answer:
                        "It’s designed for startups, students, entrepreneurs, consultants, and anyone who needs a clear business plan quickly.",
                },
                {
                    question: "Can I use the plan for investors or banks?",
                    answer:
                        "Yes. Expert plans are specifically structured to meet investor and financial institution expectations.",
                },
                {
                    question: "What formats can I export my plan in?",
                    answer:
                        "You can export your business plan in editable formats such as PDF and DOCX.",
                },
                {
                    question: "Do you offer refunds?",
                    answer:
                        "If you experience any issues, our support team will review your case and help resolve it quickly.",
                },
                {
                    question: "Do I need business experience to use this platform?",
                    answer:
                        "No. The platform guides you step by step, making it accessible even for first-time founders.",
                },
            ],
        },


        // 13️⃣ SOFT CTA
        {
            type: "custom",
            component: "TextWithButton",
            title: "Still have questions?",
            description:
                "Contact us",
            buttonText: "Contact Support",
            buttonLink: "/contact-us",
        },
    ],
};

export default schema;

