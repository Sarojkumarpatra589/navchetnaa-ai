import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HOME_PORTFOLIO_PREVIEW } from "@/data/homepage";
import { SITE_ASSETS } from "@/data/assets";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import styles from "./PortfolioPreviewSection.module.css";

export function PortfolioPreviewSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <SectionHeading
            eyebrow="ARCHITECTURE & CASE BLUEPRINTS"
            title="Selected Systems & Solution Architectures."
            description="Explore our demonstration systems, platform blueprints, and architectural case studies across AI automation, institutional ERP, and enterprise operations."
          />
          <Button href="/portfolio" variant="secondary">
            <span>Explore Full Portfolio</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className={styles.grid}>
          {HOME_PORTFOLIO_PREVIEW.map((project) => {
            const asset =
              SITE_ASSETS.portfolio[
                project.slug as keyof typeof SITE_ASSETS.portfolio
              ];

            return (
              <article key={project.slug} className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    width={640}
                    height={400}
                    className={styles.image}
                  />
                  <span className={styles.classificationTag}>
                    {project.classification}
                  </span>
                </div>

                <div className={styles.body}>
                  <div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.summary}>{project.summary}</p>
                  </div>

                  <div>
                    <div className={styles.stackRow}>
                      {project.stack.map((tech) => (
                        <span key={tech} className={styles.stackChip}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className={styles.link}
                    >
                      <span>Read Technical Breakdown</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}