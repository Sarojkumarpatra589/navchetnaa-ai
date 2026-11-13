import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PRODUCTS_DATA } from "@/data/products";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/products/ProductDetail.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Products | NAVCHETNAA AI Receptionist, CollegeOS & BizConnect",
  description:
    "Explore proprietary software platforms engineered by NAVCHETNAA AI: NAVCHETNAA AI Receptionist, CollegeOS institutional ERP, and BizConnect B2B directory.",
  path: "/products",
});

export default function ProductsOverviewPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Products" }]}
        eyebrow="PROPRIETARY SOFTWARE PLATFORMS"
        title="Beyond Services. We Build Digital Products."
        description="Configurable platforms architected in-house by NAVCHETNAA AI to streamline voice communications, academic governance, and B2B industry discovery."
        actions={
          <Button href="/contact" variant="primary">
            <span>Request a Product Walkthrough</span>
            <ArrowUpRight size={16} />
          </Button>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "3rem" }}>
            <SectionHeading
              eyebrow="THREE FLAGSHIP PLATFORMS"
              title="Modular Products Built for Real Operational Governance."
              description="Inspect each product's architecture, supported roles, modules, and interactive interface preview below."
            />
          </div>

          <div className={styles.productsList}>
            {PRODUCTS_DATA.map((product, idx) => (
              <Reveal key={product.slug} delay={idx * 0.06}>
                <article className={styles.productBanner}>
                  <div>
                    <span className={styles.statusPill}>
                      {product.statusLabel}
                    </span>
                    <h2 className={styles.productTitle}>{product.name}</h2>
                    <p className={styles.productSummary}>{product.summary}</p>
                    <div style={{ marginTop: "1.5rem" }}>
                      <Button
                        href={`/products/${product.slug}`}
                        variant="primary"
                      >
                        <span>Explore {product.name}</span>
                        <ArrowUpRight size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className={styles.highlightsBox}>
                    <span className={styles.monoCode}>KEY CAPABILITIES</span>
                    <ul className={styles.checkList}>
                      {product.features.slice(0, 4).map((feat) => (
                        <li key={feat.title} className={styles.checkItem}>
                          <Check
                            size={17}
                            style={{
                              color: "var(--color-emerald-deep)",
                              flexShrink: 0,
                              marginTop: "3px",
                            }}
                          />
                          <span>
                            <strong>{feat.title}:</strong> {feat.description}
                          </span>
                        </li>
                      ))}
                    </ul>
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