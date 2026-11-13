import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { INSIGHTS_DATA } from "@/data/insights";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/insights/InsightDetail.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Insights & Engineering Perspectives | NAVCHETNAA AI",
  description:
    "Read technical perspectives and practical guides on applied AI, AI receptionists, custom software architecture, workflow automation, and institutional management systems.",
  path: "/insights",
});

export default function InsightsOverviewPage() {
  const [featuredArticle, ...remainingArticles] = INSIGHTS_DATA;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="INSIGHTS & ENGINEERING NOTES"
        title="Practical Perspectives on Applied AI & Software Architecture."
        description="In-depth guides on AI receptionists, business automation, custom vs. off-the-shelf software, digital transformation, and connected institutional systems."
      />

      <section className={styles.sectionSoft}>
        <Container>
          {/* Featured Article */}
          {featuredArticle && (
            <Reveal>
              <article className={styles.featuredCard}>
                <div className={styles.featuredMedia}>
                  <Image
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.coverAlt}
                    width={820}
                    height={540}
                    priority
                    className={styles.coverImg}
                  />
                </div>

                <div className={styles.featuredBody}>
                  <div>
                    <div className={styles.metaRow}>
                      <span className={styles.categoryPill}>
                        {featuredArticle.category}
                      </span>
                      <span>{formatDate(featuredArticle.publishedAt)}</span>
                      <span>•</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <h2
                      className={styles.cardTitle}
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                    >
                      {featuredArticle.title}
                    </h2>
                    <p className={styles.excerpt}>{featuredArticle.excerpt}</p>
                  </div>

                  <div className={styles.authorFooter}>
                    <div>
                      <div className={styles.authorName}>
                        {featuredArticle.author.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--color-muted-text)" }}>
                        {featuredArticle.author.role}
                      </div>
                    </div>

                    <Button
                      href={`/insights/${featuredArticle.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      <span>Read Article</span>
                      <ArrowUpRight size={15} />
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          )}

          {/* Remaining 5 Articles */}
          <div style={{ marginBottom: "2.5rem" }}>
            <SectionHeading
              eyebrow="ALL PUBLICATIONS"
              title="Explore More Engineering Guides."
            />
          </div>

          <div className={styles.articlesGrid}>
            {remainingArticles.map((article, idx) => (
              <Reveal key={article.slug} delay={idx * 0.05}>
                <article className={styles.articleCard}>
                  <div className={styles.cardMedia}>
                    <Image
                      src={article.coverImage}
                      alt={article.coverAlt}
                      width={720}
                      height={420}
                      className={styles.cardImg}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div>
                      <div className={styles.metaRow}>
                        <span className={styles.categoryPill}>
                          {article.category}
                        </span>
                        <span>{formatDate(article.publishedAt)}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.excerpt}>{article.excerpt}</p>
                    </div>

                    <div className={styles.authorFooter}>
                      <span className={styles.authorName}>
                        By {article.author.name}
                      </span>

                      <Link
                        href={`/insights/${article.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                        }}
                      >
                        <span>Read</span>
                        <ArrowRight size={15} />
                      </Link>
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