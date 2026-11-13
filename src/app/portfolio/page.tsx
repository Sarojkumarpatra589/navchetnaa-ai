import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/portfolio/PortfolioDetail.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio & Case Blueprints | NAVCHETNAA AI",
  description:
    "Explore NAVCHETNAA AI's demonstration systems, platform blueprints, and solution architectures across AI Receptionists, CollegeOS, Fleet Management, Business CRM, and Custom Software.",
  path: "/portfolio",
});

export default function PortfolioOverviewPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Portfolio" }]}
        eyebrow="ARCHITECTURE & CASE STUDIES"
        title="System Blueprints & Applied Engineering Showcases."
        description="Inspect how we architect end-to-end AI receptionists, institutional management systems, fleet operations platforms, and custom business software."
        actions={
          <Button href="/contact" variant="primary">
            <span>Build a Similar System</span>
            <ArrowUpRight size={16} />
          </Button>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "2rem" }}>
            <SectionHeading
              eyebrow="FIVE ARCHITECTURAL CASE STUDIES"
              title="Detailed Technical Breakdowns."
            />
          </div>

          <div className={styles.noticeBar}>
            <strong>Engineering Transparency Note:</strong> Each showcase below
            is explicitly classified as a <em>Demonstration System</em>,{" "}
            <em>Platform Blueprint</em>, or <em>Concept Architecture</em> to
            illustrate our technical design standards without fabricated client
            metrics.
          </div>

          <div className={styles.projectsList}>
            {PORTFOLIO_DATA.map((project, idx) => (
              <Reveal key={project.slug} delay={idx * 0.05}>
                <article className={styles.projectCard}>
                  <div className={styles.mediaBox}>
                    <Image
                      src={project.heroImage}
                      alt={project.heroAlt}
                      width={720}
                      height={460}
                      className={styles.coverImg}
                    />
                    <span className={styles.classBadge}>
                      {project.classification}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div>
                      <span className={styles.categoryLabel}>
                        {project.category}
                      </span>
                      <h2 className={styles.cardTitle}>{project.title}</h2>
                      <p className={styles.cardSummary}>{project.summary}</p>
                    </div>

                    <div className={styles.stackRow}>
                      {project.techStack.map((tech) => (
                        <span key={tech} className={styles.stackTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Button
                        href={`/portfolio/${project.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        <span>Inspect Case Architecture</span>
                        <ArrowUpRight size={15} />
                      </Button>
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