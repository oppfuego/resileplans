import {PageSchema} from "@/components/constructor/page-render/types";
import {COMPANY_NAME} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `About ${COMPANY_NAME} — Building Smarter Business Planning`,
        description:
            `${COMPANY_NAME} combines AI automation with real human expertise to help founders, students, and teams create business plans faster and with confidence.`,
        canonical: "/about-us",
    },

    blocks: [
        // 1️⃣ HERO — коротше, сильніше
        {
            type: "custom",
            component: "HeroSection",
            title: "We build tools",
            highlight: "people actually trust",
            description:
                `${COMPANY_NAME} exists to make business planning clearer, faster, and more accessible — without sacrificing quality or human judgment.`,
            image: "hero2",
            align: "left"
        },

        // 2️⃣ WHO USES US — рух одразу
        {
            type: "custom",
            component: "Marquee",
            items: [
                {text: "Startup founders"},
                {text: "MBA & university students"},
                {text: "Consultants & advisors"},
                {text: "Accelerators & incubators"},
                {text: "Early-stage teams"},
            ],
        },

        // 3️⃣ STORY — не текстом, а таймлайном
        {
            type: "custom",
            component: "Timeline",
            title: "How we build and evolve the platform",
            description:
                `${COMPANY_NAME} was not created overnight. It’s the result of years of consulting experience, product development, and continuous collaboration between humans and AI.`,
            steps: [
                {
                    title: "Consulting background",
                    description:
                        "Before building the platform, our team worked directly with startups, students, and small businesses — writing, reviewing, and validating hundreds of real business plans.",
                },
                {
                    title: "Identifying the bottleneck",
                    description:
                        "We saw that most time was wasted on structure, formatting, and repetitive analysis — not on strategic thinking or decision-making.",
                },
                {
                    title: "Designing a hybrid approach",
                    description:
                        "Instead of replacing experts, we built AI tools that assist them — automating routine work while keeping human judgment in control.",
                },
                {
                    title: "Building the first product",
                    description:
                        "Engineers, analysts, and designers collaborated to create a system that produces clear, structured, and editable business plans.",
                },
                {
                    title: "Validation with real users",
                    description:
                        "The platform was tested with founders, universities, and consultants to ensure plans meet real-world expectations.",
                },
                {
                    title: "Continuous improvement",
                    description:
                        "Today, we continuously improve the platform using feedback, market data, and expert reviews to keep quality high and results practical.",
                },
            ],
        },


        // 4️⃣ HUMAN ↔ AI (side by side)
        {
            type: "section",
            align: "start",
            gap: "4rem",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Human expertise",
                description:
                    "Real analysts define frameworks, validate assumptions, and ensure plans make sense in the real world.",
                bullets: [
                    "Strategy & finance professionals",
                    "Cross-industry experience",
                    "Investor-oriented thinking",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "AI automation",
                description:
                    "AI handles structure, formatting, projections, and speed — reducing manual work by up to 90%.",
                bullets: [
                    "Instant generation",
                    "Dynamic financial models",
                    "Multilingual output",
                ],
            },
        },

        // 5️⃣ HOW WE WORK — grid, не секція
        {
            type: "grid",
            columns: 3,
            gap: "1.5rem",
            cards: [
                {
                    image: "image10",
                    title: "Structured thinking",
                    description:
                        "Every plan follows proven business logic, not random text blocks.",
                },
                {
                    image: "image11",
                    title: "Expert validation",
                    description:
                        "AI outputs are reviewed against real-world business cases.",
                },
                {
                    image: "image12",
                    title: "Fast iteration",
                    description:
                        "Users can regenerate, refine, and adapt plans in minutes.",
                },
            ],
        },

        // 6️⃣ VALUES — як факти
        {
            type: "custom",
            component: "ValuesIcons",
            title: "What defines our work",
            description:
                "These are not slogans — they shape how the platform is built.",
            values: [
                {
                    title: "Clarity over complexity",
                    description:
                        "Business planning should help decisions, not confuse them.",
                },
                {
                    title: "Human control",
                    description:
                        "AI supports thinking — it never replaces judgment.",
                },
                {
                    title: "Speed with responsibility",
                    description:
                        "Fast results, but never at the cost of logic or accuracy.",
                },
                {
                    title: "Accessibility",
                    description:
                        "Professional planning should be available to everyone.",
                },
                {
                    title: "Real-world focus",
                    description:
                        "Built for actual use — investors, studies, grants, execution.",
                },
                {
                    title: "Continuous improvement",
                    description:
                        "Feedback from users and experts constantly shapes the product.",
                },
            ],
        },

        // 7️⃣ SOCIAL PROOF INSIDE ABOUT (важливо)
        {
            type: "custom",
            component: "TestimonialsSlider",
            title: "What clients say",
            description:
                "Feedback from founders and professionals who worked directly with our experts.",
            testimonials: [
                {
                    name: "@dan.builds",
                    role: "Founder, SaaS Startup",
                    image: "review5",
                    text: "This felt like working with a consultant, not a generator. The logic finally made sense to investors.",
                    rating: 5,
                },
                {
                    name: "@mike.ops",
                    role: "CEO, Logistics Company",
                    image: "review8",
                    text: "They challenged our assumptions and improved the plan instead of just formatting it.",
                    rating: 5,
                },
                {
                    name: "@tk_manufacture",
                    role: "Managing Director, Manufacturing",
                    image: "review4",
                    text: "Clear numbers, realistic thinking, and strong explanations. Definitely not AI fluff.",
                    rating: 5,
                },
                {
                    name: "@laura.growth",
                    role: "Marketing Lead, E-commerce Brand",
                    image: "review7",
                    text: "The expert explained everything clearly. I finally understood our margins and limits.",
                    rating: 5,
                },
            ],
        },

        // 8️⃣ TEAM — не в кінці
        {
            type: "custom",
            component: "TeamGrid",
            title: "The people behind the platform",
            description:
                "A team of analysts, engineers, and designers working toward one shared goal.",
            members: [
                {
                    name: "@mark.strategy",
                    role: "Strategy Lead",
                    bio:
                        "Former startup consultant with over 200 business plans delivered across multiple industries.",
                    image: "team4",
                },
                {
                    name: "@daniel.ai",
                    role: "AI Engineering Lead",
                    bio:
                        "Builds structured generation systems and financial modeling logic for complex business cases.",
                    image: "team5",
                },
                {
                    name: "@elena.ux",
                    role: "Product & UX Lead",
                    bio:
                        "Designs clarity-first interfaces that make complex business planning easy to understand.",
                    image: "team6",
                },
            ],
        },

        // 9️⃣ IMPACT
        {
            type: "section",
            title: "Impact & community",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Used worldwide",
                description:
                    `${COMPANY_NAME} supports founders and students in over 40 countries.`,
                bullets: [
                    "Universities & accelerators",
                    "Startup ecosystems",
                    "Independent founders",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image13",
            },
        },

        // 🔟 FUTURE — коротко
        {
            type: "section",
            title: "What’s next",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Product roadmap",
                description:
                    "We’re building tools that turn plans into living business systems.",
                bullets: [
                    "Deeper financial analytics",
                    "Team collaboration",
                    "Real-time AI advisors",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image14",
            },
        },

        // 1️⃣1️⃣ FINAL CTA
        {
            type: "custom",
            component: "MissionBanner",
            title: "Join the future of business planning",
            description:
                "Whether you’re building, learning, or advising — we’re here to help.",
            image: "image17",
        },

        // 1️⃣2️⃣ FAQ
        {
            type: "faq",
            items: [
                {
                    question: "Is this platform suitable for beginners?",
                    answer:
                        "Yes. The system guides users step by step, even without prior business experience.",
                },
                {
                    question: "Do experts really review the frameworks?",
                    answer:
                        "Yes. All structures and logic are validated by real professionals.",
                },
                {
                    question: "Can this be used in education?",
                    answer:
                        "Absolutely. Many universities use the platform in entrepreneurship courses.",
                },
            ],
        },
    ],
};

export default schema;
