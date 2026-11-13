import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import styles from "@/styles/legal.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | NAVCHETNAA AI",
  description:
    "Review the Terms and Conditions governing access to the NAVCHETNAA AI website, technical documentation, product previews, and engineering engagements.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Terms & Conditions" }]}
        eyebrow="TERMS OF USE"
        title="Terms and Conditions"
        description="Governing terms for browsing the NAVCHETNAA AI website, reviewing architectural blueprints, and initiating software engineering inquiries."
      />

      <section className={styles.section}>
        <Container narrow>
          <article className={styles.article}>
            <div className={styles.metaBox}>
              <span>AGENCY: {SITE_CONFIG.name}</span>
              <span>EFFECTIVE DATE: NOVEMBER 2026</span>
              <span>FOUNDER: {SITE_CONFIG.founder.name}</span>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>1. Acceptance of Terms</h2>
              <p className={styles.paragraph}>
                By accessing or using the {SITE_CONFIG.name} website, you agree
                to comply with these Terms and Conditions and all applicable
                laws. If you do not agree with any part of these terms, please
                discontinue use of the website.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>2. Informational Purpose &amp; Architecture Previews</h2>
              <p className={styles.paragraph}>
                All service descriptions, AI solution workflows, product
                interface previews, and portfolio blueprints presented on this
                website are provided for informational and architectural
                illustration purposes. Specific deliverables, timelines, service
                level agreements, and pricing for client projects are governed
                exclusively by formal written statements of work or service
                agreements executed between {SITE_CONFIG.name} and the client.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>3. Intellectual Property Rights</h2>
              <p className={styles.paragraph}>
                All brand marks, logos, visual designs, original 3D scenes,
                editorial articles, architectural schematics, and proprietary
                product concepts (including NAVCHETNAA AI Receptionist,
                CollegeOS, and BizConnect) displayed on this website remain the
                intellectual property of {SITE_CONFIG.name} unless otherwise
                stated.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>4. Acceptable Website Use</h2>
              <p className={styles.paragraph}>
                You agree not to misuse the website, submit automated spam or
                malicious payloads through our contact endpoints, attempt
                unauthorized access to server infrastructure, or scrape site
                content for unauthorized commercial redistribution.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>5. Contact &amp; Clarifications</h2>
              <p className={styles.paragraph}>
                For questions regarding these Terms and Conditions or formal
                engagement agreements, please contact{" "}
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