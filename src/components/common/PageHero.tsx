import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Breadcrumb, BreadcrumbEntry } from "./Breadcrumb";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  breadcrumbs: BreadcrumbEntry[];
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  badgeText?: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  actions,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className={cn(styles.hero, "architecturalGrid")}>
      <Container>
        <Breadcrumb items={breadcrumbs} />
        <div className={cn(styles.grid, imageSrc && styles.gridWithImage)}>
          <div className={styles.content}>
            <div className={styles.eyebrowRow}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.eyebrow}>{eyebrow}</span>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>

          {imageSrc && (
            <div className={styles.mediaFrame}>
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                width={900}
                height={620}
                priority
                className={styles.image}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}