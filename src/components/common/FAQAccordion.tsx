"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQItem } from "@/types";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import styles from "./FAQAccordion.module.css";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className={cn(styles.item, isOpen && styles.itemOpen)}
          >
            <button
              id={buttonId}
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.iconBox} aria-hidden="true">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panelWrapper}
                  initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.05 : 0.26,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p className={styles.answer}>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}