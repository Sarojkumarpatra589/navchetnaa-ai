import Link from "next/link";
import { SITE_CONFIG } from "@/data/site";
import styles from "./Breadcrumb.module.css";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbEntry[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems: BreadcrumbEntry[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.label,
      ...(entry.href ? { item: `${SITE_CONFIG.url}${entry.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={styles.nav}>
        <ol className={styles.list}>
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className={styles.item}>
                {!isLast && item.href ? (
                  <>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                    <span className={styles.separator} aria-hidden="true">
                      /
                    </span>
                  </>
                ) : (
                  <span className={styles.current} aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}