import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import styles from "@/styles/legal.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | NAVCHETNAA AI",
  description:
    "Read the Privacy Policy of NAVCHETNAA AI detailing how project inquiries, contact details, and website technical telemetry are handled responsibly.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Privacy Policy" }]}
        eyebrow="LEGAL & DATA GOVERNANCE"
        title="Privacy Policy"
        description="How NAVCHETNAA AI collects, uses, protects, and respects information shared through our website and project inquiry channels."
      />

      <section className={styles.section}>
        <Container narrow>
          <article className={styles.article}>
            <div className={styles.metaBox}>
              <span>ENTITY: {SITE_CONFIG.name}</span>
              <span>EFFECTIVE DATE: NOVEMBER 2026</span>
              <span>CONTACT: {SITE_CONFIG.contact.email}</span>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>1. Information We Collect</h2>
              <p className={styles.paragraph}>
                When you browse the {SITE_CONFIG.name} website or submit a project
                inquiry, we only collect information you voluntarily provide and
                essential technical diagnostics required to operate the website
                securely:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    <strong>Project Inquiry Details:</strong> Full name, business
                    email address, phone or WhatsApp number, company name,
                    country, selected service, estimated budget range, timeline,
                    and project description submitted via our contact form.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    <strong>Direct Communications:</strong> Information you share
                    when contacting us directly via email (
                    {SITE_CONFIG.contact.email}) or WhatsApp (
                    {SITE_CONFIG.contact.whatsappDisplay}).
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    <strong>Technical Security Logs:</strong> Basic request
                    metadata (such as IP-based rate-limiting counters) used to
                    prevent spam and protect server endpoints.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>2. How We Use Collected Information</h2>
              <p className={styles.paragraph}>
                We process your information strictly for legitimate business
                communication and engineering evaluation purposes:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    Reviewing technical requirements and preparing project
                    architecture proposals or consultations.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    Responding to questions regarding our services, AI solutions,
                    or software products.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>
                    Maintaining website availability, security, and abuse
                    prevention.
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>3. Data Sharing &amp; Confidentiality</h2>
              <p className={styles.paragraph}>
                {SITE_CONFIG.name} does not sell, rent, or trade personal or
                business inquiry data to third parties. Information is shared
                only with essential infrastructure providers (such as secure
                cloud hosting and transactional email delivery services) strictly
                as required to process your inquiry.
              </p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>4. Data Retention &amp; Your Rights</h2>
              <p className={styles.paragraph}>
                We retain inquiry records only as long as necessary to respond
                to your request, execute agreed engagements, or fulfill legal
                obligations. You may request access to, correction of, or
                deletion of your submitted inquiry details at any time by
                emailing{" "}
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