import { AISolutionItem } from "@/types";
import { SITE_ASSETS } from "./assets";

export const AI_SOLUTIONS_DATA: AISolutionItem[] = [
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    tagline: "24/7 Conversational Inbound Call Answering, Appointment Scheduling & Lead Routing",
    summary:
      "An intelligent voice front desk that answers every inbound call immediately, understands caller intent, books appointments, logs structured summaries, and transfers urgent calls to human staff.",
    heroImage: SITE_ASSETS.solutions["ai-receptionist"].src,
    heroAlt: SITE_ASSETS.solutions["ai-receptionist"].alt,
    iconName: "PhoneIncoming",
    problem:
      "Businesses lose qualified inquiries every day when phone lines are busy, staff are assisting in-person clients, or prospects call outside office hours. Voicemails rarely convert, and rigid keypad phone menus frustrate callers.",
    solution:
      "NAVCHETNAA AI deploys a low-latency conversational AI Receptionist configured with your company knowledge base, scheduling rules, and escalation policies—answering calls naturally 24/7 and syncing structured caller records straight into your CRM.",
    howItWorks: [
      {
        step: "01",
        title: "Instant Call Pickup",
        description:
          "Inbound calls are answered within a second using a natural, brand-configured voice persona with zero hold music.",
      },
      {
        step: "02",
        title: "Intent & Question Resolution",
        description:
          "The agent answers common inquiries regarding services, locations, timings, and processes grounded in your verified business documentation.",
      },
      {
        step: "03",
        title: "Booking or Lead Qualification",
        description:
          "Captures caller contact details, checks calendar availability, books appointments, or logs a structured callback request.",
      },
      {
        step: "04",
        title: "CRM Sync & Live Escalation",
        description:
          "Pushes call transcript, summary, and intent tags to your CRM—or transfers live urgent calls directly to human staff.",
      },
    ],
    features: [
      {
        title: "Concurrent Multi-Call Handling",
        description: "Answer multiple inbound callers simultaneously without busy signals or missed opportunities.",
      },
      {
        title: "Structured Call Summaries & Transcripts",
        description: "Every conversation produces a clean summary with caller name, phone number, topic, and action status.",
      },
      {
        title: "Real-Time Calendar Scheduling",
        description: "Books, reschedules, or cancels appointments directly against your team's live availability.",
      },
      {
        title: "Rule-Based Human Call Transfer",
        description: "Escalates VIP callers, emergencies, or complex requests to designated staff extensions immediately.",
      },
    ],
    workflowNodes: [
      { id: "n1", label: "Inbound Call", detail: "PSTN / SIP / Twilio Line" },
      { id: "n2", label: "Voice AI Engine", detail: "Speech-to-Intent + Knowledge RAG" },
      { id: "n3", label: "Action Router", detail: "Book Slot / Capture Lead / Transfer" },
      { id: "n4", label: "CRM & Alerts", detail: "Structured Record + WhatsApp/Email" },
    ],
    integrations: ["Twilio / SIP Telephony", "Google Calendar", "Custom CRM / ERP", "WhatsApp Business API", "Webhooks & REST APIs"],
    useCases: [
      {
        industry: "Healthcare & Clinics",
        application: "24/7 patient appointment scheduling, consultation hours inquiries, and urgent triage routing.",
      },
      {
        industry: "Real Estate Agencies",
        application: "Capture property buyer inquiries immediately, qualify budget and location preferences, and schedule site visits.",
      },
      {
        industry: "Service & Consulting Firms",
        application: "Ensure every prospective client call is answered professionally while specialists are in sessions.",
      },
    ],
    faqs: [
      {
        question: "Can callers interrupt the AI Receptionist naturally mid-sentence?",
        answer:
          "Yes. Our voice pipeline supports full-duplex turn detection so callers can speak naturally, ask follow-up questions, or correct details without waiting for robotic prompts.",
      },
      {
        question: "How quickly can an AI Receptionist be configured for our business?",
        answer:
          "Standard deployments grounded in your business FAQs, call routing rules, and lead capture webhooks can be configured and tested within 1 to 2 weeks.",
      },
      {
        question: "Can we keep our existing business phone number?",
        answer:
          "Yes. You can forward calls from your existing number to the AI Receptionist full-time, after hours, or whenever front-desk lines are busy.",
      },
    ],
    relatedServiceSlugs: ["ai-voice-receptionist", "ai-development-automation", "crm-erp-development"],
  },
  {
    slug: "ai-sales-agents",
    title: "AI Sales Agents",
    tagline: "Autonomous Lead Qualification, Instant Follow-Up & Meeting Scheduling",
    summary:
      "Engage inbound prospects within seconds across web, WhatsApp, and email—qualifying requirements, answering product questions, and booking sales calls automatically.",
    heroImage: SITE_ASSETS.solutions["ai-sales-agents"].src,
    heroAlt: SITE_ASSETS.solutions["ai-sales-agents"].alt,
    iconName: "TrendingUp",
    problem:
      "Lead conversion drops dramatically when inbound inquiries wait hours or days for a first response. Sales teams spend valuable selling hours manually chasing unqualified leads and asking repetitive discovery questions.",
    solution:
      "We build intelligent AI Sales Agents that respond immediately to new inquiries, ask structured qualification questions tailored to your offering, share verified product details, and schedule qualified prospects directly onto your sales calendar.",
    howItWorks: [
      {
        step: "01",
        title: "Instant Lead Trigger",
        description: "Activated automatically whenever a prospect submits a web form, messages on WhatsApp, or requests a quote.",
      },
      {
        step: "02",
        title: "Conversational Qualification",
        description: "Asks targeted discovery questions regarding project scope, timeline, company size, and requirements.",
      },
      {
        step: "03",
        title: "Knowledge-Grounded Answers",
        description: "Addresses technical or commercial questions accurately using your approved brochures and service specifications.",
      },
      {
        step: "04",
        title: "Calendar Handoff & CRM Scoring",
        description: "Books discovery meetings for qualified prospects and logs full qualification notes inside your CRM pipeline.",
      },
    ],
    features: [
      {
        title: "Sub-Minute Speed-to-Lead Response",
        description: "Engages every prospect while interest is highest, 24 hours a day across time zones.",
      },
      {
        title: "Custom Qualification Playbooks",
        description: "Follows your exact BANT/MEDDIC or custom discovery criteria without skipping key fields.",
      },
      {
        title: "Automated Calendar Booking",
        description: "Shares available consultation slots and confirms calendar invites automatically.",
      },
      {
        title: "Structured CRM Pipeline Updates",
        description: "Creates deals, assigns lead scores, and alerts human account executives when a lead is ready.",
      },
    ],
    workflowNodes: [
      { id: "n1", label: "New Lead Event", detail: "Web Form / WhatsApp / Inbound Email" },
      { id: "n2", label: "AI Sales Agent", detail: "Discovery Script + Catalog RAG" },
      { id: "n3", label: "Lead Scoring", detail: "Budget, Timeline & Fit Validation" },
      { id: "n4", label: "Sales Handoff", detail: "Calendar Invite + CRM Deal Stage" },
    ],
    integrations: ["WhatsApp Business API", "Website Chat", "Email SMTP/API", "Custom CRM", "Google / Outlook Calendar"],
    useCases: [
      {
        industry: "B2B Software & Agencies",
        application: "Qualify inbound project inquiries, gather scope requirements, and book discovery calls automatically.",
      },
      {
        industry: "Education & Training Institutes",
        application: "Engage prospective students immediately, share course eligibility details, and schedule counseling sessions.",
      },
      {
        industry: "Real Estate & High-Ticket Retail",
        application: "Follow up on portal inquiries instantly and schedule showroom or property visits.",
      },
    ],
    faqs: [
      {
        question: "Does the AI Sales Agent negotiate unauthorized discounts or make false promises?",
        answer:
          "No. We enforce strict guardrail boundaries so the agent only quotes approved pricing tiers and escalates custom commercial negotiations to human sales reps.",
      },
      {
        question: "Can human sales reps take over a conversation at any time?",
        answer:
          "Yes. Your sales team can monitor active threads and step into the conversation seamlessly whenever a high-value prospect engages.",
      },
      {
        question: "Which channels can the AI Sales Agent operate on?",
        answer:
          "We deploy AI Sales Agents across website chat widgets, WhatsApp Business messaging, email follow-up sequences, and inbound voice lines.",
      },
    ],
    relatedServiceSlugs: ["ai-development-automation", "crm-erp-development", "website-development"],
  },
  {
slug: "ai-customer-support",
    title: "AI Customer Support",
    tagline: "Accurate, Knowledge-Grounded 24/7 Support Resolution with Smart Escalation",
    summary:
      "Resolve routine customer questions, order status lookups, and troubleshooting requests instantly using your verified documentation—freeing human agents for complex cases.",
    heroImage: SITE_ASSETS.solutions["ai-customer-support"].src,
    heroAlt: SITE_ASSETS.solutions["ai-customer-support"].alt,
    iconName: "LifeBuoy",
    problem:
      "Support teams get buried under repetitive Tier-1 tickets—password resets, policy questions, order updates, and basic troubleshooting—leading to slow response times and agent burnout.",
    solution:
      "NAVCHETNAA AI engineers multi-channel AI Customer Support assistants connected to your help center, SOPs, and order APIs—resolving routine inquiries accurately and escalating edge cases with full context.",
    howItWorks: [
      {
        step: "01",
        title: "Customer Inquiry Intake",
        description: "Receives support requests across web chat, WhatsApp, or email support queues.",
      },
      {
        step: "02",
        title: "Verified Knowledge Retrieval",
        description: "Searches indexed product manuals, FAQs, and policy documents to assemble an accurate answer.",
      },
      {
        step: "03",
        title: "Live System Lookups",
        description: "Queries authenticated APIs to check order status, subscription details, or appointment records.",
      },
      {
        step: "04",
        title: "Structured Ticket Escalation",
        description: "Creates a pre-summarized support ticket for human specialists whenever manual intervention is required.",
      },
    ],
    features: [
      {
        title: "Citation-Backed Knowledge Responses",
        description: "Answers strictly from your approved help documentation to prevent inaccurate policy statements.",
      },
      {
        title: "Authenticated Account & Order Queries",
        description: "Connects securely to your backend APIs to give customers real-time status updates.",
      },
      {
        title: "Multilingual Customer Communication",
        description: "Supports customers seamlessly across English, Hindi, Odia, and other regional or global languages.",
      },
      {
        title: "Context-Preserving Human Escalation",
        description: "Passes full conversation history and issue categorization to human agents so customers never repeat themselves.",
      },
    ],
    workflowNodes: [
      { id: "n1", label: "Support Query", detail: "Web Portal / WhatsApp / Email" },
      { id: "n2", label: "Knowledge & API Layer", detail: "Vector Docs + Order Status API" },
      { id: "n3", label: "Confidence Check", detail: "Direct Resolution vs. Escalation" },
      { id: "n4", label: "Ticket & Resolution", detail: "Closed Query or Agent Handoff" },
    ],
    integrations: ["Helpdesk & Ticketing APIs", "WhatsApp Business", "E-commerce Order APIs", "PostgreSQL / pgvector", "Custom Support Portals"],
    useCases: [
      {
        industry: "E-commerce & D2C Brands",
        application: "Automate order tracking, return policy guidance, and product sizing/usage inquiries 24/7.",
      },
      {
        industry: "SaaS & Software Platforms",
        application: "Guide users through feature configuration, onboarding steps, and troubleshooting documentation.",
      },
      {
        industry: "Educational Institutions",
        application: "Answer student and parent queries regarding admissions, fee deadlines, exam schedules, and campus services.",
      },
    ],
    faqs: [
      {
        question: "How do we update the AI when our policies or product features change?",
        answer:
          "We provide a clean knowledge management workflow where uploading updated PDFs, web pages, or SOPs automatically refreshes the vector index.",
      },
      {
        question: "What happens when a customer is frustrated or has a billing dispute?",
        answer:
          "Sentiment and topic rules immediately flag sensitive or billing-dispute conversations and route them directly to a human support specialist.",
      },
      {
        question: "Can it look up live order or account information?",
        answer:
          "Yes. Through authenticated read-only API endpoints, the assistant can securely retrieve order, shipment, or booking statuses.",
      },
    ],
    relatedServiceSlugs: ["ai-development-automation", "api-integration-cloud-engineering", "custom-software-development"],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    tagline: "Eliminate Repetitive Manual Tasks Across Operations, Finance & Admin",
    summary:
      "Connect your software tools, automate document parsing, trigger multi-step approvals, and eliminate manual copy-paste bottlenecks across departments.",
    heroImage: SITE_ASSETS.solutions["workflow-automation"].src,
    heroAlt: SITE_ASSETS.solutions["workflow-automation"].alt,
    iconName: "Workflow",
    problem:
      "Skilled teams lose hours every week to repetitive operational chores—downloading attachments, re-typing invoice data into spreadsheets, sending manual status reminders, and reconciling records across separate systems.",
    solution:
      "NAVCHETNAA AI designs event-driven workflow automation pipelines combining deterministic API orchestration with AI document intelligence—turning multi-hour manual routines into reliable background execution.",
    howItWorks: [
      {
        step: "01",
        title: "Event or Schedule Trigger",
        description: "Triggered automatically by form submissions, incoming emails, webhook events, database updates, or cron schedules.",
      },
      {
        step: "02",
        title: "AI Extraction & Validation",
        description: "Extracts structured fields from PDFs, invoices, or messages and validates formats against business rules.",
      },
      {
        step: "03",
        title: "Cross-System Orchestration",
        description: "Updates ERP/CRM databases, generates PDFs/reports, and routes approval requests to decision-makers.",
      },
      {
        step: "04",
        title: "Audit Logging & Notifications",
        description: "Logs every execution step and notifies stakeholders via WhatsApp, email, or dashboard alerts.",
      },
    ],
    features: [
      {
        title: "AI-Powered Document & Invoice Parsing",
        description: "Convert unstructured PDFs, receipts, and forms into validated database records automatically.",
      },
      {
        title: "Multi-Step Approval Workflows",
        description: "Automate purchase, leave, onboarding, and discount approvals with role-based notifications.",
      },
      {
        title: "Scheduled Reporting & Digest Generation",
        description: "Compile daily operational, sales, or inventory summaries and deliver them to leadership automatically.",
      },
      {
        title: "Error Handling & Retry Resilience",
        description: "Built-in queue retries, dead-letter logs, and instant admin alerts ensure zero silent failures.",
      },
    ],
    workflowNodes: [
      { id: "n1", label: "Trigger Event", detail: "Email / Webhook / DB Change / Cron" },
      { id: "n2", label: "Processing Engine", detail: "Python Workers + AI Data Extraction" },
      { id: "n3", label: "System Actions", detail: "ERP Update + PDF Gen + Approvals" },
      { id: "n4", label: "Audit & Notify", detail: "Execution Log + WhatsApp / Email" },
    ],
    integrations: ["Python / Celery Workers", "PostgreSQL & MySQL", "Google Workspace", "WhatsApp & Email APIs", "Custom ERP/CRM APIs"],
    useCases: [
      {
        industry: "Manufacturing & Logistics",
        application: "Automate purchase order intake, dispatch notifications, vendor bill reconciliation, and stock alerts.",
      },
      {
        industry: "Finance & Professional Services",
        application: "Streamline client KYC document collection, verification checklists, and automated invoice reminders.",
      },
      {
        industry: "Healthcare & Education",
        application: "Automate admission/registration packet processing, fee reminders, and administrative report compilation.",
      },
    ],
    faqs: [
      {
        question: "How do you identify which workflows to automate first?",
        answer:
          "We prioritize high-frequency, rule-based or document-heavy processes where manual errors are costly and staff time can be reclaimed immediately.",
      },
      {
        question: "Do we get visibility into what the automation is doing?",
        answer:
          "Yes. Every automated pipeline includes execution logs, status dashboards, and exception alerts so administrators retain complete operational control.",
      },
      {
        question: "Can workflows include human approval checkpoints?",
        answer:
          "Yes. We routinely build human-in-the-loop checkpoints for financial approvals, outgoing client quotes, or exception handling.",
      },
    ],
    relatedServiceSlugs: ["ai-development-automation", "api-integration-cloud-engineering", "crm-erp-development"],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    tagline: "Context-Aware Web & WhatsApp Assistants Trained on Your Business Data",
    summary:
      "Deploy intelligent conversational assistants across your website and WhatsApp to guide visitors, answer product questions, capture leads, and book consultations 24/7.",
    heroImage: SITE_ASSETS.solutions["ai-chatbots"].src,
    heroAlt: SITE_ASSETS.solutions["ai-chatbots"].alt,
    iconName: "MessageSquareCode",
    problem:
      "Traditional rule-based chatbots trap users in rigid button trees and fail the moment someone asks a real question—causing visitors to abandon your website without converting.",
    solution:
      "NAVCHETNAA AI builds modern, context-aware AI Chatbots powered by semantic retrieval over your website, catalogs, and FAQs—holding natural conversations that educate visitors and capture structured leads.",
    howItWorks: [
      {
        step: "01",
        title: "Knowledge Indexing",
        description: "Ingests your service pages, product specs, pricing guidelines, and FAQs into a fast semantic index.",
      },
      {
        step: "02",
        title: "Natural Conversation Flow",
        description: "Understands nuanced visitor questions, maintains multi-turn context, and responds in your brand tone.",
      },
      {
        step: "03",
        title: "Interactive Lead & Booking Actions",
        description: "Captures visitor contact details naturally during conversation or opens inline booking/inquiry workflows.",
      },
      {
        step: "04",
        title: "CRM & WhatsApp Synchronization",
        description: "Logs chat transcripts and captured leads directly into your CRM and alerts your team.",
      },
    ],
    features: [
      {
        title: "Website & WhatsApp Omnichannel Presence",
        description: "Consistent, intelligent assistant experience across your web platform and WhatsApp Business.",
      },
      {
        title: "Brand-Matched Custom UI",
        description: "Clean, lightweight chat interfaces engineered to match your website's typography and visual identity.",
      },
      {
        title: "Built-In Lead Capture & Qualification",
        description: "Converts anonymous website visitors into structured CRM leads without intrusive popups.",
      },
      {
        title: "Topic Guardrails & Off-Topic Filtering",
        description: "Keeps conversations focused strictly on your business, products, and customer needs.",
      },
    ],
    workflowNodes: [
      { id: "n1", label: "Visitor Message", detail: "Website Widget or WhatsApp Chat" },
      { id: "n2", label: "Semantic Retrieval", detail: "pgvector Knowledge Base Match" },
      { id: "n3", label: "Guided Response", detail: "Grounded Answer + Lead Prompt" },
      { id: "n4", label: "Lead Capture", detail: "CRM Contact + Transcript Sync" },
    ],
    integrations: ["Next.js / React Websites", "WhatsApp Business API", "PostgreSQL / pgvector", "Custom CRM", "Webhook Notifications"],
    useCases: [
      {
        industry: "B2B Services & SaaS Websites",
        application: "Answer technical and solution questions immediately and guide qualified buyers to project inquiry forms.",
      },
      {
        industry: "E-commerce & Retail Stores",
        application: "Act as a 24/7 digital product advisor helping shoppers compare specifications and check policies.",
      },
      {
        industry: "Colleges & Universities",
        application: "Assist prospective students with program details, eligibility criteria, and admissions dates.",
      },
    ],
    faqs: [
      {
        question: "Will the chatbot slow down our website load speed?",
        answer:
          "No. We build lightweight, asynchronously loaded chat components that preserve fast Core Web Vitals and initial page paint.",
      },
      {
        question: "Can the same AI chatbot run on both our website and WhatsApp?",
        answer:
          "Yes. Both channels can share the same central knowledge base, lead capture logic, and CRM integration.",
      },
      {
        question: "Can we review all conversations users have with the chatbot?",
        answer:
          "Yes. Conversation logs and captured leads are stored securely so you can inspect common customer questions and refine content.",
      },
    ],
    relatedServiceSlugs: ["website-development", "ai-development-automation", "custom-software-development"],
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    tagline: "Automated Lead Enrichment, Follow-Up Triggers & Pipeline Hygiene",
    summary:
      "Turn your CRM from a passive database into an active revenue engine—automatically logging calls, scoring leads, triggering follow-ups, and keeping deal stages accurate.",
    heroImage: SITE_ASSETS.solutions["crm-automation"].src,
    heroAlt: SITE_ASSETS.solutions["crm-automation"].alt,
    iconName: "GitBranch",
    problem:
      "Sales teams hate manual CRM data entry. As a result, call notes go unlogged, follow-ups are forgotten, deal stages become stale, and leadership lacks accurate pipeline visibility.",
    solution:
      "NAVCHETNAA AI engineers intelligent CRM automation layers that capture interactions automatically from phone calls, emails, forms, and WhatsApp—updating records, assigning tasks, and triggering timely follow-ups.",
    howItWorks: [
      {
        step: "01",
        title: "Omnichannel Interaction Capture",
        description: "Ingests inbound forms, AI Receptionist call summaries, WhatsApp threads, and email replies automatically.",
      },
      {
        step: "02",
        title: "AI Summarization & Field Mapping",
        description: "Extracts key requirements, budget indicators, and next steps into structured CRM contact and deal fields.",
      },
      {
        step: "03",
        title: "Automated Routing & Task Assignment",
        description: "Assigns leads by territory, service line, or capacity and creates time-bound follow-up tasks.",
      },
      {
        step: "04",
        title: "Stale-Deal Alerts & Nurture Sequences",
        description: "Notifies reps when high-priority deals stall and triggers polite automated check-ins.",
      },
    ],
    features: [
      {
        title: "Zero-Typing Call & Chat Logging",
        description: "Every AI voice or chat interaction automatically populates structured notes on the contact timeline.",
      },
      {
        title: "Intelligent Lead Scoring & Deduplication",
        description: "Prevents duplicate records and highlights high-intent prospects for immediate sales attention.",
      },
      {
        title: "Automated Follow-Up Reminders",
        description: "Ensures no proposal, quote, or consultation inquiry goes without timely follow-up.",
      },
      {
        title: "Executive Pipeline Health Digests",
        description: "Automated weekly summaries of new leads, stage conversions, and bottlenecks.",
      },
    ],
    workflowNodes: [
      { id: "n1", label: "Omnichannel Activity", detail: "Calls, Forms, WhatsApp & Email" },
      { id: "n2", label: "AI Structuring", detail: "Intent Extraction & Deduplication" },
      { id: "n3", label: "CRM Sync Engine", detail: "Contact, Deal Stage & Task Update" },
      { id: "n4", label: "Team & Nurture Triggers", detail: "Rep Alerts + Follow-Up Flows" },
    ],
    integrations: ["Custom NAVCHETNAA CRMs", "HubSpot / Zoho / Salesforce APIs", "AI Voice Receptionist", "WhatsApp Business API", "PostgreSQL / Webhooks"],
    useCases: [
      {
        industry: "Growing B2B Sales Teams",
        application: "Eliminate manual CRM updates and ensure every inbound inquiry receives structured follow-up.",
      },
      {
        industry: "Real Estate & Financial Advisory",
        application: "Track multi-week buyer or client consultations automatically across phone and WhatsApp touchpoints.",
      },
      {
        industry: "Multi-Branch Service Businesses",
        application: "Route leads automatically to branch managers and monitor response SLAs across locations.",
      },
    ],
    faqs: [
      {
        question: "Does CRM Automation work with our existing CRM or only custom CRMs?",
        answer:
          "Both. We build automation pipelines for custom CRMs engineered by NAVCHETNAA AI as well as existing platforms like HubSpot, Zoho, or Salesforce via their REST APIs.",
      },
      {
        question: "How do you avoid creating duplicate leads when someone calls and fills out a form?",
        answer:
          "Our sync engine normalizes phone numbers and email addresses to match existing contact records and append new activity to the unified timeline.",
      },
      {
        question: "Can sales managers customize lead routing and alert rules?",
        answer:
          "Yes. Routing rules, SLA reminder intervals, and notification channels are configured around your team's exact sales process.",
      },
    ],
    relatedServiceSlugs: ["crm-erp-development", "ai-development-automation", "api-integration-cloud-engineering"],
  },
];

export function getAISolutionBySlug(slug: string): AISolutionItem | undefined {
  return AI_SOLUTIONS_DATA.find((item) => item.slug === slug);
}