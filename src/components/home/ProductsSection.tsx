import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { HOME_PRODUCTS } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import styles from "./ProductsSection.module.css";

export function ProductsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <SectionHeading
            eyebrow="PROPRIETARY PLATFORMS"
            title="Beyond Services. We Build Digital Products."
            description="Alongside bespoke client engineering, NAVCHETNAA AI architects configurable software products designed to solve recurring industry challenges."
          />
          <Button href="/products" variant="secondary">
            <span>View All Products</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className={styles.grid}>
          {HOME_PRODUCTS.map((product) => (
            <article key={product.slug} className={styles.productCard}>
              <div>
                <span className={styles.categoryBadge}>{product.category}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.summary}>{product.summary}</p>
              </div>

              <div>
                <ul className={styles.highlightsList}>
                  {product.highlights.map((item) => (
                    <li key={item} className={styles.highlightItem}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "1.25rem" }}>
                  <Link
                    href={`/products/${product.slug}`}
                    className={styles.ctaLink}
                  >
                    <span>Explore {product.name}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}