export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  iconName: string;
  overview: string;
  challenges: string[];
  solution: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  useCases: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  process: ProcessStep[];
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export interface AISolutionItem {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  iconName: string;
  problem: string;
  solution: string;
  howItWorks: {
    step: string;
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  workflowNodes: {
    id: string;
    label: string;
    detail: string;
  }[];
  integrations: string[];
  useCases: {
    industry: string;
    application: string;
  }[];
  faqs: FAQItem[];
  relatedServiceSlugs: string[];
}

export interface ProductItem {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  statusLabel: string;
  overview: string;
  problemsSolved: string[];
  features: {
    title: string;
    description: string;
  }[];
  supportedInstitutions?: string[];
  modules?: string[];
  userRoles: {
    role: string;
    permissions: string;
  }[];
  workflow: ProcessStep[];
  integrations: string[];
  benefits: string[];
  faqs: FAQItem[];
}

export interface IndustryItem {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  iconName: string;
  introduction: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  relevantProductSlugs: string[];
  exampleWorkflows: {
    title: string;
    steps: string[];
  }[];
  techStack: string[];
  faqs: FAQItem[];
}

export interface PortfolioItem {
  slug: string;
  title: string;
  classification: "Concept Architecture" | "Demonstration System" | "Platform Blueprint";
  category: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  overview: string;
  objectives: string[];
  challenges: string[];
  proposedSolution: string;
  features: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  workflow: ProcessStep[];
}

export interface BlogArticle {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  introduction: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    exampleTitle?: string;
    exampleBody?: string;
  }[];
  conclusion: string;
  relatedArticleSlugs: string[];
  relatedServiceSlugs: string[];
}

export interface ContactFormPayload {
  fullName: string;
  businessEmail: string;
  phone: string;
  company: string;
  country: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  website?: string; // Honeypot field for spam protection
}