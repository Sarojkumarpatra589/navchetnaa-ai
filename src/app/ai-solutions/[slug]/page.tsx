import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { AI_SOLUTIONS_DATA, getAISolutionBySlug } from "@/data/aiSolutions";
import { SERVICES_DATA } from "@/data/services";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/ai-solutions/SolutionDetail.module.css";

interface AISolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AI_SOLUTIONS_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: AISolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getAISolutionBySlug(slug);

  if (!solution) {
    return buildMetadata({
      title: "AI Solution Not Found",
      description: "The requested AI solution page could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${solution.title} | Applied AI Solutions by NAVCHETNAA AI`,
    description: solution.summary,
    path: `/ai-solutions/${solution.slug}`,
    ogImage: solution.heroImage,
  });
}

export default async function AISolutionDetailPage({
  params,
}: AISolutionPageProps) {
  const { slug } = await params;
  const solution = getAISolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter((svc) =>
    solution.relatedServiceSlugs.includes(svc.slug)
  );

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "AI Solutions", href: "/ai-solutions" },
          { label: solution.title },
        ]}
        eyebrow="APPLIED AI SOLUTION"
        title={solution.title}
        description={solution.tagline}
        imageSrc={solution.heroImage}
        imageAlt={solution.heroAlt}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Implement {solution.title}</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/ai-solutions" variant="secondary">
              <span>All AI Solutions</span>
            </Button>
          </>
        }
      />

      {/* Business Problem vs AI-Powered Solution */}
      <section className={styles.section}>
        <Container>
          <div className={styles.twoColGrid}>
            <Reveal className={styles.box}>
              <span className={styles.monoLabel}>THE BUSINESS PROBLEM</span>
              <h2 className={styles.boxTitle}>Why Manual Processes Break Down</h2>
              <p className={styles.prose}>{solution.problem}</p>
            </Reveal>

            <Reveal delay={0.08} className={`${styles.box} ${styles.boxAccent}`}>
              <span className={styles.monoLabel}>AI-POWERED SOLUTION</span>
              <h2 className={styles.boxTitle}>
                How NAVCHETNAA AI Solves It
              </h2>
              <p className={styles.prose}>{solution.solution}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Workflow Visualisation */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="SYSTEM WORKFLOW VISUALISATION"
            title="End-to-End Signal & Data Pipeline."
            description="How inputs move through retrieval, reasoning, validation, and live business system synchronization."
          />

          <div className={styles.workflowPipeline}>
            {solution.workflowNodes.map((node, index) => (
              <Reveal
                key={node.id}
                delay={index * 0.06}
                className={styles.workflowNodeCard}
              >
                <span className={styles.workflowStepTag}>
                  STAGE 0{index + 1}
                </span>
                <div>
                  <h3 className={styles.workflowNodeTitle}>{node.label}</h3>
                  <p
                    className={styles.workflowNodeDetail}
                    style={{ marginTop: "0.45rem" }}
                  >
                    {node.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="OPERATIONAL MECHANICS"
            title={`How ${solution.title} Works in Practice.`}
          />
          <div className={styles.gridFour}>
            {solution.howItWorks.map((item, idx) => (
              <Reveal
                key={item.step}
                delay={idx * 0.05}
                className={styles.featureCardSoft}
              >
                <span className={styles.stepBadge}>{item.step}</span>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDesc}>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Features & Integrations */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="CAPABILITIES & INTEGRATIONS"
            title="Engineered for Control, Accuracy & Ecosystem Sync."
          />
          <div className={styles.gridTwo}>
            {solution.features.map((feat, idx) => (
              <Reveal
                key={feat.title}
                delay={idx * 0.05}
                className={styles.featureCard}
              >
                <span className={styles.monoLabel}>FEATURE // 0{idx + 1}</span>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.description}</p>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: "3.5rem" }}>
            <span className={styles.monoLabel}>SUPPORTED INTEGRATIONS</span>
            <div className={styles.integrationsStrip}>
              {solution.integrations.map((intItem) => (
                <span key={intItem} className={styles.integrationPill}>
                  {intItem}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Use Cases */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="SECTOR APPLICATIONS"
            title={`Where Organizations Deploy ${solution.title}.`}
          />
          <div className={styles.gridThree}>
            {solution.useCases.map((uc, idx) => (
              <Reveal
                key={uc.industry}
                delay={idx * 0.05}
                className={styles.featureCardSoft}
              >
                <span className={styles.monoLabel}>{uc.industry}</span>
                <p className={styles.featureDesc}>{uc.application}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "2.5rem" }}>
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title={`Questions About ${solution.title}.`}
            />
          </div>
          <FAQAccordion items={solution.faqs} />
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className={styles.section}>
          <Container>
            <SectionHeading
              eyebrow="UNDERLYING ENGINEERING"
              title="Related Engineering Services."
            />
            <div className={styles.gridThree}>
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className={styles.featureCardSoft}
                >
                  <span className={styles.monoLabel}>SERVICE</span>
                  <h3 className={styles.featureTitle}>{svc.title}</h3>
                  <p className={styles.featureDesc}>{svc.summary}</p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}