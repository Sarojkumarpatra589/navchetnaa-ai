import { FAQItem } from "@/types";

export const HOME_SERVICES = [
  {
    number: "01",
    title: "AI Development & Automation",
    slug: "ai-development-automation",
    summary:
      "Production-grade LLM pipelines, retrieval-augmented knowledge systems, and intelligent agents engineered around your proprietary business data.",
    deliverables: ["Custom AI Agents & RAG", "LLM Orchestration", "Automated Decision Pipelines"],
  },
  {
    number: "02",
    title: "Custom Software Development",
    slug: "custom-software-development",
    summary:
      "Tailored web platforms, internal operational portals, and high-throughput backend systems built from the ground up around your exact workflows.",
    deliverables: ["Full-Stack Web Applications", "Multi-Tenant SaaS Systems", "Legacy System Modernization"],
  },
  {
    number: "03",
    title: "Website Development",
    slug: "website-development",
    summary:
      "Fast, responsive, SEO-engineered corporate websites and conversion-focused digital platforms built with Next.js and clean semantic architecture.",
    deliverables: ["Next.js & React Platforms", "Technical SEO Architecture", "High-Speed Editorial Design"],
  },
  {
    number: "04",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    summary:
      "Cross-platform iOS and Android applications built with Flutter—delivering native responsiveness, offline resilience, and seamless API synchronization.",
    deliverables: ["Flutter iOS & Android Apps", "Field Operations & Staff Apps", "Push & Real-Time Sync"],
  },
  {
    number: "05",
    title: "CRM & ERP Development",
    slug: "crm-erp-development",
    summary:
      "Unified customer relationship and enterprise resource planning systems that replace fragmented spreadsheets with role-based operational clarity.",
    deliverables: ["Custom Lead & Sales Pipelines", "Inventory & Billing Modules", "Role-Based Governance"],
  },
  {
    number: "06",
    title: "AI Voice Receptionist",
    slug: "ai-voice-receptionist",
    summary:
      "Natural-sounding conversational voice receptionists that answer inbound calls 24/7, qualify inquiries, book appointments, and sync directly with your CRM.",
    deliverables: ["24/7 Inbound Call Handling", "Automated Appointment Booking", "Live Human Escalation"],
  },
  {
    number: "07",
    title: "API Integration & Cloud Engineering",
    slug: "api-integration-cloud-engineering",
    summary:
      "Secure REST/GraphQL API architectures, third-party payment and CRM integrations, Docker containerization, and resilient AWS cloud deployments.",
    deliverables: ["AWS & Docker Infrastructure", "Third-Party ERP/CRM Sync", "High-Availability APIs"],
  },
];

export const HOME_ECOSYSTEM = [
  {
    title: "AI Receptionist",
    slug: "ai-receptionist",
    code: "NODE // 01",
    description:
      "Answers every inbound phone call immediately, captures caller intent, schedules appointments, and routes urgent conversations to human staff.",
  },
  {
    title: "AI Sales Agents",
    slug: "ai-sales-agents",
    code: "NODE // 02",
    description:
      "Engages inbound leads within seconds, asks structured qualification questions, updates deal stages, and books qualified meetings on your calendar.",
  },
  {
    title: "Customer Support",
    slug: "ai-customer-support",
    code: "NODE // 03",
    description:
      "Resolves routine product, order, and policy questions accurately using verified company documentation with seamless escalation for complex tickets.",
  },
  {
    title: "Workflow Automation",
    slug: "workflow-automation",
    code: "NODE // 04",
    description:
      "Connects disconnected tools, automates document extraction, triggers approvals, and eliminates repetitive manual data entry across teams.",
  },
  {
    title: "AI Chatbots",
    slug: "ai-chatbots",
    code: "NODE // 05",
    description:
      "Context-aware conversational assistants deployed across your website and WhatsApp to guide visitors, capture leads, and answer queries 24/7.",
  },
  {
    title: "CRM Automation",
    slug: "crm-automation",
    code: "NODE // 06",
    description:
      "Automatically logs call summaries, enriches contact records, assigns follow-up tasks, and keeps pipeline data clean without manual admin effort.",
  },
];

