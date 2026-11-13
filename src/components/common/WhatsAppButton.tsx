import { MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with NAVCHETNAA AI on WhatsApp (${SITE_CONFIG.contact.whatsappDisplay})`}
      className={styles.floatingBtn}
    >
      <span className={styles.statusDot} aria-hidden="true" />
      <MessageSquare size={17} />
      <span className={styles.label}>WhatsApp Us</span>
    </a>
  );
}