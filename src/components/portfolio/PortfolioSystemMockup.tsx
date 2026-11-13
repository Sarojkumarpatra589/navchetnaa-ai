import styles from "./PortfolioSystemMockup.module.css";

interface LayerSpec {
  tag: string;
  name: string;
  items: string[];
}

const BLUEPRINT_LAYERS: Record<string, { heading: string; layers: LayerSpec[] }> = {
  "ai-receptionist-crm": {
    heading: "Voice Telephony → AI Reasoning → CRM Sync Topology",
    layers: [
      {
        tag: "LAYER 01 // INBOUND TELEPHONY",
        name: "Voice & Intent Capture",
        items: ["SIP / Twilio Call Stream", "Low-Latency Speech Recognition", "Brand Persona & Greeting Rules"],
      },
      {
        tag: "LAYER 02 // KNOWLEDGE & GUARDRAILS",
        name: "RAG & Escalation Engine",
        items: ["pgvector FAQ & Policy Store", "Calendar Availability Check", "Warm Human Transfer Trigger"],
      },
      {
        tag: "LAYER 03 // CRM & NOTIFICATIONS",
        name: "Structured Data Persistence",
        items: ["PostgreSQL Contact Deduplication", "AI Post-Call JSON Summary", "WhatsApp / Email Instant Alert"],
      },
    ],
  },
  "collegeos-institutional-management": {
    heading: "Multi-Program Institutional Governance Architecture",
    layers: [
      {
        tag: "LAYER 01 // ROLE PORTALS",
        name: "7-Tier Access Governance",
        items: ["Super Admin & Principal", "Vice Principal & Administrator", "HOD, Faculty & Student Portals"],
      },
      {
        tag: "LAYER 02 // ACADEMIC & CAMPUS CORE",
        name: "18 Integrated ERP Modules",
        items: ["Admissions, Attendance & Timetable", "Examinations, Results & Fees", "Hostel, Library, Inventory & Security"],
      },
      {
        tag: "LAYER 03 // ACCREDITATION & AI",
        name: "IQAC / NAAC & AI Assistance",
        items: ["Criterion-Aligned Audit Reports", "Institutional Notice Broadcasts", "Context-Aware Academic Assistant"],
      },
    ],
  },
  "fleet-transport-management": {
    heading: "Dispatch Console ↔ Flutter Driver App ↔ Client Alerts",
    layers: [
      {
        tag: "LAYER 01 // DISPATCH COMMAND",
        name: "Web Operations Console",
        items: ["Vehicle & Driver Allocation", "Route & Schedule Timeline", "Maintenance & Permit Alerts"],
      },
      {
        tag: "LAYER 02 // FIELD EXECUTION",
        name: "Offline-Resilient Flutter App",
        items: ["Trip Milestone Checkpoints", "Digital Photo POD Upload", "Fuel & Toll Expense Logging"],
      },
      {
        tag: "LAYER 03 // CLIENT & BILLING",
        name: "Automated Logistics Pipeline",
        items: ["WhatsApp / SMS Delivery Status", "Reconciled Trip Profit Ledger", "Invoice-Ready Export"],
      },
    ],
  },
  "business-crm": {
    heading: "Omnichannel Lead Capture → Pipeline → Follow-Up Automation",
    layers: [
      {
        tag: "LAYER 01 // INTAKE CHANNELS",
        name: "Unified Lead Webhooks",
        items: ["Website Project Inquiry Forms", "AI Voice Receptionist Logs", "WhatsApp Business Threads"],
      },
      {
        tag: "LAYER 02 // PIPELINE ENGINE",
        name: "FastAPI + PostgreSQL Core",
        items: ["Phone/Email Deduplication", "Custom Stage Progression", "Territory & Rep Assignment"],
      },
      {
        tag: "LAYER 03 // RETENTION & INSIGHTS",
        name: "SLA & Reporting Layer",
        items: ["Automated Follow-Up Tasks", "Stale-Deal Escalation Alerts", "CSV & Executive Analytics"],
      },
    ],
  },
  "custom-business-software": {
    heading: "Role-Based Internal ERP & Multi-Step Approval Architecture",
    layers: [
      {
        tag: "LAYER 01 // USER INTERFACES",
        name: "Responsive Role Dashboards",
        items: ["Executive Analytics View", "Department Manager Console", "Staff Data Entry Portals"],
      },
      {
        tag: "LAYER 02 // BUSINESS LOGIC",
        name: "Django / FastAPI Workflow Core",
        items: ["Multi-Step Approval Chains", "Validation & Audit History", "Automated PDF Generation"],
      },
      {
        tag: "LAYER 03 // DATA & INTEGRATION",
        name: "Cloud-Native Persistence",
        items: ["PostgreSQL Relational Schema", "Celery Background Workers", "REST API External Connectors"],
      },
    ],
  },
};

interface PortfolioSystemMockupProps {
  slug: string;
  classification: string;
}

export function PortfolioSystemMockup({
  slug,
  classification,
}: PortfolioSystemMockupProps) {
  const spec = BLUEPRINT_LAYERS[slug] || BLUEPRINT_LAYERS["custom-business-software"];

  return (
    <div
      className={styles.blueprint}
      role="region"
      aria-label={`System Architecture Blueprint: ${spec.heading}`}
    >
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.eyebrow}>SYSTEM ARCHITECTURE SCHEMATIC</span>
          <h3 className={styles.title}>{spec.heading}</h3>
        </div>
        <span className={styles.badge}>{classification.toUpperCase()}</span>
      </div>

      <div className={styles.layersGrid}>
        {spec.layers.map((layer) => (
          <div key={layer.tag} className={styles.layerCard}>
            <span className={styles.layerTag}>{layer.tag}</span>
            <h4 className={styles.layerName}>{layer.name}</h4>
            <ul className={styles.layerItems}>
              {layer.items.map((item) => (
                <li key={item} className={styles.layerItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}