import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HOME_ECOSYSTEM } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import styles from "./EcosystemSection.module.css";

export function EcosystemSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <SectionHeading
            eyebrow="APPLIED AI ECOSYSTEM"
            title="One Intelligent Ecosystem. Endless Possibilities."
            description="Six modular AI capabilities engineered to work independently or connect into a unified operational layer across voice, web, messaging, and CRM."
          />
          <Button href="/ai-solutions" variant="primary">
            <span>Explore AI Solutions</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className={styles.grid}>
          {HOME_ECOSYSTEM.map((item) => (
            <Link
              key={item.slug}
              href={`/ai-solutions/${item.slug}`}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <div className={styles.codeRow}>
                  <span className={styles.nodeCode}>{item.code}</span>
                  <span className={styles.nodeDot} aria-hidden="true" />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>

              <span className={styles.footerLink}>
                <span>Inspect Architecture</span>
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}