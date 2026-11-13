import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { Container } from "./Container";
import styles from "./CTASection.module.css";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTASection({
  eyebrow = "READY TO BUILD",
  title = "Let's Engineer Something Extraordinary.",
  description = "Share your operational goals, technical requirements, or product vision. Our engineering team will review your scope and propose a structured architectural roadmap.",
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.box}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.actions}>
            <Link href={primaryHref} className={styles.primaryLink}>
              <span>{primaryLabel}</span>
              <ArrowUpRight size={18} />
            </Link>
            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}