export const HOME_PRODUCTS = [
  {
    name: "NAVCHETNAA AI Receptionist",
    slug: "navchetnaa-ai-receptionist",
    category: "AI Voice & Communication Platform",
    summary:
      "An intelligent inbound communication platform combining natural voice AI, structured call summaries, appointment workflows, CRM syncing, and seamless human call transfer.",
    highlights: [
      "24/7 AI Call Handling & Lead Capture",
      "Structured Call History & Summaries",
      "Configurable Agent Persona & Human Transfer",
    ],
  },
  {
    name: "CollegeOS",
    slug: "collegeos",
    category: "Institutional & Academic Management Platform",
    summary:
      "A configurable, role-based campus ERP supporting +2, +3, UG, PG, Diploma, ITI, B.Tech, M.Tech, and PhD institutions across 18 integrated academic and administrative modules.",
    highlights: [
      "Admissions, Attendance, Exams & Fee Modules",
      "IQAC & NAAC Documentation Support",
      "7 Granular Role Portals (Super Admin to Student)",
    ],
  },
  {
    name: "BizConnect",
    slug: "bizconnect",
    category: "B2B Networking & Digital Engagement Platform",
    summary:
      "A structured business networking and discovery ecosystem enabling verified company pages, industry directories, professional updates, and configurable engagement tools.",
    highlights: [
      "Verified Business Profiles & Company Pages",
      "Industry Directories & Partner Discovery",
      "Configurable Engagement & Subscription Tiers",
    ],
  },
];

export const HOME_INDUSTRIES = [
  { name: "Education", slug: "education", focus: "Campus ERP, admissions & academic automation" },
  { name: "Healthcare", slug: "healthcare", focus: "Patient call routing, scheduling & clinic workflows" },
  { name: "Real Estate", slug: "real-estate", focus: "24/7 buyer lead qualification & site-visit booking" },
  { name: "Manufacturing", slug: "manufacturing", focus: "Production tracking, inventory & vendor ERP" },
  { name: "E-commerce", slug: "e-commerce", focus: "Automated order support, WhatsApp AI & catalog sync" },
  { name: "Logistics", slug: "logistics", focus: "Fleet dispatch coordination, tracking & alerts" },
  { name: "Hospitality", slug: "hospitality", focus: "Automated booking inquiries & guest concierge AI" },
  { name: "Finance", slug: "finance", focus: "Document workflows, client onboarding & secure portals" },
  { name: "Retail", slug: "retail", focus: "Multi-store billing, stock visibility & customer loyalty" },
  { name: "Startups", slug: "startups", focus: "Rapid MVP engineering, scalable SaaS & AI integration" },
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Business-First Thinking",
    description:
      "We start with operational bottlenecks, unit economics, and user workflows—never forcing AI where simpler deterministic software delivers higher reliability.",
  },
  {
    number: "02",
    title: "AI-Driven Innovation",
    description:
      "We apply modern LLMs, voice intelligence, and retrieval pipelines practically to reduce response times, automate repetitive admin, and unlock insights.",
  },
  {
    number: "03",
    title: "Custom-Built Solutions",
    description:
      "Every organization operates differently. We architect software tailored to your exact processes rather than forcing your team into rigid templates.",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "Clean database schemas, modular APIs, containerized deployments, and strict TypeScript/Python engineering built to handle growth cleanly.",
  },
  {
    number: "05",
    title: "End-to-End Engineering",
    description:
      "From initial system architecture and UI/UX design to backend APIs, AI model integration, cloud deployment, and documentation under one roof.",
  },
  {
    number: "06",
    title: "Long-Term Technical Support",
    description:
      "Software is a living asset. We provide structured post-launch monitoring, iterative feature releases, security updates, and technical guidance.",
  },
];

export const METHODOLOGY_STAGES = [
  {
    step: "01",
    title: "Discover",
    description: "Audit current workflows, define operational goals, and identify high-impact automation opportunities.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Define system architecture, database models, integration milestones, and realistic delivery timelines.",
  },
  {
    step: "03",
    title: "Design",
    description: "Craft intuitive user interfaces, role-based user journeys, and clean interactive prototypes.",
  },
  {
    step: "04",
    title: "Develop",
    description: "Engineer modular frontend, backend, mobile, and AI layers with strict code quality standards.",
  },
  {
    step: "05",
    title: "Test",
    description: "Validate edge cases, security boundaries, API performance, and cross-device responsiveness.",
  },
  {
    step: "06",
    title: "Launch",
    description: "Deploy smoothly to production cloud infrastructure with zero-downtime cutover and team onboarding.",
  },
  {
    step: "07",
    title: "Support",
    description: "Monitor system reliability, refine AI accuracy, and evolve capabilities as your business scales.",
  },
];

