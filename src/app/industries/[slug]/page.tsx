import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, AlertCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/data/industries";
import { PRODUCTS_DATA } from "@/data/products";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/industries/IndustryDetail.module.css";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return buildMetadata({
      title: "Industry Not Found",
      description: "The requested industry page could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${industry.name} AI & Software Solutions | NAVCHETNAA AI`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
    ogImage: industry.heroImage,
  });
}

export default async function IndustryDetailPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relevantProducts = PRODUCTS_DATA.filter((prod) =>
    industry.relevantProductSlugs.includes(prod.slug)
  );

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        eyebrow={`INDUSTRY // ${industry.name.toUpperCase()}`}
        title={industry.name}
        description={industry.tagline}
        imageSrc={industry.heroImage}
        imageAlt={industry.heroAlt}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Discuss a {industry.name} Project</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/industries" variant="secondary">
              <span>All Industries</span>
            </Button>
          </>
        }
      />

      {/* Industry Introduction & Challenges */}
      <section className={styles.section}>
        <Container>
          <div className={styles.twoColGrid}>
            <Reveal className={styles.box}>
              <span className={styles.monoCode}>SECTOR CONTEXT</span>
              <h2 className={styles.boxTitle}>
                Digital &amp; AI Transformation in {industry.name}
              </h2>
              <p className={styles.prose}>{industry.introduction}</p>
            </Reveal>

            <Reveal delay={0.08} className={styles.box}>
              <span className={styles.monoCode}>OPERATIONAL CHALLENGES</span>
              <h2 className={styles.boxTitle}>
                Common Bottlenecks We Solve
              </h2>
              <ul className={styles.checkList}>
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className={styles.checkItem}>
                    <AlertCircle
                      size={17}
                      style={{
                        color: "var(--color-dark-text)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Technology Solutions */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="TAILORED ARCHITECTURE"
            title={`Technology Solutions for ${industry.name}.`}
          />
          <div className={styles.gridThree}>
            {industry.solutions.map((sol, idx) => (
              <Reveal key={sol.title} delay={idx * 0.05} className={styles.box}>
                <span className={styles.monoCode}>SOLUTION // 0{idx + 1}</span>
                <h3 className={styles.boxTitle}>{sol.title}</h3>
                <p className={styles.prose} style={{ fontSize: "0.94rem" }}>
                  {sol.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Example Workflows */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="APPLIED WORKFLOWS"
            title={`Example Automation & Software Workflows in ${industry.name}.`}
          />
          <div className={styles.workflowStack}>
            {industry.exampleWorkflows.map((wf, idx) => (
              <Reveal
                key={wf.title}
                delay={idx * 0.06}
                className={styles.workflowCard}
              >
                <span className={styles.monoCode}>WORKFLOW BLUEPRINT 0{idx + 1}</span>
                <h3 className={styles.boxTitle}>{wf.title}</h3>
                <ol className={styles.stepList}>
                  {wf.steps.map((stepText, stepIdx) => (
                    <li key={stepText} className={styles.stepRow}>
                      <span className={styles.stepNum}>0{stepIdx + 1}</span>
                      <span>{stepText}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Relevant Products & Technology Stack */}
      <section className={styles.sectionSoft}>
        <Container>
          {relevantProducts.length > 0 && (
            <div style={{ marginBottom: "4rem" }}>
              <SectionHeading
                eyebrow="RELEVANT PLATFORMS"
                title={`NAVCHETNAA AI Products for ${industry.name}.`}
              />
              <div className={styles.gridThree}>
                {relevantProducts.map((prod) => (
                  <Link
                    key={prod.slug}
                    href={`/products/${prod.slug}`}
                    className={styles.box}
                  >
                    <span className={styles.monoCode}>{prod.statusLabel}</span>
                    <h3 className={styles.boxTitle}>{prod.name}</h3>
                    <p className={styles.prose} style={{ fontSize: "0.92rem" }}>
                      {prod.summary}
                    </p>
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
                      <span>Explore Product</span>
                      <ArrowRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <SectionHeading
              eyebrow="TECHNOLOGY STACK"
              title="Recommended Engineering Stack."
            />
            <div className={styles.techStrip}>
              {industry.techStack.map((tech) => (
                <span key={tech} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industry FAQs */}
      <section className={styles.section}>
        <Container>
          <div style={{ marginBottom: "2.5rem" }}>
            <SectionHeading
              eyebrow="INDUSTRY FAQS"
              title={`Common Questions for ${industry.name} Organizations.`}
            />
          </div>
          <FAQAccordion items={industry.faqs} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}