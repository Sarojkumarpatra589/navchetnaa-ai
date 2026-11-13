import { WHY_CHOOSE_US } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import styles from "./WhyChooseUsSection.module.css";

export function WhyChooseUsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="WHY NAVCHETNAA AI"
          title="Disciplined Engineering. Zero Hype."
          description="We partner with organizations that value clean architecture, transparent communication, and software systems built to perform reliably in daily operations."
        />

        <div className={styles.grid}>
          {WHY_CHOOSE_US.map((item) => (
            <article key={item.number} className={styles.cell}>
              <div className={styles.number}>
                <span className={styles.numberBar} aria-hidden="true" />
                <span>PRINCIPLE {item.number}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}