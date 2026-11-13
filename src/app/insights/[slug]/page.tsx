import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/site";
import { INSIGHTS_DATA, getInsightBySlug } from "@/data/insights";
import { SERVICES_DATA } from "@/data/services";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/common/CTASection";
import styles from "@/components/insights/InsightDetail.module.css";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Article Not Found",
      description: "The requested insight article could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    ogImage: article.coverImage,
  });
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = INSIGHTS_DATA.filter((item) =>
    article.relatedArticleSlugs.includes(item.slug)
  );
  const relatedServices = SERVICES_DATA.filter((svc) =>
    article.relatedServiceSlugs.includes(svc.slug)
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE_CONFIG.url}${article.coverImage}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/insights/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <PageHero
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
        eyebrow={`${article.category.toUpperCase()} // ${article.readTime.toUpperCase()}`}
        title={article.title}
        description={`By ${article.author.name} (${article.author.role}) • Published ${formatDate(article.publishedAt)}`}
        imageSrc={article.coverImage}
        imageAlt={article.coverAlt}
      />

      {/* Main Article Body + Sticky Table of Contents */}
      <section className={styles.section}>
        <Container>
          <div className={styles.articleLayout}>
            {/* Table of Contents */}
            <aside className={styles.tocSidebar} aria-label="Table of Contents">
              <div className={styles.tocTitle}>TABLE OF CONTENTS</div>
              <ul className={styles.tocList}>
                {article.sections.map((sec) => (
                  <li key={sec.id}>
                    <a href={`#${sec.id}`} className={styles.tocLink}>
                      {sec.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#article-conclusion" className={styles.tocLink}>
                    Key Takeaways &amp; Conclusion
                  </a>
                </li>
              </ul>
            </aside>

            {/* Long-Form Content */}
            <article className={styles.articleBody}>
              <p className={styles.introLead}>{article.introduction}</p>

              {article.sections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className={styles.proseSection}
                >
                  <h2 className={styles.sectionHeading}>{sec.heading}</h2>

                  {sec.paragraphs.map((para) => (
                    <p key={para} className={styles.paragraph}>
                      {para}
                    </p>
                  ))}

                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className={styles.bulletList}>
                      {sec.bullets.map((bullet) => (
                        <li key={bullet} className={styles.bulletItem}>
                          <span className={styles.bulletPip} aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.exampleTitle && sec.exampleBody && (
                    <div className={styles.exampleCallout}>
                      <span className={styles.exampleTitle}>
                        {sec.exampleTitle}
                      </span>
                      <p className={styles.exampleText}>{sec.exampleBody}</p>
                    </div>
                  )}
                </section>
              ))}

              {/* Conclusion */}
              <div id="article-conclusion" className={styles.conclusionBox}>
                <span className={styles.exampleTitle}>CONCLUSION</span>
                <p className={styles.paragraph}>{article.conclusion}</p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Related Articles & Related Services */}
      <section className={styles.sectionSoft}>
        <Container>
          {relatedArticles.length > 0 && (
            <div style={{ marginBottom: "4rem" }}>
              <SectionHeading
                eyebrow="CONTINUE READING"
                title="Related Insights & Articles."
              />
              <div className={styles.relatedGrid}>
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/insights/${rel.slug}`}
                    className={styles.relatedCard}
                  >
                    <div>
                      <div className={styles.metaRow}>
                        <span>{rel.category}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h3 className={styles.cardTitle}>{rel.title}</h3>
                      <p className={styles.excerpt}>{rel.excerpt}</p>
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                      }}
                    >
                      <span>Read Article</span>
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedServices.length > 0 && (
            <div>
              <SectionHeading
                eyebrow="APPLIED ENGINEERING"
                title="Related NAVCHETNAA AI Services."
              />
              <div className={styles.relatedGrid}>
                {relatedServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className={styles.relatedCard}
                  >
                    <div>
                      <span className={styles.metaRow}>ENGINEERING SERVICE</span>
                      <h3 className={styles.cardTitle}>{svc.title}</h3>
                      <p className={styles.excerpt}>{svc.summary}</p>
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                      }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}