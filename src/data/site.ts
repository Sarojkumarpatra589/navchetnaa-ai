import { NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "NAVCHETNAA AI",
  tagline: "Engineering Intelligence. Building the Future.",
  positioning: "Digital & Applied AI Engineering Agency",
  description:
    "NAVCHETNAA AI builds intelligent AI solutions, custom software, business automation, websites, mobile applications and CRM & ERP platforms.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  founder: {
    name: "Saroj Kumar Patra",
    role: "Founder & Principal Architect",
  },
  contact: {
    email: "contact.navchetnaa@gmail.com",
    whatsappDisplay: "+91 84569 33885",
    whatsappNumber: "918456933885",
    whatsappUrl:
      "https://wa.me/918456933885?text=Hello%20NAVCHETNAA%20AI%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  },
} as const;

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About NAVCHETNAA AI",
        href: "/about",
        description: "Our engineering mission, leadership, and architectural standards.",
      },
      {
        label: "Our Approach",
        href: "/approach",
        description: "Business-first problem solving paired with applied AI.",
      },
      {
        label: "Our Process",
        href: "/process",
        description: "Seven-stage disciplined delivery from discovery to support.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "AI Development & Automation",
        href: "/services/ai-development-automation",
        description: "Custom LLM workflows, intelligent agents, and process automation.",
      },
      {
        label: "Custom Software Development",
        href: "/services/custom-software-development",
        description: "Tailored web applications and resilient enterprise backends.",
      },
      {
        label: "Website Development",
        href: "/services/website-development",
        description: "High-performance, SEO-engineered digital web platforms.",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-app-development",
        description: "Cross-platform iOS and Android applications built with Flutter.",
      },
      {
        label: "CRM & ERP Development",
        href: "/services/crm-erp-development",
        description: "Unified operational systems for sales, inventory, and finance.",
      },
      {
        label: "AI Voice Receptionist",
        href: "/services/ai-voice-receptionist",
        description: "24/7 conversational voice agents for inbound call handling.",
      },
      {
        label: "API Integration & Cloud Engineering",
        href: "/services/api-integration-cloud-engineering",
        description: "Scalable AWS infrastructure, microservices, and system sync.",
      },
    ],
  },
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    children: [
      {
        label: "AI Receptionist",
        href: "/ai-solutions/ai-receptionist",
        description: "Automated inbound call answering, qualification, and routing.",
      },
      {
        label: "AI Sales Agents",
        href: "/ai-solutions/ai-sales-agents",
        description: "Autonomous lead follow-up, qualification, and meeting booking.",
      },
      {
        label: "AI Customer Support",
        href: "/ai-solutions/ai-customer-support",
        description: "Instant, knowledge-grounded multi-channel support resolution.",
      },
      {
        label: "Workflow Automation",
        href: "/ai-solutions/workflow-automation",
        description: "End-to-end elimination of repetitive manual back-office tasks.",
      },
      {
        label: "AI Chatbots",
        href: "/ai-solutions/ai-chatbots",
        description: "Context-aware web and WhatsApp assistants trained on your data.",
      },
      {
        label: "CRM Automation",
        href: "/ai-solutions/crm-automation",
        description: "Automated pipeline updates, lead scoring, and follow-up triggers.",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "NAVCHETNAA AI Receptionist",
        href: "/products/navchetnaa-ai-receptionist",
        description: "AI-powered business voice communication & call intelligence platform.",
      },
      {
        label: "CollegeOS",
        href: "/products/collegeos",
        description: "Configurable academic & institutional management system.",
      },
      {
        label: "BizConnect",
        href: "/products/bizconnect",
        description: "B2B business networking, discovery, and directory platform.",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Education", href: "/industries/education" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "E-commerce", href: "/industries/e-commerce" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Startups", href: "/industries/startups" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];