import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_INDUSTRIES } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import styles from "./IndustriesSection.module.css";

export function IndustriesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <SectionHeading
            eyebrow="INDUSTRIES WE SERVE"
            title="Applied AI & Custom Systems Across 10 Core Sectors."
            description="Domain-aware software architectures designed around the compliance, operational speed, and customer engagement demands of each industry."
          />
          <Button href="/industries" variant="secondary">
            <span>Explore All Industries</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <div className={styles.grid}>
          {HOME_INDUSTRIES.map((industry, idx) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className={styles.industryCard}
            >
              <div className={styles.topRow}>
                <span className={styles.indexText}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight size={15} className={styles.arrow} />
              </div>

              <div>
                <h3 className={styles.name}>{industry.name}</h3>
                <p className={styles.focus}>{industry.focus}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}