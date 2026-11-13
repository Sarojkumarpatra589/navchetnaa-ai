import { z } from "zod";

export const SERVICE_OPTIONS = [
  "AI Development & Automation",
  "Custom Software Development",
  "Website Development",
  "Mobile App Development",
  "CRM & ERP Development",
  "AI Voice Receptionist",
  "API Integration & Cloud Engineering",
  "NAVCHETNAA AI Receptionist (Product)",
  "CollegeOS (Product)",
  "BizConnect (Product)",
  "Not Sure — Need Technical Consultation",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000–₹1 lakh",
  "₹1–3 lakh",
  "₹3–5 lakh",
  "₹5–10 lakh",
  "Above ₹10 lakh",
  "International pricing to discuss",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediately",
  "2–4 weeks",
  "1–3 months",
  "Still planning",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(100, "Full name must be under 100 characters."),
  businessEmail: z
    .string()
    .trim()
    .email("Please enter a valid business email address.")
    .max(140, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone or WhatsApp number.")
    .max(30, "Phone number must be under 30 characters."),
  company: z
    .string()
    .trim()
    .min(1, "Please enter your company or organization name.")
    .max(120, "Company name must be under 120 characters."),
  country: z
    .string()
    .trim()
    .min(2, "Please enter your country.")
    .max(80, "Country name must be under 80 characters."),
  service: z.string().trim().min(1, "Please select a required service."),
  budget: z.enum(BUDGET_OPTIONS, {
    message: "Please select an estimated budget range.",
  }),
  timeline: z.enum(TIMELINE_OPTIONS, {
    message: "Please select a project timeline.",
  }),
  description: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters describing your project or goals.")
    .max(4000, "Project description must be under 4000 characters."),
  // Anti-spam fields
  website: z.string().max(200).optional(), // Honeypot (must stay empty)
  formStartedAt: z.number().optional(), // Timestamp check
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;