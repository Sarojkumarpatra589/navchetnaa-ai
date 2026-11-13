import { ArrowUpRight } from "lucide-react";
import { METHODOLOGY_STAGES } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import styles from "./MethodologySection.module.css";

export function MethodologySection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerRow}>
          <SectionHeading
            eyebrow="OUR METHODOLOGY"
            title="Seven Structured Stages From Concept to Scale."
            description="A transparent, milestone-driven delivery workflow that eliminates guesswork and keeps stakeholders aligned at every phase."
          />
          <Button href="/process" variant="secondary">
            <span>Detailed Delivery Process</span>
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <ol className={styles.pipeline}>
          {METHODOLOGY_STAGES.map((stage) => (
            <li key={stage.step} className={styles.stageCard}>
              <div className={styles.stageTop}>
                <span className={styles.stepBadge}>{stage.step}</span>
              </div>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDesc}>{stage.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}