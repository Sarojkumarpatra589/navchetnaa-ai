import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SITE_ASSETS } from "@/data/assets";
import { DETAILED_PROCESS_STAGES } from "@/data/company";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/styles/editorial.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Our Process | 7-Stage Software & AI Engineering Lifecycle",
  description:
    "Explore NAVCHETNAA AI's seven-stage delivery methodology: Discover, Plan, Design, Develop, Test, Launch, and Support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Process" },
        ]}
        eyebrow="DELIVERY METHODOLOGY"
        title="Seven Disciplined Stages. Predictable Execution."
        description="From initial operational discovery to production deployment and post-launch optimization, every engagement follows a structured, milestone-verified lifecycle."
        imageSrc={SITE_ASSETS.about.process.src}
        imageAlt={SITE_ASSETS.about.process.alt}
        actions={
          <Button href="/contact" variant="primary">
            <span>Start Discovery</span>
            <ArrowUpRight size={16} />
          </Button>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="END-TO-END LIFECYCLE"
            title="Discover → Plan → Design → Develop → Test → Launch → Support"
            description="Clear deliverables and transparent technical checkpoints at every stage so your team always knows what is being built and why."
          />

          <div className={styles.stageList}>
            {DETAILED_PROCESS_STAGES.map((stage, idx) => (
              <Reveal
                key={stage.step}
                delay={idx * 0.04}
                className={styles.stageItem}
              >
                <div className={styles.stageNumber}>{stage.step}</div>

                <div className={styles.proseStack}>
                  <span className={styles.monoCode}>{stage.subtitle}</span>
                  <h3 className={styles.cardTitle}>{stage.title}</h3>
                  <p className={styles.cardBody}>{stage.description}</p>
                </div>

                <div className={styles.deliverablesBox}>
                  <div className={styles.deliverablesTitle}>
                    KEY STAGE DELIVERABLES
                  </div>
                  <ul className={styles.deliverablesList}>
                    {stage.deliverables.map((item) => (
                      <li key={item} className={styles.deliverableItem}>
                        <Check
                          size={15}
                          style={{
                            color: "var(--color-emerald-deep)",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}