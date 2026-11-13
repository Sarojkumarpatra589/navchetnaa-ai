import Image from "next/image";
import { SITE_ASSETS } from "@/data/assets";
import { cn } from "@/lib/utils";
import styles from "./BrandLogo.module.css";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span className={cn(styles.brand, className)}>
      <span className={styles.markWrapper}>
        <Image
          src={SITE_ASSETS.brand.mark}
          alt="NAVCHETNAA AI Logo"
          width={44}
          height={44}
          priority={priority}
          className={styles.markImage}
        />
      </span>

      <span className={styles.wordmarkGroup}>
        <span className={styles.brandName}>NAVCHETNAA</span>
        <span className={styles.aiBadge}>AI</span>
      </span>
    </span>
  );
}