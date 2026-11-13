"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

export function AnimatedText({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.28em" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.032,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            style={{ display: "inline-block", overflow: "hidden" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.48,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}