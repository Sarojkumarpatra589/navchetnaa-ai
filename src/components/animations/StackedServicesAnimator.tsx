"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function StackedServicesAnimator() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = document.querySelector<HTMLElement>(
      "[data-services-pin-section]"
    );
    const stage = document.querySelector<HTMLElement>(
      "[data-services-stack-container]"
    );
    const cards = gsap.utils.toArray<HTMLElement>("[data-service-stack-card]");

    if (!section || !stage || cards.length < 2) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Position cards 2..N below the viewport stage initially, stacked by z-index
      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: index + 1,
          y: index === 0 ? 0 : 420,
          opacity: index === 0 ? 1 : 0,
          scale: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80px",
          end: () => `+=${(cards.length - 1) * 420}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        // Slightly recess earlier cards so their top border & service badge peek cleanly
        for (let prevIdx = 0; prevIdx < index; prevIdx++) {
          const depth = index - prevIdx;
          tl.to(
            cards[prevIdx],
            {
              scale: Math.max(0.92, 1 - depth * 0.016),
              y: prevIdx * 12,
              duration: 1,
              ease: "none",
            },
            index - 1
          );
        }

        // Slide current card smoothly from bottom to top into its stacked slot
        tl.to(
          card,
          {
            y: index * 14,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          index - 1
        );
      });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return null;
}