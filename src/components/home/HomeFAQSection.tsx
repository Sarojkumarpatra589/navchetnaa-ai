import { ArrowUpRight } from "lucide-react";
import { HOME_FAQS } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { Button } from "@/components/common/Button";
import styles from "./HomeFAQSection.module.css";

export function HomeFAQSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <SectionHeading
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Clear Answers Before You Build."
              description="Everything you need to know about our engineering approach, AI capabilities, intellectual property ownership, and ongoing support."
            />
            <div>
              <Button href="/contact" variant="secondary">
                <span>Ask a Specific Question</span>
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          <div>
            <FAQAccordion items={HOME_FAQS} />
          </div>
        </div>
      </Container>
    </section>
  );
}