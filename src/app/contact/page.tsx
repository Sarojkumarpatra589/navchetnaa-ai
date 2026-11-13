import type { Metadata } from "next";
import { Mail, MessageSquare, UserCheck, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import styles from "@/components/contact/ContactForm.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contact NAVCHETNAA AI | Start Your AI or Custom Software Project",
  description:
    "Start a project with NAVCHETNAA AI. Share your requirements for AI development, voice receptionists, custom software, mobile apps, or CRM/ERP platforms.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="START YOUR PROJECT"
        title="Let's Engineer Something Extraordinary."
        description="Tell us about your operational challenges, software requirements, or AI automation goals. Our engineering team will review your brief and respond with a structured next step."
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.layout}>
            {/* Left Direct Channels & Next Steps */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Direct Contact Channels</h2>

                <div className={styles.channelList}>
                  <div className={styles.channelItem}>
                    <div className={styles.iconBox}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className={styles.channelLabel}>Business Email</div>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className={styles.channelValue}
                      >
                        <span>{SITE_CONFIG.contact.email}</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.channelItem}>
                    <div className={styles.iconBox}>
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className={styles.channelLabel}>
                        WhatsApp Direct
                      </div>
                      <a
                        href={SITE_CONFIG.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.channelValue}
                      >
                        <span>{SITE_CONFIG.contact.whatsappDisplay}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className={styles.channelItem}>
                    <div className={styles.iconBox}>
                      <UserCheck size={18} />
                    </div>
                    <div>
                      <div className={styles.channelLabel}>
                        Principal Leadership
                      </div>
                      <div className={styles.channelValue}>
                        {SITE_CONFIG.founder.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--color-muted-text)",
                          marginTop: "2px",
                        }}
                      >
                        {SITE_CONFIG.positioning}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>What Happens Next</h2>
                <ol className={styles.stepsList}>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNum}>01</span>
                    <span>
                      <strong>Technical Scope Review:</strong> We review your
                      project description, integrations, and timeline.
                    </span>
                  </li>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNum}>02</span>
                    <span>
                      <strong>Discovery Consultation:</strong> We schedule a
                      focused call to align on workflows and architecture.
                    </span>
                  </li>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNum}>03</span>
                    <span>
                      <strong>Structured Proposal:</strong> You receive a clear
                      milestone plan, tech stack recommendation, and estimate.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Validated Project Form */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}