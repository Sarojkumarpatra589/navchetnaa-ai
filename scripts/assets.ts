export interface VisualAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const SITE_ASSETS = {
  brand: {
    mark: "/images/brand/navchetnaa-logo.png",
    wordmark: "/images/brand/navchetnaa-logo.png",
    ogDefault: {
      src: "/images/hero/og-default.jpg",
      alt: "NAVCHETNAA AI — Digital and Applied AI Engineering Architecture",
      width: 1200,
      height: 630,
    },
  },
  about: {
    studio: {
      src: "/images/about/engineering-studio.jpg",
      alt: "Modern minimalist software engineering workspace and collaborative system architecture",
      width: 1400,
      height: 900,
    },
    approach: {
      src: "/images/about/approach-architecture.jpg",
      alt: "Clean architectural glass structure representing transparent systems engineering",
      width: 1400,
      height: 900,
    },
    process: {
      src: "/images/about/process-blueprint.jpg",
      alt: "Structured technical planning and product engineering workflow board",
      width: 1400,
      height: 900,
    },
  },
  services: {
    "ai-development-automation": {
      src: "/images/services/ai-development.jpg",
      alt: "Applied artificial intelligence neural visualization and algorithmic data structures",
      width: 1200,
      height: 800,
    },
    "custom-software-development": {
      src: "/images/services/custom-software.jpg",
      alt: "Clean TypeScript and Python backend engineering environment on ultra-wide monitor",
      width: 1200,
      height: 800,
    },
    "website-development": {
      src: "/images/services/website-development.jpg",
      alt: "Precision editorial web interface and responsive digital platform design",
      width: 1200,
      height: 800,
    },
    "mobile-app-development": {
      src: "/images/services/mobile-app.jpg",
      alt: "Cross-platform mobile application interface prototype in modern studio lighting",
      width: 1200,
      height: 800,
    },
    "crm-erp-development": {
      src: "/images/services/crm-erp.jpg",
      alt: "Enterprise resource planning and unified operations analytics workspace",
      width: 1200,
      height: 800,
    },
    "ai-voice-receptionist": {
      src: "/images/services/ai-voice.jpg",
      alt: "Acoustic waveform and conversational voice intelligence communication hardware",
      width: 1200,
      height: 800,
    },
    "api-integration-cloud-engineering": {
      src: "/images/services/cloud-api.jpg",
      alt: "High-availability cloud server infrastructure and optical fiber network architecture",
      width: 1200,
      height: 800,
    },
  },
  solutions: {
    "ai-receptionist": {
      src: "/images/solutions/ai-receptionist.jpg",
      alt: "Modern executive reception desk enhanced with automated voice call routing",
      width: 1200,
      height: 800,
    },
    "ai-sales-agents": {
      src: "/images/solutions/ai-sales.jpg",
      alt: "B2B revenue pipeline intelligence and automated lead qualification workspace",
      width: 1200,
      height: 800,
    },
    "ai-customer-support": {
      src: "/images/solutions/ai-support.jpg",
      alt: "Omnichannel customer support operations assisted by real-time knowledge retrieval",
      width: 1200,
      height: 800,
    },
    "workflow-automation": {
      src: "/images/solutions/workflow-automation.jpg",
      alt: "Automated digital workflow orchestration connecting enterprise software tools",
      width: 1200,
      height: 800,
    },
    "ai-chatbots": {
      src: "/images/solutions/ai-chatbots.jpg",
      alt: "Context-aware conversational AI assistant interface on desktop and mobile",
      width: 1200,
      height: 800,
    },
    "crm-automation": {
      src: "/images/solutions/crm-automation.jpg",
      alt: "Automated customer relationship lifecycle and deal stage synchronization",
      width: 1200,
      height: 800,
    },
  },
  industries: {
    education: {
      src: "/images/industries/education.jpg",
      alt: "Modern university campus architecture and connected academic learning environment",
      width: 1200,
      height: 800,
    },
    healthcare: {
      src: "/images/industries/healthcare.jpg",
      alt: "Clean clinical healthcare facility using digital patient scheduling systems",
      width: 1200,
      height: 800,
    },
    "real-estate": {
      src: "/images/industries/real-estate.jpg",
      alt: "Contemporary commercial architecture and automated property inquiry management",
      width: 1200,
      height: 800,
    },
    manufacturing: {
      src: "/images/industries/manufacturing.jpg",
      alt: "Precision industrial manufacturing line with automated ERP production tracking",
      width: 1200,
      height: 800,
    },
    "e-commerce": {
      src: "/images/industries/ecommerce.jpg",
      alt: "Modern e-commerce fulfillment operations and intelligent customer support",
      width: 1200,
      height: 800,
    },
    logistics: {
      src: "/images/industries/logistics.jpg",
      alt: "Global supply chain freight logistics and fleet dispatch coordination",
      width: 1200,
      height: 800,
    },
    hospitality: {
      src: "/images/industries/hospitality.jpg",
      alt: "Contemporary boutique hotel lobby with 24/7 AI guest concierge handling",
      width: 1200,
      height: 800,
    },
    finance: {
      src: "/images/industries/finance.jpg",
      alt: "Financial advisory operations and secure data governance infrastructure",
      width: 1200,
      height: 800,
    },
    retail: {
      src: "/images/industries/retail.jpg",
      alt: "Omnichannel retail storefront connected to centralized inventory ERP",
      width: 1200,
      height: 800,
    },
    startups: {
      src: "/images/industries/startups.jpg",
      alt: "Agile product engineering team building scalable SaaS MVP architecture",
      width: 1200,
      height: 800,
    },
  },
  portfolio: {
    "ai-receptionist-crm": {
      src: "/images/portfolio/case-receptionist.jpg",
      alt: "Architectural blueprint of AI Receptionist integrated with live CRM lead pipelines",
      width: 1200,
      height: 800,
    },
    "collegeos-institutional-management": {
      src: "/images/portfolio/case-collegeos.jpg",
      alt: "Multi-role academic governance and campus ERP system interface",
      width: 1200,
      height: 800,
    },
    "fleet-transport-management": {
      src: "/images/portfolio/case-fleet.jpg",
      alt: "Real-time vehicle routing, dispatch telemetry, and fleet operations dashboard",
      width: 1200,
      height: 800,
    },
    "business-crm": {
      src: "/images/portfolio/case-crm.jpg",
      alt: "Custom multi-stage B2B sales pipeline and automated follow-up tracking system",
      width: 1200,
      height: 800,
    },
    "custom-business-software": {
      src: "/images/portfolio/case-software.jpg",
      alt: "Bespoke internal operations software replacing fragmented spreadsheets",
      width: 1200,
      height: 800,
    },
  },
  insights: {
    "how-ai-is-changing-modern-business-operations": {
      src: "/images/insights/ai-business-ops.jpg",
      alt: "Modern enterprise leadership reviewing AI-driven operational workflows",
      width: 1200,
      height: 750,
    },
    "what-is-an-ai-receptionist": {
      src: "/images/insights/ai-receptionist-guide.jpg",
      alt: "Voice AI communication system handling inbound business phone inquiries",
      width: 1200,
      height: 750,
    },
    "custom-software-vs-ready-made-software": {
      src: "/images/insights/custom-vs-off-the-shelf.jpg",
      alt: "Architectural comparison of tailored software systems versus rigid off-the-shelf tools",
      width: 1200,
      height: 750,
    },
    "how-business-automation-reduces-repetitive-work": {
      src: "/images/insights/automation-repetitive-work.jpg",
      alt: "Streamlined digital operations eliminating manual data entry bottlenecks",
      width: 1200,
      height: 750,
    },
    "role-of-ai-in-digital-transformation": {
      src: "/images/insights/ai-digital-transformation.jpg",
      alt: "Cloud infrastructure and applied AI modernization across enterprise departments",
      width: 1200,
      height: 750,
    },
    "why-educational-institutions-need-connected-management-systems": {
      src: "/images/insights/connected-campus-systems.jpg",
      alt: "Unified digital campus platform linking admissions, academics, and administration",
      width: 1200,
      height: 750,
    },
  },
} as const;