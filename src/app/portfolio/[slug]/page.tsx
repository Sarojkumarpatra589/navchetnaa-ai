import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PORTFOLIO_DATA, getPortfolioBySlug } from "@/data/portfolio";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import { PortfolioSystemMockup } from "@/components/portfolio/PortfolioSystemMockup";
import styles from "@/components/portfolio/PortfolioDetail.module.css";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Case Study Not Found",
      description: "The requested portfolio case study could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${project.title} (${project.classification}) | NAVCHETNAA AI`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    ogImage: project.heroImage,
  });
}

export default async function PortfolioDetailPage({
  params,
}: PortfolioPageProps) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
        eyebrow={`${project.classification.toUpperCase()} // ${project.category.toUpperCase()}`}
        title={project.title}
        description={project.summary}
        imageSrc={project.heroImage}
        imageAlt={project.heroAlt}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Request Similar Architecture</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/portfolio" variant="secondary">
              <span>All Case Blueprints</span>
            </Button>
          </>
        }
      />

      {/* Project Overview & System Blueprint Schematic */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="PROJECT OVERVIEW"
            title="Architectural Scope & System Design."
            description={project.overview}
          />

          <div style={{ marginTop: "3rem" }}>
            <PortfolioSystemMockup
              slug={project.slug}
              classification={project.classification}
            />
          </div>
        </Container>
      </section>

      {/* Objectives & Technical Challenges */}
      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.twoColGrid}>
            <Reveal className={`${styles.box} ${styles.boxAccent}`}>
              <span className={styles.monoCode}>PROJECT OBJECTIVES</span>
              <h2 className={styles.boxTitle}>Core Engineering Goals</h2>
              <ul className={styles.checkList}>
                {project.objectives.map((obj) => (
                  <li key={obj} className={styles.checkItem}>
                    <Check
                      size={17}
                      style={{
                        color: "var(--color-emerald-deep)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className={styles.box}>
              <span className={styles.monoCode}>TECHNICAL CHALLENGES</span>
              <h2 className={styles.boxTitle}>
                Engineering Constraints Addressed
              </h2>
              <ul className={styles.checkList}>
                {project.challenges.map((ch) => (
                  <li key={ch} className={styles.checkItem}>
                    <AlertCircle
                      size={17}
                      style={{
                        color: "var(--color-dark-text)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Proposed Solution & Key Features */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="PROPOSED SOLUTION"
            title="How the System Is Engineered."
            description={project.proposedSolution}
          />

          <div className={styles.gridTwo}>
            {project.features.map((feat, idx) => (
              <Reveal
                key={feat.title}
                delay={idx * 0.05}
                className={styles.boxSoft}
              >
                <span className={styles.monoCode}>
                  COMPONENT // 0{idx + 1}
                </span>
                <h3 className={styles.boxTitle}>{feat.title}</h3>
                <p className={styles.prose} style={{ fontSize: "0.94rem" }}>
                  {feat.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack & Execution Workflow */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="TECHNOLOGY STACK"
            title="Core Technologies & Infrastructure."
          />
          <div
            className={styles.stackRow}
            style={{ marginTop: "1.5rem", marginBottom: "4rem" }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={styles.stackTag}
                style={{
                  padding: "0.6rem 1rem",
                  backgroundColor: "var(--color-white)",
                  borderColor: "var(--color-border-strong)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <SectionHeading
            eyebrow="SYSTEM WORKFLOW"
            title="End-to-End Operational Execution."
          />
          <div className={styles.gridFour}>
            {project.workflow.map((step) => (
              <div key={step.stepNumber} className={styles.box}>
                <span className={styles.stepBadge}>{step.stepNumber}</span>
                <h3 className={styles.boxTitle} style={{ fontSize: "1.12rem" }}>
                  {step.title}
                </h3>
                <p className={styles.prose} style={{ fontSize: "0.92rem" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}