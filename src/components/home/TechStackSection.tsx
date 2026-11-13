import { TECH_STACK_ITEMS } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import styles from "./TechStackSection.module.css";

export function TechStackSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="PRODUCTION TECHNOLOGY STACK"
          title="Modern, Proven Engineering Foundations."
          description="We build on battle-tested backend frameworks, reactive frontend runtimes, applied AI models, relational/vector databases, and cloud infrastructure."
        />

        <div className={styles.grid}>
          {TECH_STACK_ITEMS.map((tech) => (
            <div key={tech.name} className={styles.techCard}>
              <div className={styles.techHeader}>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techPip} aria-hidden="true" />
              </div>
              <span className={styles.techCategory}>{tech.category}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}