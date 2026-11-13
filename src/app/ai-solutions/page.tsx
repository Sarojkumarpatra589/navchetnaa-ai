import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { AI_SOLUTIONS_DATA } from "@/data/aiSolutions";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/ai-solutions/SolutionDetail.module.css";

export const metadata: Metadata = buildMetadata({
  title: "AI Solutions | Receptionists, Sales Agents, Support & Automation",
  description:
    "Explore NAVCHETNAA AI's six connected AI solutions: AI Receptionist, AI Sales Agents, AI Customer Support, Workflow Automation, AI Chatbots, and CRM Automation.",
  path: "/ai-solutions",
});

export default function AISolutionsOverviewPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "AI Solutions" }]}
        eyebrow="APPLIED AI ECOSYSTEM"
        title="One Intelligent Ecosystem. Endless Possibilities."
        description="Six modular, knowledge-grounded AI systems designed to automate phone reception, lead qualification, customer support, and cross-platform workflows."
        actions={
          <Button href="/contact" variant="primary">
            <span>Deploy an AI Solution</span>
            <ArrowUpRight size={16} />
          </Button>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "3rem" }}>
            <SectionHeading
              eyebrow="SIX CONNECTED AI MODULES"
              title="Practical Artificial Intelligence Engineered for Daily Operations."
              description="Deploy a single high-impact AI agent or connect multiple modules into a synchronized operational backbone."
            />
          </div>

          <div className={styles.overviewGrid}>
            {AI_SOLUTIONS_DATA.map((solution, idx) => (
              <Reveal key={solution.slug} delay={idx * 0.05}>
                <article className={styles.solutionCard}>
                  <div className={styles.mediaBox}>
                    <Image
                      src={solution.heroImage}
                      alt={solution.heroAlt}
                      width={720}
                      height={420}
                      className={styles.coverImg}
                    />
                    <span className={styles.nodeBadge}>
                      AI NODE // 0{idx + 1}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div>
                      <h2 className={styles.cardTitle}>{solution.title}</h2>
                      <p className={styles.cardSummary}>{solution.summary}</p>
                    </div>

                    <div>
                      <div className={styles.miniWorkflow}>
                        {solution.workflowNodes.map((node) => (
                          <span key={node.id} className={styles.miniNode}>
                            {node.label}
                          </span>
                        ))}
                      </div>

                      <div style={{ marginTop: "1.25rem" }}>
                        <Button
                          href={`/ai-solutions/${solution.slug}`}
                          variant="primary"
                          size="sm"
                        >
                          <span>Inspect {solution.title}</span>
                          <ArrowUpRight size={15} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}