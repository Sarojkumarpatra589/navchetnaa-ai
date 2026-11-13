import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { SERVICES_DATA } from "@/data/services";
import { AI_SOLUTIONS_DATA } from "@/data/aiSolutions";
import { PRODUCTS_DATA } from "@/data/products";
import { INDUSTRIES_DATA } from "@/data/industries";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { INSIGHTS_DATA } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/approach`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/ai-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES_DATA.map((item) => ({
    url: `${baseUrl}/services/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = AI_SOLUTIONS_DATA.map((item) => ({
    url: `${baseUrl}/ai-solutions/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS_DATA.map((item) => ({
    url: `${baseUrl}/products/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((item) => ({
    url: `${baseUrl}/industries/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = PORTFOLIO_DATA.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS_DATA.map((item) => ({
    url: `${baseUrl}/insights/${item.slug}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...portfolioRoutes,
    ...insightRoutes,
  ];
}