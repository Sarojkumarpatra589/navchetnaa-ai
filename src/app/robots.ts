import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}