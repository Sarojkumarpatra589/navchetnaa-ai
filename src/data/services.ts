import { ServiceItem } from "@/types";
import { SITE_ASSETS } from "./assets";

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "ai-development-automation",
    title: "AI Development & Automation",
    shortTitle: "AI Development",
    tagline: "Production-Ready Applied AI Agents, RAG Pipelines & Intelligent Automation",
    summary:
      "We design and deploy custom LLM workflows, knowledge-grounded retrieval systems, and autonomous operational agents engineered around your business data and rules.",
    heroImage: SITE_ASSETS.services["ai-development-automation"].src,
    heroAlt: SITE_ASSETS.services["ai-development-automation"].alt,
    iconName: "Cpu",
    overview:
      "Generic AI chat wrappers rarely solve real operational problems. NAVCHETNAA AI engineers tailored artificial intelligence systems integrated directly with your databases, documents, APIs, and internal workflows—combining Large Language Models with deterministic validation and human-in-the-loop controls.",
    challenges: [
      "Employees spending hours manually summarizing documents, classifying emails, and copying data between tools.",
      "Off-the-shelf AI tools lacking context about your internal policies, catalogs, and proprietary records.",
      "Uncontrolled generative AI responses creating accuracy or compliance risks in customer-facing workflows.",
      "Disconnected AI experiments that never integrate into existing CRM, ERP, or support platforms.",
    ],
    solution:
      "We architect retrieval-augmented generation (RAG) pipelines using vector databases like pgvector, structured function-calling agents, and event-driven automation workflows. Every AI system operates within explicit guardrails, cites internal sources, and triggers real actions across your software stack.",
    capabilities: [
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Index PDFs, SOPs, product catalogs, and databases into semantic vector stores so AI answers strictly from verified company knowledge.",
      },
      {
        title: "Autonomous Task & Tool-Calling Agents",
        description:
          "Multi-step AI agents capable of querying APIs, updating CRM records, scheduling appointments, and drafting structured reports.",
      },
      {
        title: "Intelligent Document & Data Extraction",
        description:
          "Automated parsing of invoices, forms, applications, and unstructured emails into clean relational database records.",
      },
      {
        title: "AI Evaluation & Guardrail Engineering",
        description:
          "Structured output schemas, confidence thresholds, and seamless escalation rules that keep production AI reliable and auditable.",
      },
    ],
    useCases: [
      {
        title: "Automated Lead Qualification & Routing",
        description:
          "Analyze inbound web, email, and WhatsApp inquiries automatically, score intent, and assign enriched records to the right sales representative.",
      },
      {
        title: "Internal Knowledge & Policy Assistant",
        description:
          "Give operations, HR, and support teams instant, citation-backed answers drawn from internal manuals and technical documentation.",
      },
      {
        title: "Back-Office Document Processing",
        description:
          "Extract line items from vendor bills, purchase orders, and onboarding documents directly into ERP databases without manual typing.",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "pgvector", "Redis", "Docker"],
    process: [
      {
        stepNumber: "01",
        title: "Use-Case & Data Audit",
        description: "Identify high-leverage repetitive workflows and evaluate available knowledge bases and APIs.",
      },
      {
        stepNumber: "02",
        title: "Pipeline & Guardrail Architecture",
        description: "Design retrieval indexing, prompt orchestration, structured output validation, and fallback triggers.",
      },
      {
        stepNumber: "03",
        title: "Integration & Edge-Case Testing",
        description: "Connect to your CRM/ERP endpoints and stress-test against ambiguous inputs and real operational queries.",
      },
      {
        stepNumber: "04",
        title: "Deployment & Continuous Tuning",
        description: "Deploy to cloud infrastructure with logging, cost monitoring, and iterative knowledge updates.",
      },
    ],
    faqs: [
      {
        question: "How do you prevent AI models from fabricating answers?",
        answer:
          "We ground responses using Retrieval-Augmented Generation (RAG) over your verified documents, enforce strict system instructions, validate outputs with JSON schemas, and configure fallback responses whenever confidence is low.",
      },
      {
        question: "Is our business data kept private?",
        answer:
          "Yes. Your proprietary documents and database records stay within your isolated database and cloud environment, and we configure API integrations so client data is never used to train public foundation models.",
      },
      {
        question: "Can AI automation work with our existing software?",
        answer:
          "Yes. We build REST API and webhook connectors that integrate directly with your existing CRM, ERP, email, WhatsApp, and internal SQL/NoSQL databases.",
      },
    ],
    relatedSlugs: ["ai-voice-receptionist", "custom-software-development", "api-integration-cloud-engineering"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    tagline: "Tailored Web Platforms, SaaS Products & Mission-Critical Internal Systems",
    summary:
      "We architect and build full-stack web applications, multi-tenant SaaS products, and bespoke operational software engineered around your exact business logic.",
    heroImage: SITE_ASSETS.services["custom-software-development"].src,
    heroAlt: SITE_ASSETS.services["custom-software-development"].alt,
    iconName: "Code2",
    overview:
      "When off-the-shelf software forces your team into awkward workarounds or expensive per-seat licensing bottlenecks, custom software becomes a decisive operational advantage. NAVCHETNAA AI builds clean, modular, high-performance applications tailored to your exact workflows.",
    challenges: [
      "Critical operations running on fragile, error-prone spreadsheets shared across departments.",
      "Off-the-shelf SaaS tools missing essential domain workflows or charging prohibitive user fees.",
      "Legacy desktop or monolithic web systems that are slow, unmaintainable, and inaccessible on mobile.",
      "Lack of granular role-based permissions and audit trails across staff, managers, and clients.",
    ],
    solution:
      "We engineer modern full-stack web applications using Next.js, React, Python, Django, and FastAPI backed by PostgreSQL or MySQL—complete with role-based access control (RBAC), real-time dashboards, automated reporting, and clean API documentation.",
    capabilities: [
      {
        title: "Multi-Tenant SaaS Product Engineering",
        description:
          "Complete SaaS architecture including tenant data isolation, subscription billing hooks, admin consoles, and onboarding flows.",
      },
      {
        title: "Internal Operations & Workflow Portals",
        description:
          "Bespoke dashboards, approval engines, task trackers, and reporting portals tailored to your exact internal processes.",
      },
      {
        title: "Role-Based Access & Security Governance",
        description:
          "JWT/OAuth authentication, fine-grained permission matrices, encrypted secrets, and full activity audit logs.",
      },
      {
        title: "Legacy Software Modernization",
        description:
          "Structured migration from outdated databases and spreadsheets into fast, cloud-ready web architectures without data loss.",
      },
    ],
    useCases: [
      {
        title: "SaaS MVP to Production Launch",
        description:
          "Turn a validated product concept into a secure, scalable multi-tenant web application ready for customer onboarding.",
      },
      {
        title: "Custom Client & Vendor Portals",
        description:
          "Give customers or suppliers self-service access to orders, invoices, project milestones, and document uploads.",
      },
      {
        title: "Specialized Operational Management Systems",
        description:
          "Replace manual registers and spreadsheets with centralized, real-time tracking built around your domain rules.",
      },
    ],
    techStack: ["TypeScript", "Next.js", "React", "Python", "Django", "FastAPI", "PostgreSQL", "Docker"],
    process: [
      {
        stepNumber: "01",
        title: "Domain & Workflow Discovery",
        description: "Map every user role, data entity, business rule, and reporting requirement in detail.",
      },
      {
        stepNumber: "02",
        title: "Database & UI/UX Blueprint",
        description: "Design normalized database schemas, API contracts, and responsive interface wireframes.",
      },
      {
        stepNumber: "03",
        title: "Iterative Sprint Engineering",
        description: "Build and demonstrate working modules continuously with strict TypeScript and backend testing.",
      },
      {
        stepNumber: "04",
        title: "Cloud Rollout & Handover",
        description: "Deploy to production servers with automated backups, documentation, and team training.",
      },
    ],
    faqs: [
      {
        question: "Do we receive full ownership of the custom source code?",
        answer:
          "Yes. Upon completion and handover, you receive full ownership of the custom application codebase, database schemas, and technical documentation.",
      },
      {
        question: "Can we start with an MVP and expand features in phases?",
        answer:
          "Yes. We design modular architectures specifically so you can launch core workflows quickly and add new modules without rewriting the foundation.",
      },
      {
        question: "How do you ensure software remains fast as data grows?",
        answer:
          "We implement proper relational indexing, server-side pagination, caching layers with Redis where needed, and clean query optimization from day one.",
      },
    ],
    relatedSlugs: ["crm-erp-development", "website-development", "api-integration-cloud-engineering"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    tagline: "High-Performance, SEO-Engineered Corporate & Product Web Platforms",
    summary:
      "We design and engineer fast, accessible, responsive websites using Next.js and modern architectural typography that build authority and convert visitors.",
    heroImage: SITE_ASSETS.services["website-development"].src,
    heroAlt: SITE_ASSETS.services["website-development"].alt,
    iconName: "Globe",
    overview:
      "Your website is your primary digital flagship. Slow page loads, generic templates, and poor mobile structure quietly erode credibility and search rankings. NAVCHETNAA AI builds bespoke, ultra-fast websites with precision UI/UX, technical SEO, and subtle motion.",
    challenges: [
      "Bloated page-builder templates that suffer from slow Core Web Vitals and poor search visibility.",
      "Generic designs that fail to differentiate technical, enterprise, or consulting brands.",
      "Broken mobile layouts, inaccessible navigation, and clunky lead-capture forms.",
      "Websites disconnected from CRM pipelines, WhatsApp channels, or AI chat assistants.",
    ],
    solution:
      "We engineer custom Next.js websites with server-side rendering, semantic HTML5, structured JSON-LD schema markup, optimised WebP/AVIF imagery, responsive CSS architecture, and seamless lead capture.",
    capabilities: [
      {
        title: "Corporate & Technology Agency Websites",
        description:
          "Editorial-grade layouts with refined typography, interactive product showcases, and clear conversion journeys.",
      },
      {
        title: "Technical SEO & Schema Engineering",
        description:
          "Clean URL structures, dynamic sitemaps, Open Graph metadata, canonical tags, and structured JSON-LD built into the codebase.",
      },
      {
        title: "Interactive Product & 3D Web Experiences",
        description:
          "Purposeful Framer Motion, GSAP scroll interactions, and lightweight WebGL visuals that elevate brand storytelling.",
      },
      {
        title: "Lead Capture & AI Assistant Integration",
        description:
          "Validated inquiry forms, WhatsApp quick-connect flows, and optional AI chatbots connected directly to your CRM.",
      },
    ],
    useCases: [
      {
        title: "B2B Technology & SaaS Flagship Sites",
        description:
          "Present complex software capabilities clearly with interactive product previews, documentation hubs, and demo booking flows.",
      },
      {
        title: "Institutional & Enterprise Web Portals",
        description:
          "Multi-department websites for colleges, healthcare groups, and industrial firms with structured information architecture.",
      },
      {
        title: "High-Converting Service & Product Landing Pages",
        description:
          "Focused, ultra-fast landing experiences built for paid campaigns, product launches, and lead generation.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "Framer Motion", "GSAP", "Three.js"],
    process: [
      {
        stepNumber: "01",
        title: "Information Architecture & Copy Structure",
        description: "Organize sitemaps, page hierarchies, SEO targets, and conversion pathways.",
      },
      {
        stepNumber: "02",
        title: "Editorial UI/UX & Responsive Design",
        description: "Craft clean visual systems tailored to desktop, tablet, and mobile viewports.",
      },
      {
        stepNumber: "03",
        title: "Next.js & Accessibility Engineering",
        description: "Develop semantic, fast-loading components with keyboard accessibility and structured metadata.",
      },
      {
        stepNumber: "04",
        title: "Core Web Vitals & SEO Launch",
        description: "Verify speed, responsive breakpoints, sitemap indexing, and production deployment.",
      },
    ],
    faqs: [
      {
        question: "Why do you build websites with Next.js instead of basic templates?",
        answer:
          "Next.js delivers superior page load speed, server-rendered SEO crawlability, strict security, and full architectural flexibility—allowing your website to scale into a full web platform whenever needed.",
      },
      {
        question: "Will the website work smoothly across all mobile devices?",
        answer:
          "Yes. Every page is engineered and tested across mobile (360px–430px), tablet (768px–1024px), and wide desktop (1440px–1920px) viewports.",
      },
      {
        question: "Can you integrate a custom AI chatbot or CRM lead form?",
        answer:
          "Yes. We build server-validated contact forms and can embed knowledge-grounded AI assistants directly into your website.",
      },
    ],
    relatedSlugs: ["custom-software-development", "ai-development-automation", "mobile-app-development"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Cross-Platform iOS & Android Applications Built with Flutter",
    summary:
      "We build responsive, intuitive mobile applications for iOS and Android using Flutter—connecting customers, field teams, and administrators to real-time backend systems.",
    heroImage: SITE_ASSETS.services["mobile-app-development"].src,
    heroAlt: SITE_ASSETS.services["mobile-app-development"].alt,
    iconName: "Smartphone",
    overview:
      "Modern customers and field staff expect fast, reliable mobile access. Maintaining separate native iOS and Android codebases doubles development cost and slows updates. NAVCHETNAA AI engineers cross-platform mobile applications with Flutter backed by secure Python and Node/Next.js APIs.",
    challenges: [
      "High cost and slow release cycles from maintaining separate iOS and Android codebases.",
      "Field staff, faculty, or delivery teams unable to update records on the go.",
      "Poor mobile user experience when forcing complex desktop web portals onto small screens.",
      "Unreliable data synchronization when mobile users operate in low-connectivity environments.",
    ],
    solution:
      "We develop single-codebase iOS and Android applications using Flutter with clean state management, push notifications, role-based mobile views, offline-resilient caching, and high-speed REST API integration.",
    capabilities: [
      {
        title: "Cross-Platform Flutter Engineering",
        description:
          "Smooth 60fps native-compiled performance across both iOS and Android from a unified, maintainable codebase.",
      },
      {
        title: "Companion Apps for Web & ERP Systems",
        description:
          "Dedicated mobile portals for students, parents, teachers, patients, sales reps, or fleet drivers synced to your central backend.",
      },
      {
        title: "Push Notifications & Real-Time Alerts",
        description:
          "Automated event-driven alerts for approvals, attendance, bookings, lead assignments, and order status updates.",
      },
      {
        title: "Secure Authentication & Biometric Access",
        description:
          "Token-based authentication, role-restricted screens, and encrypted local storage for sensitive user sessions.",
      },
    ],
    useCases: [
      {
        title: "Institutional & Campus Mobile Apps",
        description:
          "Give students, faculty, and administrators instant mobile access to attendance, timetables, notices, and fee records.",
      },
      {
        title: "Field Sales & Service Operations Apps",
        description:
          "Enable on-ground teams to log visits, capture leads, inspect checklists, and sync status updates in real time.",
      },
      {
        title: "Customer Booking & Service Apps",
        description:
          "Branded mobile apps for appointment scheduling, order tracking, and direct customer engagement.",
      },
    ],
    techStack: ["Flutter", "Dart", "FastAPI", "Django REST", "PostgreSQL", "Firebase", "AWS"],
    process: [
      {
        stepNumber: "01",
        title: "Mobile User Journey & Scope Definition",
        description: "Identify core mobile screens, offline needs, notification triggers, and user roles.",
      },
      {
        stepNumber: "02",
        title: "Mobile UI/UX Prototyping",
        description: "Design thumb-friendly navigation, clean typography, and platform-consistent interactions.",
      },
      {
        stepNumber: "03",
        title: "Flutter & API Integration",
        description: "Build cross-platform screens and connect securely to backend authentication and data endpoints.",
      },
      {
        stepNumber: "04",
        title: "Device Testing & Store Readiness",
        description: "Test across Android and iOS screen sizes and prepare builds for Play Store and App Store distribution.",
      },
    ],
    faqs: [
      {
        question: "Why do you use Flutter for mobile app development?",
        answer:
          "Flutter compiles directly to native ARM code for both iOS and Android from a single codebase—significantly reducing development time and maintenance overhead while delivering smooth, responsive interfaces.",
      },
      {
        question: "Can the mobile app share the same backend as our web application?",
        answer:
          "Yes. We architect unified REST APIs in FastAPI or Django so your web dashboard and mobile apps share the exact same database, permissions, and business logic.",
      },
      {
        question: "Do you handle backend APIs as well as the mobile app?",
        answer:
          "Yes. We engineer the complete end-to-end stack—from database and API server to the Flutter mobile interface.",
      },
    ],
    relatedSlugs: ["custom-software-development", "crm-erp-development", "api-integration-cloud-engineering"],
  },
  {
    slug: "crm-erp-development",
    title: "CRM & ERP Development",
    shortTitle: "CRM & ERP Systems",
    tagline: "Unified Customer Pipeline & Enterprise Resource Planning Platforms",
    summary:
      "We build custom CRM and ERP systems that centralize leads, sales, inventory, billing, HR, and operational workflows into one source of truth.",
    heroImage: SITE_ASSETS.services["crm-erp-development"].src,
    heroAlt: SITE_ASSETS.services["crm-erp-development"].alt,
    iconName: "Database",
    overview:
      "Fragmented tools slow down growing organizations. When sales lives in one spreadsheet, billing in another, and inventory in a separate register, leadership loses visibility. NAVCHETNAA AI builds tailored CRM and ERP platforms built around your exact departments and approval flows.",
    challenges: [
      "Sales leads slipping through the cracks due to manual follow-up tracking.",
      "Zero real-time visibility across stock levels, procurement, billing, and department budgets.",
      "Rigid commercial ERPs requiring expensive customization for simple workflow changes.",
      "Manual end-of-month reconciliation across disconnected accounting and operational sheets.",
    ],
    solution:
      "We design modular, role-based CRM and ERP platforms featuring custom pipeline stages, automated follow-up reminders, inventory and expiry tracking, invoicing, analytics dashboards, and optional AI voice/chat lead capture.",
    capabilities: [
      {
        title: "Custom B2B & B2C CRM Pipelines",
        description:
          "Lead capture, stage progression, automated reminders, call/message logging, and conversion analytics tailored to your sales motion.",
      },
      {
        title: "Inventory, Procurement & Billing ERP",
        description:
          "Real-time stock tracking, supplier management, batch/expiry alerts, purchase orders, and GST/tax-ready invoicing.",
      },
      {
        title: "Multi-Department Role Governance",
        description:
          "Distinct dashboards and approval permissions for executives, department heads, staff, and external partners.",
      },
      {
        title: "AI-Enhanced CRM Automation",
        description:
          "Automatic lead enrichment, call summary logging from AI Receptionists, and automated follow-up task creation.",
      },
    ],
    useCases: [
      {
        title: "Sales & Lead Management CRM",
        description:
          "Centralize inquiries from website forms, WhatsApp, and phone calls into one structured pipeline with clear ownership.",
      },
      {
        title: "Institutional & Multi-Branch ERP",
        description:
          "Coordinate academics, administration, inventory, and finance across single or multi-campus organizations.",
      },
      {
        title: "Distribution & Retail Operations ERP",
        description:
          "Connect warehouse stock, branch transfers, order fulfillment, and customer billing in real time.",
      },
    ],
    techStack: ["Python", "Django", "FastAPI", "React", "Next.js", "PostgreSQL", "MySQL", "Redis"],
    process: [
      {
        stepNumber: "01",
        title: "Departmental Process Mapping",
        description: "Audit how leads, orders, stock, and approvals move across every role in your organization.",
      },
      {
        stepNumber: "02",
        title: "Modular Schema & Role Design",
        description: "Architect relational tables, permission hierarchies, and reporting metrics.",
      },
      {
        stepNumber: "03",
        title: "Core Modules & Data Migration",
        description: "Build core CRM/ERP modules and import clean historical records from existing spreadsheets.",
      },
      {
        stepNumber: "04",
        title: "Team Onboarding & Phased Expansion",
        description: "Train department users and roll out additional automation modules smoothly.",
      },
    ],
    faqs: [
      {
        question: "Can we migrate our existing Excel or CSV records into the new CRM/ERP?",
        answer:
          "Yes. We build structured import pipelines to clean, validate, and migrate your existing customer, product, and historical records safely.",
      },
      {
        question: "Can our CRM connect directly with an AI Receptionist or website forms?",
        answer:
          "Yes. Every inquiry captured via your website, WhatsApp, or AI Voice Receptionist can automatically create or update leads inside your custom CRM.",
      },
      {
        question: "How are user permissions handled across departments?",
        answer:
          "We implement strict Role-Based Access Control (RBAC) so each user role sees only the modules, records, and actions authorized for their position.",
      },
    ],
    relatedSlugs: ["custom-software-development", "ai-development-automation", "api-integration-cloud-engineering"],
  },
  {
    slug: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    shortTitle: "AI Voice Receptionist",
    tagline: "24/7 Conversational Voice Agents for Inbound Calls, Booking & Lead Capture",
    summary:
      "Never miss a business call again. We build natural, responsive AI voice receptionists that answer inbound calls, qualify callers, book appointments, and transfer urgent conversations.",
    heroImage: SITE_ASSETS.services["ai-voice-receptionist"].src,
    heroAlt: SITE_ASSETS.services["ai-voice-receptionist"].alt,
    iconName: "PhoneCall",
    overview:
      "Missed phone calls represent lost revenue and frustrated customers. Hiring 24/7 front-desk staff is expensive, while traditional IVR phone trees frustrate callers. NAVCHETNAA AI engineers conversational AI Voice Receptionists that understand natural speech, answer business questions accurately, and execute real scheduling and CRM workflows.",
    challenges: [
      "Inbound customer and prospect calls going unanswered during peak hours, evenings, or weekends.",
      "Front-desk staff overwhelmed by repetitive questions about hours, pricing, locations, and availability.",
      "Caller details scribbled on paper notes that never make it into the CRM.",
      "Rigid 'Press 1 for Sales' phone menus that cause callers to hang up.",
    ],
    solution:
      "We configure and integrate low-latency conversational voice AI agents trained on your business knowledge base, connected to your calendar and CRM, and equipped with intelligent human call transfer rules.",
    capabilities: [
      {
        title: "24/7 Instant Inbound Call Answering",
        description:
          "Greets callers immediately with a natural, brand-aligned voice and handles multiple concurrent calls with zero hold time.",
      },
      {
        title: "Structured Lead Capture & Qualification",
        description:
          "Collects caller name, contact details, service interest, and urgency—pushing structured records directly to your CRM.",
      },
      {
        title: "Automated Appointment & Consultation Booking",
        description:
          "Checks real-time calendar availability, schedules appointments, and triggers SMS/WhatsApp confirmations.",
      },
      {
        title: "Warm Human Call Escalation",
        description:
          "Transfers high-priority or complex calls directly to designated staff members along with a concise conversation summary.",
      },
    ],
    useCases: [
      {
        title: "Clinics, Hospitals & Diagnostic Centers",
        description:
          "Handle patient appointment scheduling, doctor availability queries, and clinic hours around the clock.",
      },
      {
        title: "Real Estate & Property Agencies",
        description:
          "Capture buyer and tenant inquiries immediately, qualify budgets and preferred locations, and schedule site visits.",
      },
      {
        title: "Service Businesses & Consulting Firms",
        description:
          "Ensure every prospect inquiry is answered professionally even when your team is in client meetings.",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenAI Realtime / Voice APIs", "Telephony SIP/Twilio", "PostgreSQL", "Webhooks"],
    process: [
      {
        stepNumber: "01",
        title: "Call Script & Knowledge Design",
        description: "Define brand greeting, FAQs, qualification questions, and escalation boundaries.",
      },
      {
        stepNumber: "02",
        title: "Voice Agent & Telephony Setup",
        description: "Configure low-latency speech recognition, natural voice synthesis, and phone number routing.",
      },
      {
        stepNumber: "03",
        title: "CRM & Calendar Integration",
        description: "Connect live booking availability, webhook notifications, and call summary logging.",
      },
      {
        stepNumber: "04",
        title: "Live Call Testing & Go-Live",
        description: "Test accents, interruptions, and transfer scenarios before activating live business lines.",
      },
    ],
    faqs: [
      {
        question: "What happens if a caller asks something outside the AI's knowledge?",
        answer:
          "The agent acknowledges the request politely and either transfers the call to a human team member or logs a high-priority callback ticket with full context.",
      },
      {
        question: "Can we review transcripts and summaries of every call?",
        answer:
          "Yes. Every call generates a searchable transcript, structured summary, caller intent tag, and captured contact details inside your dashboard or CRM.",
      },
      {
        question: "Can the AI Voice Receptionist work with our existing business phone number?",
        answer:
          "Yes. Calls can be forwarded seamlessly from your existing business number during after-hours, overflow periods, or 24/7.",
      },
    ],
    relatedSlugs: ["ai-development-automation", "crm-erp-development", "api-integration-cloud-engineering"],
  },
  {
    slug: "api-integration-cloud-engineering",
    title: "API Integration & Cloud Engineering",
    shortTitle: "API & Cloud Engineering",
    tagline: "Resilient Cloud Infrastructure, Microservices & Seamless System Integrations",
    summary:
      "We connect fragmented business platforms through secure APIs and deploy scalable, containerized applications on AWS and modern cloud infrastructure.",
    heroImage: SITE_ASSETS.services["api-integration-cloud-engineering"].src,
    heroAlt: SITE_ASSETS.services["api-integration-cloud-engineering"].alt,
    iconName: "Cloud",
    overview:
      "Modern digital operations depend on reliable data flow between platforms and resilient cloud hosting underneath. NAVCHETNAA AI architects clean REST APIs, webhook pipelines, and Dockerized AWS deployments that keep your systems fast, secure, and synchronized.",
    challenges: [
      "Isolated CRM, accounting, payment, and messaging platforms requiring manual CSV exports.",
      "Unreliable third-party integrations that fail silently without retry logic or error alerts.",
      "Fragile single-server deployments vulnerable to downtime, traffic spikes, or configuration drift.",
      "Exposed API keys and weak authentication controls across internal services.",
    ],
    solution:
      "We build idempotent API bridges, asynchronous background task queues, and containerized Docker deployments on AWS EC2/RDS/S3 with Nginx reverse proxies, automated SSL, and structured monitoring.",
    capabilities: [
      {
        title: "Third-Party API & Webhook Orchestration",
        description:
          "Connect payment gateways, WhatsApp Business APIs, CRMs, ERPs, telephony providers, and analytics tools cleanly.",
      },
      {
        title: "High-Throughput FastAPI & Django Backends",
        description:
          "Asynchronous Python API services with OpenAPI documentation, rate limiting, and strict schema validation.",
      },
      {
        title: "Docker & AWS Cloud Deployment",
        description:
          "Reproducible Docker Compose and AWS cloud architectures with automated backups, Nginx routing, and SSL security.",
      },
      {
        title: "Background Workers & Queue Processing",
        description:
          "Celery and Redis task pipelines for reliable email/WhatsApp dispatch, report generation, and AI batch processing.",
      },
    ],
    useCases: [
      {
        title: "Bi-Directional CRM & ERP Synchronization",
        description:
          "Keep customer records, orders, and payment statuses aligned automatically across sales and finance platforms.",
      },
      {
        title: "Production Cloud Migration & Hardening",
        description:
          "Move local or unstable applications onto structured AWS infrastructure with automated database backups.",
      },
      {
        title: "Unified API Gateway for Web & Mobile",
        description:
          "Expose a single secure backend API serving web portals, Flutter mobile apps, and AI agents simultaneously.",
      },
    ],
    techStack: ["AWS", "Docker", "Nginx", "Python", "FastAPI", "Redis", "Celery", "PostgreSQL"],
    process: [
      {
        stepNumber: "01",
        title: "Infrastructure & Integration Audit",
        description: "Review existing endpoints, data schemas, throughput needs, and security boundaries.",
      },
      {
        stepNumber: "02",
        title: "API Contract & Cloud Topology Design",
        description: "Define authentication flows, webhook retry policies, and container deployment architecture.",
      },
      {
        stepNumber: "03",
        title: "Implementation & Load Verification",
        description: "Develop connectors and cloud configurations with automated health checks and error logging.",
      },
      {
        stepNumber: "04",
        title: "Deployment, Documentation & Monitoring",
        description: "Launch into production with clear runbooks, backup schedules, and uptime alerts.",
      },
    ],
    faqs: [
      {
        question: "Which cloud platforms do you deploy on?",
        answer:
          "We primarily architect deployments on AWS (EC2, RDS, S3, Route 53) as well as Vercel and containerized Linux VPS environments depending on workload requirements.",
      },
      {
        question: "How do you handle integration failures when a third-party API goes down?",
        answer:
          "We implement asynchronous queues, exponential backoff retries, dead-letter logging, and automated alerts so no webhook or transaction is silently lost.",
      },
      {
        question: "Can you document APIs for our internal developers?",
        answer:
          "Yes. Every API we build includes interactive OpenAPI/Swagger documentation, authentication guides, and sample payloads.",
      },
    ],
    relatedSlugs: ["custom-software-development", "ai-development-automation", "crm-erp-development"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}