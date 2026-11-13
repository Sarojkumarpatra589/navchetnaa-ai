import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SERVICES_DATA } from "@/data/services";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/services/ServiceDetail.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Services | AI Development, Custom Software, Web, Mobile & Cloud",
  description:
    "Explore NAVCHETNAA AI's seven core engineering services: AI Development & Automation, Custom Software, Websites, Mobile Apps, CRM & ERP, AI Voice Receptionist, and Cloud APIs.",
  path: "/services",
});

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="ENGINEERING SERVICES"
        title="Technology Solutions. Designed Around Your Ambition."
        description="End-to-end software and applied AI engineering across seven specialized disciplines—built for performance, maintainability, and real operational impact."
        actions={
          <Button href="/contact" variant="primary">
            <span>Discuss Your Requirements</span>
            <ArrowUpRight size={16} />
          </Button>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "3rem" }}>
            <SectionHeading
              eyebrow="SEVEN CORE CAPABILITIES"
              title="Full-Lifecycle Engineering Under One Roof."
              description="Select any service below to inspect architectural capabilities, business use cases, technology stacks, and delivery workflows."
            />
          </div>

          <div className={styles.overviewList}>
            {SERVICES_DATA.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 0.04}>
                <article className={styles.overviewCard}>
                  <div className={styles.overviewMedia}>
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      width={720}
                      height={480}
                      className={styles.overviewImg}
                    />
                  </div>

                  <div className={styles.overviewContent}>
                    <div>
                      <span className={styles.serviceNumber}>
                        SERVICE // {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className={styles.overviewTitle}>{service.title}</h2>
                      <p className={styles.overviewSummary}>
                        {service.summary}
                      </p>
                    </div>

                    <div className={styles.tagsRow}>
                      {service.capabilities.map((cap) => (
                        <span key={cap.title} className={styles.tag}>
                          {cap.title}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Button
                        href={`/services/${service.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        <span>Explore {service.shortTitle}</span>
                        <ArrowUpRight size={15} />
                      </Button>
                    </div>
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