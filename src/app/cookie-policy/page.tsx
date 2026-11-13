import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import styles from "@/styles/legal.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | NAVCHETNAA AI",
  description:
    "Understand how NAVCHETNAA AI uses strictly necessary browser storage and technical cookies to ensure secure, fast website operation.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Cookie Policy" }]}
        eyebrow="TRANSPARENCY & BROWSER STORAGE"
        title="Cookie Policy"
        description="Clear details on how browser cookies and local storage are utilized across the NAVCHETNAA AI website."
      />

      <section className={styles.section}>
        <Container narrow>
          <article className={styles.article}>
            <div className={styles.metaBox}>
              <span>WEBSITE: {SITE_CONFIG.name}</span>
              <span>EFFECTIVE DATE: NOVEMBER 2026</span>
              <span>CONTACT: {SITE_CONFIG.contact.email}</span>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>1. What Are Cookies?</h2>
              <p className={styles.paragraph}>
                Cookies and browser storage entries are small text files stored
                by your web browser when you visit websites. They help maintain
                security, remember essential interface states, and support
                reliable page performance.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>2. Categories of Cookies Used</h2>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    <strong>Strictly Necessary &amp; Security Cookies:</strong>{" "}
                    Essential technical mechanisms required for secure form
                    submission, spam protection, and core server routing.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    <strong>Performance &amp; Accessibility Preferences:</strong>{" "}
                    Browser-level media query checks (such as{" "}
                    <code>prefers-reduced-motion</code>) respected locally to
                    adapt animations without tracking individual identity.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>3. Managing Browser Cookies</h2>
              <p className={styles.paragraph}>
                You can inspect, block, or delete cookies at any time through
                your web browser settings. Blocking strictly necessary security
                mechanisms may affect interactive form submissions. For any
                privacy or cookie inquiries, reach us at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  style={{ fontWeight: 600, textDecoration: "underline" }}
                >
                  {SITE_CONFIG.contact.email}
                </a>
                .
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}