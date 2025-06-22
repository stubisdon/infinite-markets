const marketCards = [
    {
        "Market": "Longevity & Preventive Health",
        "Why Infinite?": "Aging is universal; people will always pay to live longer and better.",
        "Examples": "Personalized supplements, epigenetic diagnostics, anti-aging clinics",
        "Notables": "Altos Labs, Levels Health, Elysium"
    },
    {
        "Market": "AI Copilots & Productivity Assistants",
        "Why Infinite?": "Every knowledge worker wants more productivity; AI scales this.",
        "Examples": "AI code copilots, research assistants, creative tools",
        "Notables": "OpenAI, Anthropic, Rewind AI"
    },
    {
        "Market": "Human Relationships & Companionship",
        "Why Infinite?": "Deep emotional connection is a permanent human need.",
        "Examples": "AI romantic partners, social avatars, therapy bots",
        "Notables": "Replika, Pi (Inflection), Character.AI"
    },
    {
        "Market": "Alternative & Decentralized Living",
        "Why Infinite?": "People are seeking better, cheaper, more meaningful living environments.",
        "Examples": "Co-living, digital nomad hubs, off-grid housing",
        "Notables": "Boxabl, Cabin, Outsite"
    },
    {
        "Market": "Interactive Entertainment & Digital Identity",
        "Why Infinite?": "People crave play, expression, and digital status.",
        "Examples": "Creator platforms, avatar marketplaces, UGC games",
        "Notables": "Roblox, Epic Games, Ready Player Me"
    },
    {
        "Market": "Low-Code / No-Code Tooling",
        "Why Infinite?": "Everyone wants to build and automate without coding skills.",
        "Examples": "Business automation, website builders, app creators",
        "Notables": "Zapier, Notion, Softr"
    },
    {
        "Market": "Climate Tech & Sustainability",
        "Why Infinite?": "Existential demand and regulatory push for green tech.",
        "Examples": "Direct air capture, EV infrastructure, plant-based meat",
        "Notables": "Climeworks, Twelve, Form Energy"
    },
    {
        "Market": "Financial Enablement & Economic Sovereignty",
        "Why Infinite?": "Everyone wants more control and access to money.",
        "Examples": "Micro-investing, AI wealth advisors, alt-credit scoring",
        "Notables": "Stripe, Chime, Monarch"
    },
    {
        "Market": "Learning & Reskilling for the AI Age",
        "Why Infinite?": "Rapidly changing work demands constant learning.",
        "Examples": "AI-first learning, cohort-based courses, micro-degrees",
        "Notables": "Maven, BloomTech, Replit Learn"
    },
    {
        "Market": "Biotech Platformization",
        "Why Infinite?": "Biology is programmable; endless drugs, diagnostics, materials.",
        "Examples": "mRNA platforms, CRISPR, AI-driven drug design",
        "Notables": "Moderna, Ginkgo Bioworks, Recursion"
    },
    {
        "Market": "Mental Health & Emotional Regulation",
        "Why Infinite?": "Stress and meaning-making are eternal struggles.",
        "Examples": "AI-powered CBT, digital therapy, psychedelics",
        "Notables": "Headspace, BetterHelp, Mindbloom"
    },
    {
        "Market": "Personal Energy & Cognitive Performance",
        "Why Infinite?": "Everyone wants more clarity, stamina, and peak flow.",
        "Examples": "Nootropics, sleep tech, wearable neurotech",
        "Notables": "Apollo Neuro, Eight Sleep, Thesis"
    },
    {
        "Market": "Hyper-Personalized Commerce",
        "Why Infinite?": "People want products shaped exactly for them.",
        "Examples": "AI-curated shopping, custom skincare, 3D-printed clothes",
        "Notables": "Stitch Fix, Curology, True Fit"
    },
    {
        "Market": "Everything-as-a-Service (XaaS)",
        "Why Infinite?": "Renting > owning; subscriptions everywhere.",
        "Examples": "Hardware-as-a-service, legal-as-a-service",
        "Notables": "Canoo, Deel, OpenAI APIs"
    },
    {
        "Market": "Global Connectivity & Infrastructure Access",
        "Why Infinite?": "Billions lack stable internet, power, or banking.",
        "Examples": "Satellite internet, solar microgrids, mesh networks",
        "Notables": "Starlink, Helium, Bboxx"
    },
    {
        "Market": "Solo Creator / Indie Entrepreneur Economy",
        "Why Infinite?": "People want sovereignty and expression, not jobs.",
        "Examples": "Monetized newsletters, niche agencies, one-person SaaS",
        "Notables": "Gumroad, Ghost, Beehiiv"
    },
    {
        "Market": "At-Home Healthcare & Medical Autonomy",
        "Why Infinite?": "Aging populations demand self-service health.",
        "Examples": "Diagnostic kits, remote care, AI triage",
        "Notables": "Everlywell, Hims & Hers, Forward"
    },
    {
        "Market": "Digital Sovereignty & Privacy Infrastructure",
        "Why Infinite?": "Growing desire for control over data and identity.",
        "Examples": "Decentralized identity, encrypted comms, zero-knowledge proofs",
        "Notables": "Proton, Signal, Brave"
    },
    {
        "Market": "B2B Automation & Vertical SaaS",
        "Why Infinite?": "Every industry wants to digitize and automate.",
        "Examples": "Legal tech, dental CRM, trucking dispatch",
        "Notables": "Vanta, Ramp, Flexport"
    },
    {
        "Market": "Space Economy",
        "Why Infinite?": "Long-term moonshots backed by private capital.",
        "Examples": "Satellite deployment, asteroid mining, Earth observation",
        "Notables": "SpaceX, Rocket Lab, Planet"
    },
    {
        "Market": "Trust, Reputation & Digital Proof",
        "Why Infinite?": "AI and remote work increase need for verifiable credentials.",
        "Examples": "Proof-of-work history, deepfake detection, trust scores",
        "Notables": "Worldcoin, Proof of Humanity, LinkedIn"
    },
    {
        "Market": "Game Mechanics Applied to Real Life",
        "Why Infinite?": "People want motivation and structure from gamification.",
        "Examples": "Habit-tracking RPGs, gamified fitness, social challenges",
        "Notables": "Duolingo, Levels, Epic Win"
    },
    {
        "Market": "Government Tech (GovTech)",
        "Why Infinite?": "Governments run on legacy software; modernization is needed.",
        "Examples": "Permitting, payments, compliance, benefits distribution",
        "Notables": "OpenGov, ClearGov, Estonia e-Gov"
    },
    {
        "Market": "Robotics-as-a-Service & Human Augmentation",
        "Why Infinite?": "Labor shortages fuel demand for physical automation.",
        "Examples": "Delivery bots, eldercare robots, warehouse automation",
        "Notables": "Figure, Agility Robotics, Zipline"
    },
    {
        "Market": "Regenerative Agriculture & Food Security",
        "Why Infinite?": "Food chains are fragile; climate risk rises.",
        "Examples": "Vertical farms, lab-grown meat, precision farming",
        "Notables": "Plenty, Upside Foods, Indigo Ag"
    },
    {
        "Market": "Second Brains & Personal Knowledge Management",
        "Why Infinite?": "Managing information is a superpower.",
        "Examples": "AI-powered note-taking, memory recall agents",
        "Notables": "Notion, Obsidian, Mem"
    },
    {
        "Market": "Remote & Geo-Arbitraged Lifestyles",
        "Why Infinite?": "People seek freedom, flexibility, tax benefits.",
        "Examples": "Nomad visas, mobile citizenship, libertarian enclaves",
        "Notables": "Nomad List, SafetyWing, Zuzalu"
    },
    {
        "Market": "Digital Safety for Kids & Families",
        "Why Infinite?": "Parents want to protect children in risky digital world.",
        "Examples": "AI content filters, screen time controls, parental dashboards",
        "Notables": "Bark, Canopy, Qustodio"
    },
    {
        "Market": "DeathTech & Legacy Management",
        "Why Infinite?": "Mortality is universal; tech barely addresses it.",
        "Examples": "Will automation, AI memorials, grief tools",
        "Notables": "Lantern, Everplans, Cake"
    },
    {
        "Market": "Neurodivergence & Cognitive Design",
        "Why Infinite?": "Systems are poorly designed for neurodivergent people.",
        "Examples": "ADHD productivity tools, autism-friendly UIs",
        "Notables": "Elevate, MindMate, Cognoa"
    },
    {
        "Market": "Self-Expression & Identity Design",
        "Why Infinite?": "People continuously shape and perform identity.",
        "Examples": "Avatar fashion, AI-assisted branding, voice skins",
        "Notables": "Zepeto, Genies, Facemoji"
    },
    {
        "Market": "Mass Migration & Mobility Infrastructure",
        "Why Infinite?": "Climate and conflict accelerate global shifts.",
        "Examples": "Migration logistics, mobile legal identity, diaspora networks",
        "Notables": "Welcome.US, Refugee platforms"
    },
    {
        "Market": "Real-World Agentic Systems",
        "Why Infinite?": "Replacing human effort with autonomous agents creates leverage.",
        "Examples": "AI agents for logistics, sales, recruiting",
        "Notables": "AutoGPT, AgentOps startups"
    },
    {
        "Market": "Cultural Preservation & Translation as a Service",
        "Why Infinite?": "Thousands of languages and cultures are inaccessible.",
        "Examples": "AI dubbing, gesture translation, oral tradition digitization",
        "Notables": "HeyGen, Deepdub, Archive.org"
    },
    {
        "Market": "Micro-Communities & Curated Social Spaces",
        "Why Infinite?": "Belonging requires intimacy, which large social networks lack.",
        "Examples": "Invite-only forums, AI-moderated groups",
        "Notables": "Geneva, Circle, Discord"
    },
    {
        "Market": "On-Demand Local Micro-Manufacturing",
        "Why Infinite?": "People want things made quickly, locally, and customized.",
        "Examples": "3D printed furniture, pop-up factories",
        "Notables": "Glowforge, Formlabs"
    },
    {
        "Market": "AI-Native Companies & No-Employee Businesses",
        "Why Infinite?": "Company structure is reinvented with AI replacing orgs.",
        "Examples": "1-person AI-run startups, autonomous LLCs",
        "Notables": "Devin AI, AI agency collectives"
    },
    {
        "Market": "Crisis Readiness & Resilience",
        "Why Infinite?": "People want to prepare for pandemics, blackouts, cyberattacks.",
        "Examples": "Smart go-bags, resiliency maps",
        "Notables": "Judy, Citizen"
    },
    {
        "Market": "Time Optimization & Scheduling Intelligence",
        "Why Infinite?": "Everyone wants more control over their time.",
        "Examples": "AI timeboxing, smart calendar agents",
        "Notables": "Reclaim.ai, Clockwise"
    },
    {
        "Market": "Life Infrastructure-as-a-Service",
        "Why Infinite?": "Busy people outsource admin and life management.",
        "Examples": "AI life managers, decision offloading",
        "Notables": "Double, Magic, Butler.ai"
    }
];
