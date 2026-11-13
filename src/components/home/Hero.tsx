"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { HeroFallbackVisual } from "@/components/three/HeroFallbackVisual";
import styles from "./Hero.module.css";

const PrismEcosystem3D = dynamic(
  () =>
    import("@/components/three/PrismEcosystem3D").then(
      (mod) => mod.PrismEcosystem3D
    ),
  {
    ssr: false,
    loading: () => <HeroFallbackVisual />,
  }
);

const SUPPORTING_PILLARS = [
  "AI-Powered Innovation",
  "Custom Software",
  "Business Automation",
  "Scalable Platforms",
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktopViewport, setIsDesktopViewport] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktopViewport(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setIsDesktopViewport(event.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const shouldRender3D = isDesktopViewport && !prefersReducedMotion;

  return (
    <section className={cn(styles.hero, "architecturalGrid")}>
      <Container>
        <div className={styles.grid}>
          {/* Left Editorial Column */}
          <div className={styles.content}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.eyebrowText}>
                DIGITAL ENGINEERING + APPLIED ARTIFICIAL INTELLIGENCE
              </span>
            </div>

            <h1 className={styles.headline}>
              Engineering Intelligence.{" "}
              <span className={styles.headlineAccent}>Building the Future.</span>
            </h1>

            <p className={styles.description}>
              NAVCHETNAA AI builds AI-powered systems, custom software, scalable
              digital platforms and intelligent automation that help businesses
              transform operations, create better experiences and grow with
              confidence.
            </p>

            <div className={styles.ctaGroup}>
              <Button href="/contact" variant="primary" size="lg">
                <span>Start Your Project</span>
                <ArrowUpRight size={18} />
              </Button>

              <Button href="/ai-solutions" variant="secondary" size="lg">
                <Layers size={17} />
                <span>Explore Our Solutions</span>
              </Button>
            </div>

            <div className={styles.supportingBar} aria-label="Core capabilities">
              {SUPPORTING_PILLARS.map((pillar, idx) => (
                <span key={pillar} className={styles.supportingItem}>
                  <span>{pillar}</span>
                  {idx < SUPPORTING_PILLARS.length - 1 && (
                    <span className={styles.supportingDivider} aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right 3D Crystalline Prism Column */}
          <div className={styles.visualColumn}>
            {shouldRender3D ? <PrismEcosystem3D /> : <HeroFallbackVisual />}
          </div>
        </div>
      </Container>
    </section>
  );
}