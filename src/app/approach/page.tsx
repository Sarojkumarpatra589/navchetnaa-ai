import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_ASSETS } from "@/data/assets";
import { APPROACH_PILLARS } from "@/data/company";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/styles/editorial.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Our Approach | Business-First Applied AI & Software Architecture",
  description:
    "Discover how NAVCHETNAA AI combines workflow diagnosis, deterministic software engineering, bounded AI guardrails, and API-first integration.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Approach" },
        ]}
        eyebrow="ENGINEERING APPROACH"
        title="Business-First Architecture. Applied Intelligence."
        description="We reject one-size-fits-all templates and hype-driven AI experiments. Every solution starts with operational clarity, clean data foundations, and measurable workflow impact."
        imageSrc={SITE_ASSETS.about.approach.src}
        imageAlt={SITE_ASSETS.about.approach.alt}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Discuss Your Architecture</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/process" variant="secondary">
              <span>See Delivery Process</span>
            </Button>
          </>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="FOUR ARCHITECTURAL PILLARS"
            title="How We Solve Complex Operational Problems."
            description="A disciplined engineering framework designed to eliminate fragile prototypes and deliver software that performs reliably every day."
          />

          <div className={styles.stageList}>
            {APPROACH_PILLARS.map((pillar, idx) => (
              <Reveal
                key={pillar.number}
                delay={idx * 0.06}
                className={styles.pillarRow}
              >
                <div className={styles.proseStack}>
                  <span className={styles.monoCode}>PILLAR // {pillar.number}</span>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardBody}>
                    <strong>The Common Pitfall:</strong> {pillar.problem}
                  </p>
                </div>

                <div className={styles.subBox}>
                  <span className={styles.subBoxLabel}>
                    NAVCHETNAA AI ENGINEERING STANDARD
                  </span>
                  <p className={styles.cardBody}>{pillar.howWeSolve}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="ARCHITECT WITH CONFIDENCE"
        title="Have a Complex Workflow or Product Idea?"
        description="Let's map your operational requirements and design a clean, scalable technical architecture."
      />
    </>
  );
}