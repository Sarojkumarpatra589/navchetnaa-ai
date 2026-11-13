import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/data/site";
import { SITE_ASSETS } from "@/data/assets";
import { ABOUT_VALUES } from "@/data/company";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/styles/editorial.module.css";

export const metadata: Metadata = buildMetadata({
  title: "About NAVCHETNAA AI | Digital & Applied AI Engineering Agency",
  description:
    "Learn about NAVCHETNAA AI, founded by Saroj Kumar Patra—a Digital & Applied AI Engineering Agency building custom software, AI agents, and scalable platforms.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="ABOUT NAVCHETNAA AI"
        title="Engineering Intelligence. Building the Future."
        description="NAVCHETNAA AI is a Digital & Applied AI Engineering Agency dedicated to turning complex operational challenges into dependable, custom-engineered software and intelligent automation."
        imageSrc={SITE_ASSETS.about.studio.src}
        imageAlt={SITE_ASSETS.about.studio.alt}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Start Your Project</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/approach" variant="secondary">
              <span>Our Approach</span>
            </Button>
          </>
        }
      />

      {/* Who We Are */}
      <section className={styles.section}>
        <Container>
          <div className={styles.splitGrid}>
            <Reveal className={styles.proseStack}>
              <SectionHeading
                eyebrow="OUR IDENTITY"
                title="Where Software Architecture Meets Applied Artificial Intelligence."
              />
              <p className={styles.paragraph}>
                Founded by <strong>{SITE_CONFIG.founder.name}</strong>,{" "}
                <strong>{SITE_CONFIG.name}</strong> was created with a clear
                conviction: businesses do not need experimental AI demos—they
                need resilient, production-ready engineering that solves real
                bottlenecks.
              </p>
              <p className={styles.paragraph}>
                We bridge full-stack software development—spanning Python,
                Django, FastAPI, React, Next.js, Flutter, and cloud
                infrastructure—with practical AI systems including voice
                receptionists, conversational agents, retrieval pipelines, and
                end-to-end CRM/ERP automation.
              </p>
              <p className={styles.paragraph}>
                Alongside client engineering engagements, we build proprietary
                software platforms including{" "}
                <strong>NAVCHETNAA AI Receptionist</strong>,{" "}
                <strong>CollegeOS</strong>, and <strong>BizConnect</strong>.
              </p>
            </Reveal>

            <Reveal delay={0.1} className={styles.imageBox}>
              <Image
                src={SITE_ASSETS.about.approach.src}
                alt={SITE_ASSETS.about.approach.alt}
                width={900}
                height={620}
                className={styles.coverImg}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core Engineering Values */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="OPERATING PRINCIPLES"
            title="How We Think, Architect, and Deliver."
            description="Four foundational principles guide every architecture review, sprint, and deployment across our agency."
          />

          <div className={styles.gridTwo}>
            {ABOUT_VALUES.map((val, idx) => (
              <Reveal key={val.code} delay={idx * 0.06} className={styles.card}>
                <span className={styles.monoCode}>{val.code}</span>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.cardBody}>{val.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & Direct Engagement */}
      <section className={styles.section}>
        <Container>
          <div className={styles.founderPanel}>
            <div className={styles.proseStack}>
              <SectionHeading
                eyebrow="LEADERSHIP & ACCOUNTABILITY"
                title="Direct Principal Engineering Oversight."
              />
              <p className={styles.paragraph}>
                At NAVCHETNAA AI, clients collaborate directly with principal
                engineering leadership rather than layers of non-technical
                intermediaries. From initial architecture design to database
                schema modeling and AI guardrail verification, every system is
                built with accountability and precision.
              </p>
              <div style={{ paddingTop: "0.5rem" }}>
                <Button href="/process" variant="secondary">
                  <span>Inspect Our 7-Stage Process</span>
                  <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>

            <div className={styles.metaBox}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Agency</span>
                <span className={styles.metaValue}>{SITE_CONFIG.name}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Positioning</span>
                <span className={styles.metaValue}>
                  {SITE_CONFIG.positioning}
                </span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Founder</span>
                <span className={styles.metaValue}>
                  {SITE_CONFIG.founder.name}
                </span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Direct Inquiries</span>
                <span className={styles.metaValue}>
                  {SITE_CONFIG.contact.email}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}