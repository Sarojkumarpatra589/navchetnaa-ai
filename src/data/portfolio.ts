import { PortfolioItem } from "@/types";
import { SITE_ASSETS } from "./assets";

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    slug: "ai-receptionist-crm",
    title: "AI Receptionist & CRM Synchronization",
    classification: "Demonstration System",
    category: "Applied Voice AI & Revenue Automation",
    summary:
      "An end-to-end conversational voice receptionist architecture engineered to answer inbound business calls 24/7, extract structured caller intent, schedule appointments, and sync records directly into a CRM pipeline.",
    heroImage: SITE_ASSETS.portfolio["ai-receptionist-crm"].src,
    heroAlt: SITE_ASSETS.portfolio["ai-receptionist-crm"].alt,
    overview:
      "This demonstration system showcases how low-latency voice intelligence integrates directly with relational CRM pipelines. Instead of leaving phone inquiries on unlogged sticky notes or voicemails, every call is answered immediately, grounded in verified business FAQs, summarized by AI, and converted into a structured CRM lead with automated follow-up tasks.",
    objectives: [
      "Eliminate unanswered inbound calls during peak hours and after-hours without expanding front-desk headcount.",
      "Capture standardized caller details (name, contact, service interest, urgency) automatically during live conversation.",
      "Synchronize call transcripts, AI-generated summaries, and calendar bookings directly into a CRM database.",
      "Provide seamless live call transfer to human staff whenever priority or complex escalation rules trigger.",
    ],
    challenges: [
      "Maintaining natural conversational turn-taking and low response latency over live telephony lines.",
      "Preventing hallucinated answers by grounding voice responses strictly in approved business knowledge documents.",
      "Deduplicating callers who inquire across both phone calls and web forms so CRM timelines stay clean.",
    ],
    proposedSolution:
      "We architected a FastAPI webhook orchestration layer bridging SIP/Twilio telephony, real-time speech-to-intent processing, a pgvector knowledge base, and a PostgreSQL CRM schema. Post-call pipelines generate structured JSON summaries, verify appointment slots, and trigger instant staff notifications.",
    features: [
      {
        title: "24/7 Knowledge-Grounded Voice Handling",
        description: "Answers service, pricing guideline, location, and timing inquiries accurately from verified company documents.",
      },
      {
        title: "Automated Post-Call Structured Summaries",
        description: "Extracts caller intent, key questions, and next steps into clean CRM notes immediately after hangup.",
      },
      {
        title: "Live Calendar Slot Booking",
        description: "Checks real-time availability windows and books consultation appointments during the call.",
      },
      {
        title: "Warm Human Escalation Routing",
        description: "Transfers urgent or complex calls directly to designated staff extensions with full caller context.",
      },
    ],
    techStack: ["Python", "FastAPI", "OpenAI", "Twilio / SIP", "PostgreSQL", "pgvector", "Next.js"],
    workflow: [
      {
        stepNumber: "01",
        title: "Inbound Telephony Handshake",
        description: "Caller dials business number; SIP bridge connects stream to the conversational voice agent.",
      },
      {
        stepNumber: "02",
        title: "Intent & Knowledge Retrieval",
        description: "Agent queries indexed business policies and captures structured qualification fields.",
      },
      {
        stepNumber: "03",
        title: "Calendar & Escalation Execution",
        description: "Books appointment slot or executes live warm transfer to human specialist if requested.",
      },
      {
        stepNumber: "04",
        title: "CRM Record & Alert Dispatch",
        description: "Logs full transcript, summary, and deal stage in PostgreSQL and sends WhatsApp/email alerts.",
      },
    ],
  },
  {
    slug: "collegeos-institutional-management",
    title: "CollegeOS Institutional Management",
    classification: "Platform Blueprint",
    category: "Enterprise Education ERP",
    summary:
      "A modular, multi-program campus management platform blueprint supporting +2, +3, UG, PG, Diploma, ITI, B.Tech, M.Tech, and PhD institutions across 18 academic and administrative modules.",
    heroImage: SITE_ASSETS.portfolio["collegeos-institutional-management"].src,
    heroAlt: SITE_ASSETS.portfolio["collegeos-institutional-management"].alt,
    overview:
      "CollegeOS was architected to solve the operational fragmentation faced by multi-stream colleges and technical institutes. Rather than managing admissions, attendance, timetables, examinations, fees, hostel, library, and accreditation records across disconnected spreadsheets, CollegeOS unifies all 18 operational modules under 7 granular role-based portals.",
    objectives: [
      "Support diverse academic structures (+2, +3, UG, PG, Diploma, ITI, B.Tech, M.Tech, PhD) within a single configurable schema.",
      "Enforce strict role-based governance across Super Admin, Principal, Vice Principal, Administrator, HOD, Faculty, and Student portals.",
      "Streamline daily academic workflows including attendance marking, timetable management, internal assessments, and fee tracking.",
      "Maintain structured academic records throughout the year to simplify IQAC reviews and NAAC accreditation documentation.",
    ],
    challenges: [
      "Designing flexible curriculum and grading rules capable of handling both semester-based engineering degrees and annual/trade courses.",
      "Ensuring fast, intuitive daily attendance and marks entry for faculty across mobile and desktop devices.",
      "Maintaining strict data isolation and approval hierarchies between departments, administration, and institutional leadership.",
    ],
    proposedSolution:
      "We engineered a multi-module architecture powered by Next.js, Django, and PostgreSQL with fine-grained Role-Based Access Control (RBAC). Institutions can toggle modules independently—covering admissions, academics, campus facilities (hostel, library, inventory, security), communication, and AI assistance.",
    features: [
      {
        title: "18 Integrated Campus Modules",
        description: "Covers Admissions, Students, Faculty, Departments, Courses, Attendance, Timetable, Exams, Results, Fees, Library, Hostel, Inventory, Security, Events, IQAC/NAAC, Communication, and AI Assistance.",
      },
      {
        title: "7 Role-Specific Governance Portals",
        description: "Tailored dashboards and permission boundaries for Super Admin, Principal, Vice Principal, Administrator, HOD, Faculty, and Students.",
      },
      {
        title: "IQAC & NAAC Audit Readiness",
        description: "Structured criterion-aligned data collection across faculty activities, student progression, and institutional events.",
      },
      {
        title: "Institutional AI Assistance",
        description: "Built-in assistant helping administrators draft notices and helping students query schedules, policies, and deadlines.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "Django", "PostgreSQL", "Redis", "Docker"],
    workflow: [
      {
        stepNumber: "01",
        title: "Program & Department Setup",
        description: "Configure academic streams (+2 to PhD), departments, subjects, and active ERP modules.",
      },
      {
        stepNumber: "02",
        title: "Role & Cohort Provisioning",
        description: "Import student and faculty cohorts and assign 7-tier role permissions.",
      },
      {
        stepNumber: "03",
        title: "Daily Academic Operations",
        description: "Execute attendance, timetable scheduling, fee collection, and examination evaluations.",
      },
      {
        stepNumber: "04",
        title: "Executive & NAAC Reporting",
        description: "Generate institutional analytics and accreditation-ready academic summaries.",
      },
    ],
  },
  {
    slug: "fleet-transport-management",
    title: "Fleet & Transport Management",
    classification: "Concept Architecture",
    category: "Logistics & Supply Chain Software",
    summary:
      "A centralized fleet dispatch, route milestone tracking, fuel/maintenance logging, and automated client notification architecture for commercial transport operators.",
    heroImage: SITE_ASSETS.portfolio["fleet-transport-management"].src,
    heroAlt: SITE_ASSETS.portfolio["fleet-transport-management"].alt,
    overview:
      "This concept architecture addresses the operational visibility gaps common in regional and multi-route transport businesses. By connecting a web dispatch console with a cross-platform Flutter driver app and automated client notifications, fleet managers gain real-time visibility from trip assignment to proof-of-delivery billing.",
    objectives: [
      "Centralize vehicle availability, driver assignments, and active route schedules on one dispatch board.",
      "Capture digital proof-of-delivery (POD), odometer readings, and fuel/expense receipts directly from drivers.",
      "Automate compliance alerts for vehicle insurance, fitness certificates, permits, and preventive maintenance.",
      "Reduce inbound client tracking phone calls through automated WhatsApp/SMS milestone notifications.",
    ],
    challenges: [
      "Drivers operating across highways with intermittent mobile data connectivity.",
      "Reconciling trip advances, fuel bills, and toll receipts accurately before generating client invoices.",
      "Preventing vehicle downtime caused by missed preventive service intervals or expired permits.",
    ],
    proposedSolution:
      "We designed a decoupled FastAPI backend paired with a React dispatch dashboard and an offline-resilient Flutter driver mobile application. Trip events trigger background Celery workers that update client shipment statuses and compile ready-to-bill trip ledgers.",
    features: [
      {
        title: "Visual Dispatch & Vehicle Allocation Board",
        description: "Assign vehicles and drivers to routes while checking real-time vehicle availability and maintenance locks.",
      },
      {
        title: "Offline-Resilient Driver Mobile App",
        description: "Allows drivers to log pickup, transit, and delivery milestones with photo POD capture even in low-signal zones.",
      },
      {
        title: "Fuel, Expense & Trip Ledger Reconciliation",
        description: "Tracks per-trip fuel consumption, advances, and route expenses for accurate trip profitability visibility.",
      },
      {
        title: "Automated Compliance & Service Alerts",
        description: "Proactive alerts ahead of permit renewals, insurance expirations, and odometer-based servicing.",
      },
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI", "Flutter", "PostgreSQL", "MongoDB", "AWS"],
    workflow: [
      {
        stepNumber: "01",
        title: "Trip & Vehicle Assignment",
        description: "Dispatcher creates shipment order and assigns vehicle and driver from live fleet board.",
      },
      {
        stepNumber: "02",
        title: "Mobile Milestone Execution",
        description: "Driver logs pickup, transit checkpoints, and fuel entries via Flutter mobile interface.",
      },
      {
        stepNumber: "03",
        title: "Digital POD & Client Notification",
        description: "Delivery confirmation and signed POD photo trigger automated client status updates.",
      },
      {
        stepNumber: "04",
        title: "Trip Closure & Billing Export",
        description: "Finance reviews reconciled trip expenses and generates clean client invoices.",
      },
    ],
  },
  {
    slug: "business-crm",
    title: "Business CRM & Pipeline Automation",
    classification: "Demonstration System",
    category: "Custom CRM & Sales Operations",
    summary:
      "A tailored B2B and service-business CRM architecture unifying omnichannel lead capture, visual pipeline stages, automated follow-up reminders, and proposal tracking.",
    heroImage: SITE_ASSETS.portfolio["business-crm"].src,
    heroAlt: SITE_ASSETS.portfolio["business-crm"].alt,
    overview:
      "Many growing service companies outgrow spreadsheets but find generic enterprise CRMs bloated and expensive. This demonstration system illustrates a focused, fast Business CRM built to capture leads automatically from website forms, WhatsApp, and phone calls—enforcing disciplined follow-ups from first inquiry to closed deal.",
    objectives: [
      "Unify inbound inquiries from web forms, WhatsApp, and voice receptionists into one searchable contact database.",
      "Give sales managers clear stage-by-stage visibility across active deals, pending proposals, and follow-up tasks.",
      "Eliminate forgotten follow-ups using automated SLA reminders and stale-deal alerts.",
      "Provide structured CSV/Excel export and role-based territory permissions for growing sales teams.",
    ],
    challenges: [
      "Preventing duplicate contact entries when prospects reach out across multiple channels.",
      "Keeping the interface fast and intuitive so sales reps update deals in seconds rather than avoiding the tool.",
      "Supporting custom service categories, budget tiers, and regional team assignments.",
    ],
    proposedSolution:
      "We built a modular Next.js and FastAPI CRM backed by PostgreSQL with normalized phone/email deduplication, customizable pipeline stages, chronological activity timelines, and webhook endpoints for instant lead ingestion.",
    features: [
      {
        title: "Omnichannel Lead Ingestion",
        description: "Captures leads automatically from website contact forms, AI Receptionist summaries, and WhatsApp inquiries.",
      },
      {
        title: "Customizable Visual Deal Pipeline",
        description: "Track deals across tailored stages (New Inquiry, Qualified, Discovery Scheduled, Proposal Sent, Won/Lost).",
      },
      {
        title: "Automated Follow-Up Task Engine",
        description: "Schedules next-action reminders automatically and flags overdue leads for manager review.",
      },
      {
        title: "Role-Based Access & Clean Data Exports",
        description: "Isolates rep territories while providing leadership consolidated pipeline analytics and CSV exports.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    workflow: [
      {
        stepNumber: "01",
        title: "Automated Lead Capture",
        description: "Inbound inquiry enters via API webhook, deduplicates against existing contacts, and assigns owner.",
      },
      {
        stepNumber: "02",
        title: "Qualification & Activity Logging",
        description: "AI or sales rep logs discovery notes, requirements, and estimated project scope.",
      },
      {
        stepNumber: "03",
        title: "Proposal & Automated Reminders",
        description: "Deal moves to proposal stage with scheduled follow-up reminders until decision.",
      },
      {
        stepNumber: "04",
        title: "Conversion & Handover",
        description: "Closed deals transition cleanly into project delivery onboarding.",
      },
    ],
  },
  {
    slug: "custom-business-software",
    title: "Custom Business Operations Software",
    classification: "Concept Architecture",
    category: "Bespoke Internal ERP & Workflow Portal",
    summary:
      "A modular internal operations platform blueprint replacing fragmented spreadsheets with role-based approvals, inventory/billing tracking, and automated executive reporting.",
    heroImage: SITE_ASSETS.portfolio["custom-business-software"].src,
    heroAlt: SITE_ASSETS.portfolio["custom-business-software"].alt,
    overview:
      "When an organization's competitive advantage lies in its specialized operational workflow, off-the-shelf software forces costly compromises. This concept architecture demonstrates how NAVCHETNAA AI designs custom internal business software—combining clean relational data models, multi-step approval workflows, and automated daily reporting.",
    objectives: [
      "Replace error-prone shared spreadsheets with a single source of truth accessible via secure web browsers.",
      "Enforce multi-level approval workflows for procurement, discounts, expenses, and operational sign-offs.",
      "Provide real-time operational dashboards tailored to executives, department managers, and field staff.",
      "Expose clean REST APIs for seamless synchronization with accounting and external partner tools.",
    ],
    challenges: [
      "Translating complex, informal spreadsheet formulas and manual approval habits into clean database constraints.",
      "Designing an intuitive UI that non-technical staff can adopt immediately with minimal training.",
      "Ensuring reliable audit trails for every record creation, edit, and approval action.",
    ],
    proposedSolution:
      "We structured a Django and React full-stack architecture backed by PostgreSQL, featuring granular permission groups, immutable audit logs, automated PDF document generation, and scheduled background digest reports.",
    features: [
      {
        title: "Configurable Multi-Step Approval Engine",
        description: "Routes requests automatically across supervisors, finance, and leadership with full timestamped audit trails.",
      },
      {
        title: "Centralized Operations & Resource Tracking",
        description: "Unifies orders, stock movements, vendor records, and task assignments in one searchable interface.",
      },
      {
        title: "Automated PDF & Report Generation",
        description: "Generates branded invoices, work orders, and daily operational summaries with one click.",
      },
      {
        title: "Extensible REST API Architecture",
        description: "Ready to connect with mobile companion apps, AI assistants, and accounting systems.",
      },
    ],
    techStack: ["Python", "Django", "React", "TypeScript", "PostgreSQL", "Celery", "Nginx", "AWS"],
    workflow: [
      {
        stepNumber: "01",
        title: "Spreadsheet & Process Audit",
        description: "Analyze existing sheets, forms, and approval bottlenecks to define normalized data entities.",
      },
      {
        stepNumber: "02",
        title: "Role & Workflow Modeling",
        description: "Configure user roles, validation rules, and automated notification triggers.",
      },
      {
        stepNumber: "03",
        title: "Historical Data Migration",
        description: "Clean and import existing operational records into PostgreSQL with full integrity checks.",
      },
      {
        stepNumber: "04",
        title: "Production Rollout & Iteration",
        description: "Deploy on containerized cloud infrastructure and expand modules based on team feedback.",
      },
    ],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_DATA.find((item) => item.slug === slug);
}