export const HOME_PORTFOLIO_PREVIEW = [
  {
    slug: "ai-receptionist-crm",
    title: "AI Receptionist & CRM Synchronization",
    classification: "Demonstration System",
    summary:
      "End-to-end voice AI architecture that answers inbound business calls, extracts structured caller intent, books appointments, and creates CRM deal records automatically.",
    stack: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
  },
  {
    slug: "collegeos-institutional-management",
    title: "CollegeOS Institutional Management",
    classification: "Platform Blueprint",
    summary:
      "Multi-role academic and administrative ERP engineered for colleges and technical institutes to unify admissions, attendance, examinations, fees, and NAAC reporting.",
    stack: ["Next.js", "Django", "PostgreSQL", "Docker"],
  },
  {
    slug: "fleet-transport-management",
    title: "Fleet & Transport Operations Platform",
    classification: "Concept Architecture",
    summary:
      "Centralized logistics dispatch system tracking vehicle assignments, route schedules, fuel logs, maintenance alerts, and automated customer delivery notifications.",
    stack: ["React", "FastAPI", "MongoDB", "AWS"],
  },
];

export const TECH_STACK_ITEMS = [
  { name: "Python", category: "Backend & AI Core" },
  { name: "Django", category: "Enterprise Web Framework" },
  { name: "FastAPI", category: "High-Speed Async APIs" },
  { name: "React", category: "Interactive UI Engineering" },
  { name: "Next.js", category: "Full-Stack Web Platform" },
  { name: "Flutter", category: "Cross-Platform Mobile" },
  { name: "OpenAI", category: "LLM & Voice Intelligence" },
  { name: "AWS", category: "Cloud & Infrastructure" },
  { name: "PostgreSQL", category: "Relational & Vector Data" },
  { name: "MySQL", category: "Transactional Databases" },
  { name: "MongoDB", category: "Document Data Stores" },
  { name: "Docker", category: "Containerized Deployment" },
];

export const HOME_FAQS: FAQItem[] = [
  {
    question: "What types of businesses does NAVCHETNAA AI work with?",
    answer:
      "We partner with growth-stage startups, SMEs, educational institutions, healthcare clinics, real estate agencies, logistics operators, and established enterprises looking to modernize operations with custom software and practical AI automation.",
  },
  {
    question: "How do you decide whether a project needs AI or standard custom software?",
    answer:
      "We follow a business-first engineering philosophy. If a problem involves unstructured language, voice calls, document comprehension, or intelligent routing, applied AI is the right tool. If a workflow requires deterministic rules, financial accuracy, or structured data management, we build clean traditional software—and combine both where it creates real operational leverage.",
  },
  {
    question: "Can you integrate AI agents and automation into our existing CRM or ERP?",
    answer:
      "Yes. We build secure API bridges and webhook pipelines that connect AI receptionists, chatbots, and workflow automations directly with your existing CRM, ERP, calendar, WhatsApp Business API, or internal databases without forcing you to replace working tools.",
  },
  {
    question: "What is your typical development process and timeline?",
    answer:
      "Every engagement follows our seven-stage lifecycle: Discover, Plan, Design, Develop, Test, Launch, and Support. Focused automation workflows or MVP web applications typically take 2 to 6 weeks, while comprehensive custom ERP/CRM platforms span 8 to 16+ weeks depending on module complexity.",
  },
  {
    question: "Do we own the source code and intellectual property of custom software?",
    answer:
      "Yes. For all custom software, web applications, mobile apps, and bespoke AI workflows engineered specifically for your organization, full ownership of the custom codebase, database schemas, and documentation transfers to you upon project completion.",
  },
  {
    question: "How does the NAVCHETNAA AI Receptionist handle complex calls it cannot answer?",
    answer:
      "Our AI Voice Receptionist is configured with clear escalation rules. When a caller requests specialized human assistance, expresses urgency, or falls outside configured guidelines, the system smoothly transfers the live call to your designated staff member along with a structured summary of the conversation.",
  },
  {
    question: "Is CollegeOS customizable for different academic structures?",
    answer:
      "Yes. CollegeOS is architected to support +2, +3, Undergraduate, Postgraduate, Diploma, ITI, B.Tech, M.Tech, and PhD programs. Institutions can enable specific modules—such as admissions, attendance, examinations, fees, hostel, library, and IQAC/NAAC support—and configure role permissions for leadership, faculty, and students.",
  },
  {
    question: "Do you provide ongoing maintenance and technical support after launch?",
    answer:
      "Yes. We offer structured post-launch support plans covering cloud infrastructure monitoring, bug resolution, security updates, AI prompt and knowledge-base tuning, and iterative feature enhancements.",
  },
];