import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site";

interface PageMetadataProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage = "/images/hero/og-default.jpg",
  noIndex = false,
}: PageMetadataProps): Metadata {
  const normalizedPath = path.startsWith("/") || path === "" ? path : `/${path}`;
  const canonicalUrl = `${SITE_CONFIG.url}${normalizedPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      type: "website",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_CONFIG.url}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_CONFIG.url}${ogImage}`],
    },
  };
}