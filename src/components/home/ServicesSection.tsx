import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_SERVICES } from "@/data/homepage";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { StackedServicesAnimator } from "@/components/animations/StackedServicesAnimator";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section className={styles.section} data-services-pin-section>
      <StackedServicesAnimator />
      <Container>
        <div className={styles.layout}>
          <div className={styles.stickyIntro}>
            <SectionHeading
              eyebrow="CORE ENGINEERING SERVICES"
              title="Technology Solutions. Designed Around Your Ambition."
              description="Seven specialized engineering disciplines—from applied AI agents and voice receptionists to custom enterprise software, mobile apps, and cloud infrastructure."
            />

            <div className={styles.stackHint}>
              <span className={styles.stackHintDot} aria-hidden="true" />
              <span>SCROLL TO STEP THROUGH ALL 07 SERVICES</span>
            </div>

            <div>
              <Button href="/services" variant="secondary">
                <span>View All 7 Services</span>
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          <div className={styles.cardsStage} data-services-stack-container>
            {HOME_SERVICES.map((service) => (
              <article
                key={service.slug}
                className={styles.serviceCard}
                data-service-stack-card
              >
                <div className={styles.cardHeader}>
                  <span className={styles.numberBadge}>
                    SERVICE // {service.number}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className={styles.cardLink}
                  >
                    <span>Explore</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardSummary}>{service.summary}</p>

                <div className={styles.deliverablesRow}>
                  {service.deliverables.map((item) => (
                    <span key={item} className={styles.deliverableTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}