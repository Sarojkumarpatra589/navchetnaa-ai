import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES_DATA } from "@/data/industries";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { CTASection } from "@/components/common/CTASection";
import { Reveal } from "@/components/animations/Reveal";
import styles from "@/components/industries/IndustryDetail.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve | Applied AI & Custom Software Across 10 Sectors",
  description:
    "Explore how NAVCHETNAA AI engineers applied AI, voice receptionists, custom ERP/CRM, and digital platforms across Education, Healthcare, Real Estate, Manufacturing, E-commerce, Logistics, Hospitality, Finance, Retail, and Startups.",
  path: "/industries",
});

export default function IndustriesOverviewPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Industries" }]}
        eyebrow="SECTOR EXPERTISE"
        title="Applied AI & Software Systems Built Around Your Industry."
        description="Ten high-impact sectors where tailored software architecture, voice receptionists, and intelligent workflow automation solve real daily operational challenges."
        actions={
          <Button href="/contact" variant="primary">
            <span>Discuss Your Sector</span>
            <ArrowUpRight size={16} />
          </Button>
        }
      />

      <section className={styles.sectionSoft}>
        <Container>
          <div style={{ marginBottom: "3rem" }}>
            <SectionHeading
              eyebrow="TEN CORE INDUSTRIES"
              title="Domain-Aligned Engineering for Modern Organizations."
              description="Select your industry below to examine sector-specific challenges, technical solutions, example workflows, and relevant NAVCHETNAA AI platforms."
            />
          </div>

          <div className={styles.overviewGrid}>
            {INDUSTRIES_DATA.map((industry, idx) => (
              <Reveal key={industry.slug} delay={idx * 0.04}>
                <article className={styles.industryCard}>
                  <div className={styles.mediaBox}>
                    <Image
                      src={industry.heroImage}
                      alt={industry.heroAlt}
                      width={720}
                      height={420}
                      className={styles.coverImg}
                    />
                    <span className={styles.sectorTag}>
                      SECTOR // {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={styles.cardBody}>
                    <div>
                      <h2 className={styles.cardTitle}>{industry.name}</h2>
                      <p className={styles.cardSummary}>{industry.summary}</p>
                    </div>

                    <div>
                      <Button
                        href={`/industries/${industry.slug}`}
                        variant="primary"
                        size="sm"
                      >
                        <span>Explore {industry.name} Solutions</span>
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