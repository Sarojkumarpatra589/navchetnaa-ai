import { cn } from "@/lib/utils";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        styles.wrapper,
        align === "center" && styles.center,
        className
      )}
    >
      {eyebrow && (
        <div className={styles.eyebrowRow}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.eyebrowText}>{eyebrow}</span>
        </div>
      )}
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}