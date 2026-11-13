"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import styles from "./ImageReveal.module.css";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export function ImageReveal({ children, className }: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(styles.frame, className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(styles.frame, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={styles.inner}
        initial={{ scale: 1.04 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}