import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS_DATA, getProductBySlug } from "@/data/products";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import { ProductDashboardMockup } from "@/components/products/ProductDashboardMockup";
import styles from "@/components/products/ProductDetail.module.css";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product page could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${product.name} | Software Products by NAVCHETNAA AI`,
    description: product.summary,
    path: `/products/${product.slug}`,
    ogImage: product.heroImage,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        eyebrow={product.statusLabel}
        title={product.name}
        description={product.tagline}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Request Demo &amp; Configuration</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/products" variant="secondary">
              <span>All Products</span>
            </Button>
          </>
        }
      />

      {/* Product Overview & Original Dashboard Mockup */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="PRODUCT OVERVIEW"
            title={`Inside ${product.name}.`}
            description={product.overview}
          />

          <div style={{ marginTop: "3rem" }}>
            <ProductDashboardMockup slug={product.slug} />
          </div>
        </Container>
      </section>

      {/* Supported Institutions & 18 Modules (Rendered for CollegeOS) */}
      {product.supportedInstitutions && product.modules && (
        <section className={styles.sectionSoft}>
          <Container>
            <SectionHeading
              eyebrow="ACADEMIC SCOPE & MODULES"
              title="Built for Diverse Educational Programs & Complete Campus Governance."
              description="CollegeOS adapts to institutional hierarchies across secondary, degree, technical, postgraduate, and doctoral programs."
            />

            <div style={{ marginTop: "2.5rem" }}>
              <span className={styles.monoCode}>
                SUPPORTED INSTITUTIONAL PROGRAMS ({product.supportedInstitutions.length})
              </span>
              <div className={styles.chipGrid}>
                {product.supportedInstitutions.map((prog) => (
                  <span key={prog} className={styles.moduleChip}>
                    <span className={styles.moduleDot} aria-hidden="true" />
                    <span>{prog}</span>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <span className={styles.monoCode}>
                INTEGRATED CAMPUS MODULES ({product.modules.length})
              </span>
              <div className={styles.chipGrid}>
                {product.modules.map((mod) => (
                  <span key={mod} className={styles.moduleChip}>
                    <span className={styles.moduleDot} aria-hidden="true" />
                    <span>{mod}</span>
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Problems Solved & Business Benefits */}
      <section className={styles.section}>
        <Container>
          <div className={styles.twoColGrid}>
            <Reveal className={styles.cardSoft}>
              <span className={styles.monoCode}>PROBLEMS SOLVED</span>
              <h2 className={styles.cardTitle} style={{ fontSize: "1.35rem" }}>
                Operational Bottlenecks Eliminated
              </h2>
              <ul className={styles.checkList}>
                {product.problemsSolved.map((prob) => (
                  <li key={prob} className={styles.checkItem}>
                    <AlertCircle
                      size={17}
                      style={{
                        color: "var(--color-dark-text)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className={styles.cardSoft}>
              <span className={styles.monoCode}>BUSINESS BENEFITS</span>
              <h2 className={styles.cardTitle} style={{ fontSize: "1.35rem" }}>
                Why Organizations Adopt {product.name}
              </h2>
              <ul className={styles.checkList}>
                {product.benefits.map((benefit) => (
                  <li key={benefit} className={styles.checkItem}>
                    <Check
                      size={17}
                      style={{
                        color: "var(--color-emerald-deep)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core Platform Features */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="PLATFORM CAPABILITIES"
            title={`Core Features of ${product.name}.`}
          />
          <div className={styles.gridThree}>
            {product.features.map((feat, idx) => (
              <Reveal key={feat.title} delay={idx * 0.04} className={styles.card}>
                <span className={styles.monoCode}>
                  MODULE // {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{feat.title}</h3>
                <p className={styles.cardDesc}>{feat.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* User Roles & Permissions */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="ROLE-BASED GOVERNANCE"
            title="Structured User Roles & Access Portals."
          />
          <div className={styles.gridThree}>
            {product.userRoles.map((roleObj, idx) => (
              <Reveal
                key={roleObj.role}
                delay={idx * 0.04}
                className={styles.cardSoft}
              >
                <span className={styles.monoCode}>ROLE // 0{idx + 1}</span>
                <h3 className={styles.cardTitle}>{roleObj.role}</h3>
                <p className={styles.cardDesc}>{roleObj.permissions}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow & Integrations */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="OPERATIONAL WORKFLOW"
            title="How Deployment & Daily Execution Work."
          />
          <div className={styles.gridFour}>
            {product.workflow.map((step) => (
              <div key={step.stepNumber} className={styles.card}>
                <span className={styles.stepBadge}>{step.stepNumber}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3.5rem" }}>
            <span className={styles.monoCode}>SUPPORTED INTEGRATIONS</span>
            <div className={styles.chipGrid}>
              {product.integrations.map((item) => (
                <span key={item} className={styles.moduleChip}>
                  <span className={styles.moduleDot} aria-hidden="true" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Product FAQs */}
      <section className={styles.section}>
        <Container>
          <div style={{ marginBottom: "2.5rem" }}>
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title={`Questions About ${product.name}.`}
            />
          </div>
          <FAQAccordion items={product.faqs} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}