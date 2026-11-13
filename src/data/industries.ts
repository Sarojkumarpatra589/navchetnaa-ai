import { IndustryItem } from "@/types";
import { SITE_ASSETS } from "./assets";

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    slug: "education",
    name: "Education",
    tagline: "Connected Campus Governance, Automated Admissions & Academic Operations",
    summary:
      "We engineer unified institutional management platforms, student-faculty portals, and AI inquiry assistants for schools, colleges, coaching institutes, and universities.",
    heroImage: SITE_ASSETS.industries.education.src,
    heroAlt: SITE_ASSETS.industries.education.alt,
    iconName: "GraduationCap",
    introduction:
      "Educational institutions manage complex academic calendars, multi-program enrollments, faculty schedules, examinations, fee reconciliation, and accreditation audits. When these functions live across disconnected registers and spreadsheets, administrative staff spend weeks on manual compilation while students face delayed information.",
    challenges: [
      "Manual admissions inquiries and counseling follow-ups overwhelming administrative desks during peak intake seasons.",
      "Fragmented student attendance, timetable, examination, and fee records across departments.",
      "Labor-intensive data collection for IQAC reviews and NAAC accreditation documentation.",
      "Delayed communication between administration, faculty, students, and parents.",
    ],
    solutions: [
      {
        title: "Configurable Institutional ERP (CollegeOS)",
        description:
          "Unify admissions, attendance, timetables, exams, results, fees, hostel, library, and IQAC/NAAC workflows across +2, +3, UG, PG, Diploma, ITI, B.Tech, M.Tech, and PhD programs.",
      },
      {
        title: "24/7 AI Admissions & Student Helpdesk",
        description:
          "Deploy voice and web/WhatsApp AI assistants grounded in your prospectus to answer eligibility, fee, and deadline queries around the clock.",
      },
      {
        title: "Companion Mobile Portals for Faculty & Students",
        description:
          "Cross-platform Flutter apps giving faculty fast attendance entry and students instant access to schedules, results, and official notices.",
      },
    ],
    relevantProductSlugs: ["collegeos", "navchetnaa-ai-receptionist"],
    exampleWorkflows: [
      {
        title: "Automated Admissions Inquiry-to-Counseling Pipeline",
        steps: [
          "Prospective student calls or messages on WhatsApp asking about B.Tech or Degree eligibility.",
          "AI assistant answers program criteria from verified prospectus data and captures applicant details.",
          "Counseling slot is scheduled automatically and applicant record is created in the admissions portal.",
        ],
      },
      {
        title: "Semester Examination & IQAC Audit Readiness",
        steps: [
          "Faculty record daily attendance and internal assessment marks in role-gated department portals.",
          "HOD and Principal verify records with automated validation rules.",
          "Criterion-aligned reports export cleanly for IQAC and NAAC review cycles.",
        ],
      },
    ],
    techStack: ["Next.js", "Python", "Django", "Flutter", "PostgreSQL", "OpenAI", "AWS"],
    faqs: [
      {
        question: "Can your education solutions support both small colleges and multi-department institutes?",
        answer:
          "Yes. Our modular architecture allows institutions to start with core admissions, attendance, and fee modules and expand into hostel, library, inventory, and IQAC/NAAC reporting.",
      },
      {
        question: "How does an AI Receptionist help during admissions season?",
        answer:
          "It handles concurrent inbound calls 24/7, answers routine questions about courses and admission dates, and logs qualified student leads for counseling staff.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline: "24/7 Patient Call Handling, Appointment Scheduling & Clinic Workflow Systems",
    summary:
      "We build conversational AI voice receptionists, patient scheduling automation, and secure clinical operations software that reduce front-desk congestion.",
    heroImage: SITE_ASSETS.industries.healthcare.src,
    heroAlt: SITE_ASSETS.industries.healthcare.alt,
    iconName: "HeartPulse",
    introduction:
      "Clinics, diagnostic centers, and specialty hospitals rely on timely, accurate communication. When front-desk staff are occupied checking in patients, unanswered phone lines translate directly into missed appointments and frustrated patients.",
    challenges: [
      "High call volumes during morning clinic hours causing long hold times and missed appointment bookings.",
      "Repetitive front-desk inquiries regarding doctor schedules, test preparation, clinic locations, and insurance policies.",
      "Manual appointment reminders leading to avoidable patient no-shows.",
      "Disconnected patient intake forms and billing or laboratory status tracking.",
    ],
    solutions: [
      {
        title: "AI Voice Receptionist for Clinics & Diagnostics",
        description:
          "Answers patient calls 24/7, books or reschedules doctor consultations, explains diagnostic test prep guidelines, and transfers urgent calls to nursing desks.",
      },
      {
        title: "Automated WhatsApp & SMS Appointment Workflows",
        description:
          "Sends instant booking confirmations, pre-visit instructions, and timely appointment reminders.",
      },
      {
        title: "Custom Clinic & Diagnostic Management Portals",
        description:
          "Role-based web and mobile interfaces for receptionists, doctors, lab technicians, and clinic administrators.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist"],
    exampleWorkflows: [
      {
        title: "24/7 Patient Consultation Booking",
        steps: [
          "Patient calls clinic after hours to book an orthopedic or dental consultation.",
          "AI Receptionist checks doctor availability rules, books the slot, and captures patient details.",
          "Confirmation message is sent via WhatsApp/SMS and front-desk schedule updates automatically.",
        ],
      },
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "Twilio / SIP", "PostgreSQL", "React", "AWS"],
    faqs: [
      {
        question: "Does the AI Receptionist give medical diagnoses?",
        answer:
          "No. We enforce strict guardrails so the AI handles administrative scheduling, clinic hours, and approved preparation instructions—immediately escalating medical emergencies or clinical questions to human staff.",
      },
      {
        question: "Can patients reschedule or cancel appointments automatically?",
        answer:
          "Yes. Callers can verify their booking details and reschedule into open calendar slots without front-desk intervention.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Instant Property Lead Qualification, Site-Visit Booking & Broker CRM Automation",
    summary:
      "Capture every property portal and phone inquiry within seconds, qualify buyer budgets and preferences, schedule site visits, and keep broker pipelines updated.",
    heroImage: SITE_ASSETS.industries["real-estate"].src,
    heroAlt: SITE_ASSETS.industries["real-estate"].alt,
    iconName: "Building2",
    introduction:
      "In real estate sales and leasing, response speed determines who wins the client. Property buyers inquire across portals, WhatsApp, and phone calls at all hours—yet field agents are frequently on site visits and unable to respond immediately.",
    challenges: [
      "Inbound buyer calls and portal leads waiting hours for follow-up while agents are conducting site visits.",
      "Sales teams spending hours manually calling unqualified leads without budget or location alignment.",
      "Lost follow-ups across multi-month property buying cycles.",
      "Lack of centralized inventory visibility across available units, floor plans, and booking statuses.",
    ],
    solutions: [
      {
        title: "24/7 AI Property Receptionist & WhatsApp Sales Agent",
        description:
          "Responds immediately to inbound calls and portal inquiries, shares project brochures, qualifies budget and configuration needs, and schedules site visits.",
      },
      {
        title: "Custom Real Estate CRM & Inventory Portal",
        description:
          "Track leads by project, assign site-visit tasks to field agents, monitor unit availability, and automate follow-up reminders.",
      },
      {
        title: "B2B Broker & Partner Network (BizConnect)",
        description:
          "Structured directory and partner collaboration workflows for developers, channel partners, and commercial consultants.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist", "bizconnect"],
    exampleWorkflows: [
      {
        title: "Portal Lead-to-Site-Visit Automation",
        steps: [
          "Buyer submits inquiry on property listing or calls project hotline.",
          "AI Sales Agent engages via voice or WhatsApp, confirms preferred unit size, budget, and timeline.",
          "Site visit is booked onto the assigned relationship manager's calendar with structured CRM notes.",
        ],
      },
    ],
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI", "WhatsApp API", "PostgreSQL", "Docker"],
    faqs: [
      {
        question: "Can the AI agent share floor plans and project brochures automatically?",
        answer:
          "Yes. When a prospect expresses interest in a specific configuration on WhatsApp or web chat, the agent can share approved project PDFs and location links immediately.",
      },
      {
        question: "Can leads be routed to different sales agents based on project or budget?",
        answer:
          "Yes. Our CRM automation engine routes qualified inquiries automatically based on territory, project, or ticket size.",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Production Visibility, Inventory ERP & Automated Vendor Workflows",
    summary:
      "Replace disconnected factory floor spreadsheets with custom production tracking, raw-material inventory ERP, vendor portals, and automated document processing.",
    heroImage: SITE_ASSETS.industries.manufacturing.src,
    heroAlt: SITE_ASSETS.industries.manufacturing.alt,
    iconName: "Factory",
    introduction:
      "Manufacturing businesses balance raw material procurement, bill-of-materials tracking, batch production schedules, quality checks, and distributor dispatch. Disconnected spreadsheets create blind spots between plant operations and management.",
    challenges: [
      "Delayed visibility into raw material stock levels, reorder thresholds, and work-in-progress batches.",
      "Manual entry of vendor invoices, purchase orders, and dispatch challans across accounting sheets.",
      "Fragmented communication between production supervisors, warehouse teams, and sales.",
      "Difficulty tracking equipment maintenance schedules and quality inspection logs.",
    ],
    solutions: [
      {
        title: "Custom Manufacturing & Inventory ERP",
        description:
          "Centralize bill of materials (BOM), stock movements, batch tracking, supplier orders, and distributor invoicing in one role-based web system.",
      },
      {
        title: "Automated Purchase Order & Invoice Extraction",
        description:
          "AI document workflows parse incoming supplier bills and purchase orders directly into ERP tables for fast verification.",
      },
      {
        title: "Distributor & Supplier B2B Directory",
        description:
          "Structured partner portals and B2B discovery networks for sourcing and distributor coordination.",
      },
    ],
    relevantProductSlugs: ["bizconnect"],
    exampleWorkflows: [
      {
        title: "Automated Low-Stock & Vendor Reorder Pipeline",
        steps: [
          "Warehouse dispatch updates raw material consumption in real time.",
          "ERP detects stock crossing minimum safety threshold and drafts a purchase requisition.",
          "Approval alert routes to procurement manager and dispatches approved PO to vendor.",
        ],
      },
    ],
    techStack: ["Python", "Django", "React", "PostgreSQL", "Redis", "Docker", "AWS"],
    faqs: [
      {
        question: "Can your ERP integrate with our existing accounting software?",
        answer:
          "Yes. We build clean CSV/Excel exporters and REST API connectors so verified billing and inventory records synchronize smoothly with your accounting workflows.",
      },
      {
        question: "Can plant supervisors update production logs from tablets or mobile devices?",
        answer:
          "Yes. All interfaces are responsive and can also be paired with dedicated Flutter mobile apps for floor supervisors.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    tagline: "High-Conversion Storefronts, AI Shopping Assistants & Automated Order Support",
    summary:
      "We build fast custom e-commerce platforms, WhatsApp & web AI shopping assistants, and automated post-purchase support workflows.",
    heroImage: SITE_ASSETS.industries["e-commerce"].src,
    heroAlt: SITE_ASSETS.industries["e-commerce"].alt,
    iconName: "ShoppingBag",
    introduction:
      "Modern e-commerce brands compete on site speed, guided product discovery, and instant post-order support. Slow storefronts and delayed answers to pre-purchase or delivery questions directly reduce conversion and repeat orders.",
    challenges: [
      "High cart abandonment when shoppers have unanswered questions about sizing, compatibility, or delivery timelines.",
      "Support inboxes flooded with repetitive 'Where is my order?' and return-policy inquiries.",
      "Disconnected inventory across website storefront, marketplaces, and warehouse stock.",
      "Slow, plugin-heavy storefronts hurting mobile conversion and search rankings.",
    ],
    solutions: [
      {
        title: "AI Product Advisor & Support Chatbot",
        description:
          "Trained on your live product catalog and shipping/return policies to guide shoppers and resolve order lookups 24/7 on web and WhatsApp.",
      },
      {
        title: "Custom High-Speed E-commerce Platforms",
        description:
          "Tailored Next.js storefronts and backend order management engineered for fast Core Web Vitals and clean checkout flows.",
      },
      {
        title: "Automated Post-Purchase & Inventory Workflows",
        description:
          "Sync order statuses, trigger automated WhatsApp shipping updates, and alert operations when SKUs run low.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist"],
    exampleWorkflows: [
      {
        title: "Instant Order Status & Return Assistance",
        steps: [
          "Customer asks for order tracking or exchange instructions on website chat or WhatsApp.",
          "AI assistant verifies order ID via secure backend API and provides live shipment status.",
          "If exchange is requested, structured return ticket is logged automatically for fulfillment team.",
        ],
      },
    ],
    techStack: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "OpenAI", "Stripe / Razorpay"],
    faqs: [
      {
        question: "Can the AI chatbot recommend products from our live catalog?",
        answer:
          "Yes. By indexing product attributes, descriptions, and availability, the assistant helps shoppers compare options and find matching items.",
      },
      {
        question: "Can you integrate Indian and international payment gateways?",
        answer:
          "Yes. We integrate Razorpay, Stripe, and custom webhook verification pipelines with full server-side security.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    tagline: "Fleet Dispatch Coordination, Shipment Tracking & Automated Client Alerts",
    summary:
      "Streamline vehicle scheduling, driver trip logging, proof-of-delivery tracking, and automated inbound status handling for transport and supply chain operators.",
    heroImage: SITE_ASSETS.industries.logistics.src,
    heroAlt: SITE_ASSETS.industries.logistics.alt,
    iconName: "Truck",
    introduction:
      "Logistics and transport operations run on tight schedules across dispatchers, drivers, warehouses, and clients. Manual phone check-ins and paper trip sheets create delays, billing disputes, and blind spots across active routes.",
    challenges: [
      "Constant inbound phone calls from clients asking for shipment ETAs and dispatch confirmation.",
      "Manual vehicle and driver assignment tracking across spreadsheets and phone logs.",
      "Delayed invoice generation due to missing proof-of-delivery (POD) or fuel/expense records.",
      "Unmonitored vehicle maintenance and compliance renewal deadlines.",
    ],
    solutions: [
      {
        title: "Custom Fleet & Transport Management System",
        description:
          "Centralized dispatch board for vehicle allocation, route milestones, fuel/expense logs, maintenance alerts, and automated trip billing.",
      },
      {
        title: "Flutter Driver & Field Operations App",
        description:
          "Mobile app enabling drivers to view assigned trips, update milestone statuses, and upload digital proof-of-delivery photos.",
      },
      {
        title: "AI Voice & WhatsApp Shipment Status Desk",
        description:
          "Automates inbound client tracking inquiries and dispatches proactive milestone notifications.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist"],
    exampleWorkflows: [
      {
        title: "Trip Dispatch-to-Delivery Billing Loop",
        steps: [
          "Dispatcher assigns vehicle and route inside web console; driver receives trip on Flutter app.",
          "Driver logs pickup and delivery milestones with digital POD upload.",
          "Client receives automated delivery confirmation and finance receives ready-to-bill trip summary.",
        ],
      },
    ],
    techStack: ["React", "Next.js", "FastAPI", "Flutter", "PostgreSQL", "MongoDB", "AWS"],
    faqs: [
      {
        question: "Can drivers use the mobile app when network connectivity is weak?",
        answer:
          "Yes. We design mobile workflows with local state caching so milestone updates queue safely and synchronize once connectivity resumes.",
      },
      {
        question: "Can the system track vehicle insurance, permit, and service renewals?",
        answer:
          "Yes. Automated compliance calendars alert fleet managers ahead of document expirations and scheduled maintenance intervals.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "24/7 AI Concierge, Reservation Handling & Guest Experience Automation",
    summary:
      "Never miss a booking inquiry. Automate room and table reservations, answer guest FAQs around the clock, and streamline front-desk operations.",
    heroImage: SITE_ASSETS.industries.hospitality.src,
    heroAlt: SITE_ASSETS.industries.hospitality.alt,
    iconName: "Hotel",
    introduction:
      "Hotels, resorts, serviced apartments, and restaurant groups receive booking and concierge inquiries across phone, website, and WhatsApp at all hours—especially during weekends and peak travel seasons when front desks are busiest.",
    challenges: [
      "Missed reservation calls during check-in rushes, evenings, and peak holiday periods.",
      "Repetitive guest questions regarding check-in times, amenities, directions, parking, and event spaces.",
      "Slow manual follow-up on banquet, corporate stay, and group booking inquiries.",
      "Fragmented guest requests across front desk, housekeeping, and concierge teams.",
    ],
    solutions: [
      {
        title: "24/7 AI Voice & WhatsApp Guest Concierge",
        description:
          "Answers reservation calls and messages instantly, shares room/facility details, captures group event leads, and transfers urgent guest calls to front desk.",
      },
      {
        title: "Direct Booking Web Platforms",
        description:
          "Fast, mobile-first hospitality websites designed to showcase properties clearly and drive direct reservation inquiries.",
      },
      {
        title: "Internal Guest Request & Operations Portal",
        description:
          "Route housekeeping, maintenance, and concierge tasks cleanly across staff roles.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist"],
    exampleWorkflows: [
      {
        title: "After-Hours Reservation & Event Inquiry Capture",
        steps: [
          "Guest calls at 10:30 PM inquiring about weekend room availability or banquet hosting.",
          "AI Receptionist answers property details, captures dates, guest count, and contact details.",
          "Booking summary is pushed to reservation desk CRM and instant WhatsApp confirmation is sent.",
        ],
      },
    ],
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI", "Twilio / SIP", "WhatsApp API", "PostgreSQL"],
    faqs: [
      {
        question: "Can the AI Receptionist handle both standard room inquiries and event/banquet leads?",
        answer:
          "Yes. It answers standard property FAQs immediately while capturing structured event requirements (dates, headcount, catering needs) for your events manager.",
      },
      {
        question: "Can urgent in-house guest calls be routed straight to the front desk?",
        answer:
          "Yes. Priority routing rules transfer urgent guest calls directly to on-duty reception extensions.",
      },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    tagline: "Secure Client Onboarding, Document Workflows & Advisory Operations Software",
    summary:
      "We build structured client portals, automated KYC/document collection workflows, and intelligent inquiry routing for financial advisors, NBFCs, and accounting firms.",
    heroImage: SITE_ASSETS.industries.finance.src,
    heroAlt: SITE_ASSETS.industries.finance.alt,
    iconName: "Landmark",
    introduction:
      "Financial advisory practices, lending teams, and accounting firms operate under strict accuracy, auditability, and client confidentiality requirements. Manual document chasing and fragmented client communication slow down onboarding and compliance.",
    challenges: [
      "Time-consuming manual follow-ups collecting KYC, tax, and financial documents from clients.",
      "Inbound consultation calls missed while advisors are in client reviews.",
      "Sensitive client records scattered across email threads and local folders without audit trails.",
      "Repetitive client inquiries regarding onboarding steps, required documents, and appointment scheduling.",
    ],
    solutions: [
      {
        title: "Secure Client Onboarding & Document Portals",
        description:
          "Role-gated web portals with structured document checklists, status tracking, encrypted storage, and complete activity audit logs.",
      },
      {
        title: "AI Consultation Receptionist & Lead Qualification",
        description:
          "Answers inbound advisory inquiries professionally, captures service requirements, and books consultations onto advisor calendars.",
      },
      {
        title: "Automated Document Classification & Reminder Workflows",
        description:
          "Automatically verifies uploaded document formats and sends polite status reminders for pending items.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist", "bizconnect"],
    exampleWorkflows: [
      {
        title: "Structured Client Onboarding & Document Checklist",
        steps: [
          "New client books consultation through AI Receptionist or web inquiry form.",
          "Client portal provisions a tailored document checklist with secure upload slots.",
          "Automated reminders track pending documents and notify advisor once file is complete.",
        ],
      },
    ],
    techStack: ["Python", "Django", "Next.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    faqs: [
      {
        question: "How do you protect sensitive financial and client documents?",
        answer:
          "We enforce role-based access control, encrypted transport (TLS), isolated cloud storage buckets, server-side validation, and audit logging on every file action.",
      },
      {
        question: "Does the AI give unauthorized investment or tax advice?",
        answer:
          "No. Guardrails restrict the AI strictly to administrative scheduling, service overviews, and document checklist guidance—routing advisory questions to licensed professionals.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    tagline: "Multi-Store Inventory Visibility, Billing Systems & Customer Engagement AI",
    summary:
      "Connect store billing, warehouse stock, supplier reorders, and WhatsApp customer inquiries in a unified retail operations architecture.",
    heroImage: SITE_ASSETS.industries.retail.src,
    heroAlt: SITE_ASSETS.industries.retail.alt,
    iconName: "Store",
    introduction:
      "Growing retail businesses struggle when store counters, warehouse stockrooms, and customer inquiry channels operate in isolation. Real-time stock visibility and fast customer communication are essential to prevent stockouts and retain repeat buyers.",
    challenges: [
      "Lack of real-time stock visibility across retail branches and central warehouses.",
      "Manual reconciliation of daily store sales, supplier bills, and batch/expiry dates.",
      "Unanswered customer phone and WhatsApp messages asking about product availability and store hours.",
      "Difficulty tracking repeat customer preferences and loyalty offers.",
    ],
    solutions: [
      {
        title: "Custom Retail ERP & Multi-Branch Inventory System",
        description:
          "Track SKU stock across locations, manage batch/expiry alerts, streamline billing, and generate daily sales analytics.",
      },
      {
        title: "AI Store Assistant on Phone & WhatsApp",
        description:
          "Answers store hours, location, and product availability questions automatically and captures bulk/custom order inquiries.",
      },
      {
        title: "Supplier & Wholesale Directory Integration",
        description:
          "Connect retail procurement with verified wholesale suppliers and distributors.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist", "bizconnect"],
    exampleWorkflows: [
      {
        title: "Multi-Branch Stock Transfer & Expiry Alerting",
        steps: [
          "Branch POS/billing updates SKU inventory levels in real time.",
          "System flags low-stock items or upcoming batch expiries on manager dashboard.",
          "Stock transfer or supplier reorder request triggers with one-click approval.",
        ],
      },
    ],
    techStack: ["Python", "Django", "React", "PostgreSQL", "MySQL", "WhatsApp API", "Docker"],
    faqs: [
      {
        question: "Can your retail system track batch numbers and product expiry dates?",
        answer:
          "Yes. We build batch-level inventory tracking with automated expiry alerts—ideal for pharmacy, FMCG, and specialty food retail.",
      },
      {
        question: "Can multiple retail branches operate under one central admin dashboard?",
        answer:
          "Yes. Multi-branch architectures give store managers branch-level access while providing owners consolidated cross-store visibility.",
      },
    ],
  },
  {
    slug: "startups",
    name: "Startups",
    tagline: "Rapid MVP Engineering, Multi-Tenant SaaS Architecture & Applied AI Products",
    summary:
      "We partner with founders to turn validated ideas into scalable, investor-ready software products—engineered cleanly from day one without throwaway prototype debt.",
    heroImage: SITE_ASSETS.industries.startups.src,
    heroAlt: SITE_ASSETS.industries.startups.alt,
    iconName: "Rocket",
    introduction:
      "Startups need speed without sacrificing architectural integrity. Rushing out fragile no-code hacks often forces an expensive complete rewrite just as early customers start onboarding. NAVCHETNAA AI builds lean, production-grade MVPs engineered to scale.",
    challenges: [
      "Translating a founder's product vision into a prioritized, realistic MVP scope without feature bloat.",
      "Choosing the right database, multi-tenancy, and AI architecture before customer traction scales.",
      "Lack of in-house full-stack and applied AI engineering bandwidth during early launch stages.",
      "Need for clean UI/UX, fast performance, and technical documentation for stakeholder demos.",
    ],
    solutions: [
      {
        title: "Full-Stack SaaS MVP Development",
        description:
          "End-to-end engineering with Next.js, React, FastAPI/Django, and PostgreSQL—complete with authentication, RBAC, and billing hooks.",
      },
      {
        title: "AI-Native Product Feature Engineering",
        description:
          "Embed custom LLM agents, semantic search, voice workflows, or document intelligence directly into your core product value proposition.",
      },
      {
        title: "Cross-Platform Mobile Companion Apps",
        description:
          "Launch iOS and Android apps simultaneously using Flutter connected to your unified backend API.",
      },
    ],
    relevantProductSlugs: ["navchetnaa-ai-receptionist", "collegeos", "bizconnect"],
    exampleWorkflows: [
      {
        title: "Focused 4-to-8 Week SaaS MVP Launch",
        steps: [
          "Scope core user roles, primary workflows, and data models in structured discovery.",
          "Design clean UI prototypes and engineer modular frontend + backend sprints.",
          "Deploy containerized MVP on AWS with monitoring and clean handover documentation.",
        ],
      },
    ],
    techStack: ["Next.js", "TypeScript", "React", "Python", "FastAPI", "Flutter", "PostgreSQL", "AWS", "Docker"],
    faqs: [
      {
        question: "How do you help startups prioritize MVP features?",
        answer:
          "We separate essential day-one user workflows from phase-two enhancements so you can launch quickly, gather real user feedback, and iterate without wasted spend.",
      },
      {
        question: "Can we transition the codebase to our own in-house engineering team later?",
        answer:
          "Yes. We write clean, strictly typed, well-documented modular code with standard Git workflows so future internal hires can onboard smoothly.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return INDUSTRIES_DATA.find((industry) => industry.slug === slug);
}