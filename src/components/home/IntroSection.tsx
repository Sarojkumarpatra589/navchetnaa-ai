import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import styles from "./IntroSection.module.css";

const PHILOSOPHY_PILLARS = [
  {
    index: "01 // CLARITY",
    title: "Outcome-Driven Architecture",
    description:
      "Every technical decision—from database indexing to AI model selection—is mapped directly to measurable operational speed, reliability, and usability.",
  },
  {
    index: "02 // PRECISION",
    title: "Deterministic + Probabilistic Harmony",
    description:
      "We pair rock-solid full-stack engineering with bounded, knowledge-grounded AI so your systems remain predictable, auditable, and safe in production.",
  },
  {
    index: "03 // LONGEVITY",
    title: "Built to Evolve Without Rewrites",
    description:
      "Clean modular codebases, documented APIs, and cloud-native infrastructure let your organization add new modules and AI agents effortlessly over time.",
  },
];

export function IntroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <SectionHeading
              eyebrow="ENGINEERING PHILOSOPHY"
              title="Turning Complex Challenges Into Intelligent Solutions."
            />

            <div className={styles.proseGroup}>
              <p className={styles.prose}>
                Modern organizations rarely suffer from a lack of software—they
                suffer from disconnected tools, manual repetitive bottlenecks,
                and rigid platforms that fail to adapt to real-world operations.
              </p>
              <p className={styles.prose}>
                At <strong>NAVCHETNAA AI</strong>, we approach technology as an
                engineering discipline grounded in business reality. Before
                writing a single line of code, we map how information, customers,
                and decisions move across your organization—then engineer
                tailored software and applied AI systems that make those
                workflows faster, clearer, and scalable.
              </p>
            </div>

            <div className={styles.linkRow}>
              <Link href="/approach" className={styles.inlineLink}>
                <span>Explore Our Engineering Approach</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.pillarsGrid}>
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <article key={pillar.index} className={styles.pillarCard}>
                <div className={styles.pillarTop}>
                  <span className={styles.pillarIndex}>{pillar.index}</span>
                  <span className={styles.pillarAccent} aria-hidden="true" />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}