import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, AlertCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { SERVICES_DATA, getServiceBySlug } from "@/data/services";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/services/ServiceDetail.module.css";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${service.title} | NAVCHETNAA AI`,
    description: service.summary,
    path: `/services/${service.slug}`,
    ogImage: service.heroImage,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter((item) =>
    service.relatedSlugs.includes(item.slug)
  );

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        eyebrow="ENGINEERING SERVICE"
        title={service.title}
        description={service.tagline}
        imageSrc={service.heroImage}
        imageAlt={service.heroAlt}
        actions={
          <>
            <Button href="/contact" variant="primary">
              <span>Start a {service.shortTitle} Project</span>
              <ArrowUpRight size={16} />
            </Button>
            <Button href="/process" variant="secondary">
              <span>Our Delivery Process</span>
            </Button>
          </>
        }
      />

      {/* Overview */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="SERVICE OVERVIEW"
            title="Built for Operational Clarity & Production Reliability."
          />
          <p
            className={styles.prose}
            style={{ marginTop: "1.5rem", maxWidth: "78ch" }}
          >
            {service.overview}
          </p>
        </Container>
      </section>

      {/* Business Challenges vs Our Solution */}
      <section className={styles.sectionSoft}>
        <Container>
          <div className={styles.twoColGrid}>
            <Reveal className={styles.panelBox}>
              <span className={styles.serviceNumber}>BUSINESS CHALLENGES</span>
              <h2 className={styles.panelTitle}>
                What Slows Growing Organizations Down
              </h2>
              <ul className={styles.checkList}>
                {service.challenges.map((challenge) => (
                  <li key={challenge} className={styles.checkItem}>
                    <AlertCircle
                      size={18}
                      style={{
                        color: "var(--color-dark-text)",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={0.08}
              className={`${styles.panelBox} ${styles.panelAccent}`}
            >
              <span className={styles.serviceNumber}>NAVCHETNAA AI SOLUTION</span>
              <h2 className={styles.panelTitle}>
                How We Architect the Right System
              </h2>
              <p className={styles.prose}>{service.solution}</p>
              <div style={{ paddingTop: "0.75rem" }}>
                <Button href="/contact" variant="primary" size="sm">
                  <span>Request Architecture Consultation</span>
                  <ArrowUpRight size={15} />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="CAPABILITIES"
            title={`What We Engineer in ${service.shortTitle}.`}
          />
          <div className={styles.cardsGridTwo}>
            {service.capabilities.map((cap, idx) => (
              <Reveal key={cap.title} delay={idx * 0.05} className={styles.capCard}>
                <span className={styles.serviceNumber}>
                  0{idx + 1} // CAPABILITY
                </span>
                <h3 className={styles.capTitle}>{cap.title}</h3>
                <p className={styles.capDesc}>{cap.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Practical Use Cases */}
      <section className={styles.sectionSoft}>
        <Container>
          <SectionHeading
            eyebrow="APPLIED USE CASES"
            title="Where This Engineering Delivers Immediate Value."
          />
          <div className={styles.cardsGridThree}>
            {service.useCases.map((useCase, idx) => (
              <Reveal
                key={useCase.title}
                delay={idx * 0.05}
                className={styles.capCard}
              >
                <span className={styles.serviceNumber}>
                  USE CASE 0{idx + 1}
                </span>
                <h3 className={styles.capTitle}>{useCase.title}</h3>
                <p className={styles.capDesc}>{useCase.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack & Delivery Process */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            eyebrow="TECHNOLOGY STACK"
            title="Production Tools & Frameworks We Use."
          />
          <div className={styles.techStrip}>
            {service.techStack.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>

          <div style={{ marginTop: "4.5rem" }}>
            <SectionHeading
              eyebrow="EXECUTION WORKFLOW"
              title="How We Deliver Your Project."
            />
            <div className={styles.processGrid}>
              {service.process.map((step) => (
                <div key={step.stepNumber} className={styles.processCard}>
                  <span className={styles.stepBadge}>{step.stepNumber}</span>
                  <h3 className={styles.capTitle}>{step.title}</h3>
                  <p className={styles.capDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service FAQs */}
      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "2.5rem" }}>
            <SectionHeading
              eyebrow="SERVICE FAQS"
              title={`Common Questions About ${service.shortTitle}.`}
            />
          </div>
          <FAQAccordion items={service.faqs} />
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className={styles.section}>
          <Container>
            <SectionHeading
              eyebrow="COMPLEMENTARY CAPABILITIES"
              title="Related Engineering Services."
            />
            <div className={styles.cardsGridThree}>
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className={styles.relatedLink}
                >
                  <div>
                    <span className={styles.serviceNumber}>RELATED SERVICE</span>
                    <h3
                      className={styles.capTitle}
                      style={{ marginTop: "0.4rem" }}
                    >
                      {rel.title}
                    </h3>
                    <p
                      className={styles.capDesc}
                      style={{ marginTop: "0.5rem" }}
                    >
                      {rel.summary}
                    </p>
                  </div>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                    }}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}