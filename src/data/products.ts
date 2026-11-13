import { ProductItem } from "@/types";
import { SITE_ASSETS } from "./assets";

export const PRODUCTS_DATA: ProductItem[] = [
  {
    slug: "navchetnaa-ai-receptionist",
    name: "NAVCHETNAA AI Receptionist",
    tagline: "AI-Powered Business Voice Communication, Call Intelligence & Appointment Platform",
    summary:
      "A configurable voice AI receptionist platform designed to answer inbound business calls 24/7, capture structured leads, summarize conversations, book appointments, sync with CRMs, and transfer calls to human staff.",
    heroImage: SITE_ASSETS.solutions["ai-receptionist"].src,
    heroAlt: SITE_ASSETS.solutions["ai-receptionist"].alt,
    statusLabel: "CONFIGURABLE VOICE AI PLATFORM",
    overview:
      "NAVCHETNAA AI Receptionist is engineered as a complete front-desk communication platform rather than a simple voice bot. Businesses can configure agent personas, upload knowledge bases, define call-routing rules, review searchable call histories and AI-generated conversation summaries, and synchronize captured leads directly with their CRM and calendar workflows.",
    problemsSolved: [
      "Missed inbound calls during peak business hours, lunch breaks, evenings, and holidays.",
      "Unstructured phone inquiries where caller details and requirements are lost before reaching sales or operations.",
      "Repetitive front-desk phone interruptions answering routine questions about timings, services, and locations.",
      "Lack of visibility into inbound call volume, caller intent patterns, and follow-up completion.",
    ],
    features: [
      {
        title: "24/7 AI Call Handling",
        description:
          "Answers inbound calls immediately with natural conversational turn-taking and brand-aligned voice configuration.",
      },
      {
        title: "Automated Lead Capture",
        description:
          "Extracts caller name, phone number, organization, inquiry category, and urgency into structured lead records.",
      },
      {
        title: "Searchable Call History",
        description:
          "Centralized call log storing timestamps, call duration, caller metadata, full transcripts, and outcome tags.",
      },
      {
        title: "AI Conversation Summaries",
        description:
          "Generates concise, bulleted post-call summaries so staff can review call context in seconds without listening to full recordings.",
      },
      {
        title: "Appointment Workflows",
        description:
          "Checks configured availability windows, schedules consultations or visits, and triggers confirmation notifications.",
      },
      {
        title: "CRM Integration",
        description:
          "Pushes captured leads, call summaries, and appointment records automatically into custom or third-party CRMs via webhooks and APIs.",
      },
      {
        title: "No-Code Agent Configuration",
        description:
          "Customize greeting scripts, business FAQs, operating hours, allowed topics, and escalation conditions from an admin console.",
      },
      {
        title: "Call Volume & Outcome Analytics",
        description:
          "Track call distribution by hour, resolution vs. transfer ratios, top caller questions, and lead capture rates.",
      },
      {
        title: "Warm Human Call Transfer",
        description:
          "Transfers live calls to designated human staff extensions when callers request human assistance or trigger priority rules.",
      },
    ],
    userRoles: [
      {
        role: "Account Administrator",
        permissions: "Configure phone lines, voice personas, knowledge documents, escalation rules, and CRM webhooks.",
      },
      {
        role: "Operations / Front-Desk Manager",
        permissions: "Monitor live call logs, review conversation summaries, manage appointment calendars, and assign follow-ups.",
      },
      {
        role: "Staff / Escalation Agent",
        permissions: "Receive transferred live calls along with immediate caller context and summary notes.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Configure Agent & Knowledge",
        description: "Set business hours, greeting style, service FAQs, booking rules, and human transfer numbers.",
      },
      {
        stepNumber: "02",
        title: "Connect Business Line",
        description: "Link a dedicated SIP/telephony number or enable call forwarding from your existing business line.",
      },
      {
        stepNumber: "03",
        title: "Automated Inbound Handling",
        description: "AI answers callers 24/7, resolves routine questions, books slots, or transfers urgent calls live.",
      },
      {
        stepNumber: "04",
        title: "Review Summaries & CRM Sync",
        description: "Inspect structured call summaries and analytics while leads flow automatically into your CRM.",
      },
    ],
    integrations: ["SIP / Twilio Telephony", "Google & Outlook Calendar", "Custom CRM / ERP", "WhatsApp Business API", "REST Webhooks"],
    benefits: [
      "Eliminate unanswered inbound calls across business hours and after-hours.",
      "Standardize lead capture and call documentation without manual front-desk typing.",
      "Reduce front-desk workload while preserving instant human escalation for high-priority callers.",
      "Gain structured visibility into caller questions and appointment conversion workflows.",
    ],
    faqs: [
      {
        question: "Can businesses customize what the AI Receptionist says and when it transfers calls?",
        answer:
          "Yes. Administrators configure the agent's greeting, approved knowledge base, qualification fields, and explicit escalation triggers for transferring calls to human staff.",
      },
      {
        question: "How are call summaries delivered to our team?",
        answer:
          "Conversation summaries and transcripts appear immediately inside the dashboard call history and can be pushed via webhook to your CRM, email, or WhatsApp notifications.",
      },
      {
        question: "Can the system handle appointment scheduling directly?",
        answer:
          "Yes. When connected to your calendar availability rules, the AI Receptionist can book, reschedule, or log appointment requests during the call.",
      },
    ],
  },
  {
    slug: "collegeos",
    name: "CollegeOS",
    tagline: "Configurable Institutional & Academic Management Platform for Modern Campuses",
    summary:
      "An end-to-end, role-based campus ERP supporting +2, +3, Undergraduate, Postgraduate, Diploma, ITI, B.Tech, M.Tech, and PhD institutions across 18 integrated academic, administrative, and IQAC/NAAC modules.",
    heroImage: SITE_ASSETS.portfolio["collegeos-institutional-management"].src,
    heroAlt: SITE_ASSETS.portfolio["collegeos-institutional-management"].alt,
    statusLabel: "CONFIGURABLE INSTITUTIONAL ERP",
    overview:
      "CollegeOS is engineered to unify academic governance, student lifecycle management, faculty workflows, campus administration, and accreditation documentation in a single modular platform. Designed for multi-program institutions—from +2 and +3 degree colleges to Diploma, ITI, B.Tech, M.Tech, and PhD institutes—CollegeOS adapts to each institution's structure and role hierarchy.",
    problemsSolved: [
      "Fragmented student, attendance, examination, and fee records scattered across isolated registers and spreadsheets.",
      "Time-consuming manual compilation of academic data during IQAC reviews and NAAC accreditation cycles.",
      "Lack of real-time academic visibility for Principals, Vice Principals, HODs, faculty, and students.",
      "Administrative bottlenecks across admissions, timetable scheduling, hostel allocation, and fee reconciliation.",
    ],
    supportedInstitutions: [
      "+2 (Higher Secondary)",
      "+3 (Degree Programs)",
      "Undergraduate (UG)",
      "Postgraduate (PG)",
      "Diploma Institutes",
      "ITI (Industrial Training Institutes)",
      "B.Tech",
      "M.Tech",
      "PhD & Research Programs",
    ],
    modules: [
      "Admissions",
      "Student Management",
      "Faculty Management",
      "Departments",
      "Courses",
      "Attendance",
      "Timetable",
      "Examinations",
      "Results",
      "Fees",
      "Library",
      "Hostel",
      "Inventory",
      "Campus Security",
      "Events",
      "IQAC and NAAC Support",
      "Communication",
      "AI Assistance",
    ],
    features: [
      {
        title: "Multi-Program Academic Engine",
        description:
          "Supports semester, annual, credit-based, and trade-based curricula across +2, +3, UG, PG, Diploma, ITI, B.Tech, M.Tech, and PhD streams.",
      },
      {
        title: "End-to-End Student & Faculty Lifecycle",
        description:
          "Centralized records from admissions and course enrollment through attendance, internal assessments, exams, and results.",
      },
      {
        title: "IQAC & NAAC Documentation Support",
        description:
          "Structured academic records, department activity logs, and criterion-aligned reporting to simplify quality assurance audits.",
      },
      {
        title: "Campus Operations & Resource Modules",
        description:
          "Integrated management for fees, library circulation, hostel rooms, institutional inventory, campus security logs, and events.",
      },
      {
        title: "Institutional Communication & AI Assistance",
        description:
          "Targeted notices across departments and roles paired with AI assistance for academic queries and administrative drafting.",
      },
      {
        title: "7-Tier Role-Based Access Governance",
        description:
          "Dedicated portals and granular permissions tailored to institutional leadership, department heads, teaching staff, and students.",
      },
    ],
    userRoles: [
      {
        role: "Super Admin",
        permissions: "Multi-campus configuration, academic year setup, module activation, and system-wide security controls.",
      },
      {
        role: "Principal",
        permissions: "Institution-wide academic and administrative oversight, IQAC/NAAC readiness, and executive approvals.",
      },
      {
        role: "Vice Principal",
        permissions: "Academic operations coordination, timetable oversight, examination governance, and faculty monitoring.",
      },
      {
        role: "Administrator",
        permissions: "Admissions processing, fee administration, hostel/library/inventory operations, and campus security records.",
      },
      {
        role: "HOD (Head of Department)",
        permissions: "Departmental course allocation, faculty workload assignment, attendance review, and internal exam verification.",
      },
      {
        role: "Faculty",
        permissions: "Daily attendance marking, timetable access, internal marks entry, study material sharing, and student communication.",
      },
      {
        role: "Student",
        permissions: "Personal attendance tracking, class timetable, exam schedules, published results, fee status, and campus notices.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Institutional Structure Configuration",
        description: "Configure programs (+2 to PhD), departments, academic sessions, and active modules.",
      },
      {
        stepNumber: "02",
        title: "Role & User Onboarding",
        description: "Provision Super Admin, Principal, Vice Principal, Administrator, HOD, Faculty, and Student accounts.",
      },
      {
        stepNumber: "03",
        title: "Daily Academic & Campus Execution",
        description: "Operate admissions, attendance, timetables, examinations, fees, and campus facilities in one unified system.",
      },
      {
        stepNumber: "04",
        title: "Governance & Accreditation Reporting",
        description: "Generate structured academic analytics and IQAC/NAAC supporting documentation cleanly.",
      },
    ],
    integrations: ["Payment Gateways (Fee Collection)", "SMS & WhatsApp Notice Gateways", "Biometric / RFID Attendance Hooks", "Excel / CSV Bulk Data Importers", "REST APIs"],
    benefits: [
      "Unify 18 academic and administrative modules under a single configurable institutional platform.",
      "Enforce clear accountability across 7 distinct institutional user roles.",
      "Reduce administrative overhead during examinations, fee collection, and IQAC/NAAC documentation.",
      "Adapt seamlessly to single-stream colleges or multi-disciplinary universities.",
    ],
    faqs: [
      {
        question: "Can an institution enable only the modules it currently needs?",
        answer:
          "Yes. CollegeOS is modular by design—institutions can activate core academic modules first and enable hostel, library, inventory, or campus security modules as needed.",
      },
      {
        question: "Does CollegeOS support both traditional degree programs and technical/vocational streams?",
        answer:
          "Yes. It is architected to support +2, +3, Undergraduate, Postgraduate, Diploma, ITI, B.Tech, M.Tech, and PhD academic structures.",
      },
      {
        question: "How does CollegeOS assist with IQAC and NAAC processes?",
        answer:
          "By maintaining structured digital records of courses, faculty activities, student progression, events, and assessments throughout the academic year, CollegeOS simplifies data compilation for IQAC and NAAC documentation.",
      },
    ],
  },
  {
    slug: "bizconnect",
    name: "BizConnect",
    tagline: "B2B Business Networking, Company Discovery & Industry Directory Platform",
    summary:
      "A structured digital networking and business discovery platform featuring business profiles, company pages, industry directories, professional posts, engagement tools, configurable messaging, and subscription capabilities.",
    heroImage: SITE_ASSETS.portfolio["business-crm"].src,
    heroAlt: SITE_ASSETS.portfolio["business-crm"].alt,
    statusLabel: "CONFIGURABLE B2B NETWORKING PLATFORM",
    overview:
      "BizConnect is designed to help businesses, service providers, suppliers, and founders establish structured digital identities, showcase offerings, discover verified industry peers, and collaborate within organized sector directories—without the noise of generic consumer social networks.",
    problemsSolved: [
      "Small and mid-sized businesses struggling to maintain discoverable, structured B2B profiles across fragmented directories.",
      "Difficulty finding verified vendors, partners, and service providers filtered by industry, capability, and region.",
      "Unfocused consumer social feeds where genuine business updates get buried under irrelevant noise.",
      "Lack of configurable, permission-controlled B2B outreach and directory tiering.",
    ],
    features: [
      {
        title: "Structured Business Profiles",
        description:
          "Individual founder and executive profiles linked cleanly to verified organizational roles and capabilities.",
      },
      {
        title: "Dedicated Company Pages",
        description:
          "Showcase company overview, core services, product catalogs, sector tags, and official contact channels.",
      },
      {
        title: "Business Updates & Posts",
        description:
          "Publish announcements, capability launches, partnership requests, and industry insights to relevant business networks.",
      },
      {
        title: "Curated Industry Directories",
        description:
          "Categorized business directories enabling structured browsing by sector, specialization, and business model.",
      },
      {
        title: "Business Discovery & Search",
        description:
          "Filter and discover potential B2B partners, suppliers, and service providers with structured search criteria.",
      },
      {
        title: "Professional Networking & Engagement",
        description:
          "Build business connections, follow company pages, and engage constructively on industry updates.",
      },
      {
        title: "Configurable Direct Messaging",
        description:
          "Direct B2B communication channels where enabled by workspace policies and connection permissions.",
      },
      {
        title: "Configurable Subscription Features",
        description:
          "Flexible membership and directory listing tiers supporting enhanced visibility and organizational tools.",
      },
    ],
    userRoles: [
      {
        role: "Platform Administrator",
        permissions: "Manage industry categories, verify company pages, moderate directory standards, and configure subscription tiers.",
      },
      {
        role: "Company Page Owner",
        permissions: "Manage organizational profile, publish company updates, assign team representatives, and configure inquiry channels.",
      },
      {
        role: "Business Member",
        permissions: "Maintain personal business profile, discover companies in directories, engage with posts, and connect where enabled.",
      },
    ],
    workflow: [
      {
        stepNumber: "01",
        title: "Create Business & Company Profile",
        description: "Register individual business credentials and publish a structured company page with sector tags.",
      },
      {
        stepNumber: "02",
        title: "List in Industry Directories",
        description: "Categorize offerings so prospective B2B buyers and partners can discover your organization.",
      },
      {
        stepNumber: "03",
        title: "Publish Updates & Network",
        description: "Share company milestones and connect with relevant businesses across complementary sectors.",
      },
      {
        stepNumber: "04",
        title: "Engage & Collaborate",
        description: "Initiate structured business conversations through enabled messaging and inquiry workflows.",
      },
    ],
    integrations: ["Subscription Billing Gateways", "Email & Notification Services", "Search & Directory Indexing", "REST APIs"],
    benefits: [
      "Give businesses a clean, structured B2B presence focused on real commercial discovery.",
      "Organize companies into searchable industry directories rather than noisy algorithmic feeds.",
      "Provide platform operators with configurable messaging controls and subscription monetization.",
      "Support modular deployment as a standalone B2B network or industry-specific association portal.",
    ],
    faqs: [
      {
        question: "How is BizConnect different from consumer social media platforms?",
        answer:
          "BizConnect is built specifically around structured company pages, searchable industry directories, and purposeful B2B discovery rather than entertainment algorithms.",
      },
      {
        question: "Is direct messaging enabled for all users automatically?",
        answer:
          "Messaging is configurable—platform administrators and company page owners can control where direct messaging is enabled based on connection rules or subscription tiers.",
      },
      {
        question: "Can BizConnect be deployed or customized for a specific industry association or business community?",
        answer:
          "Yes. BizConnect's directory taxonomy, verification workflows, and subscription tiers are architected to be configurable for broader B2B ecosystems or dedicated sector communities.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS_DATA.find((product) => product.slug === slug);
}