import Link from "next/link";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { SITE_ASSETS } from "@/data/assets";
import styles from "./Footer.module.css";

const SERVICE_LINKS = [
  { label: "AI Development & Automation", href: "/services/ai-development-automation" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "CRM & ERP Development", href: "/services/crm-erp-development" },
  { label: "AI Voice Receptionist", href: "/services/ai-voice-receptionist" },
  { label: "API Integration & Cloud", href: "/services/api-integration-cloud-engineering" },
];

const SOLUTION_LINKS = [
  { label: "AI Receptionist", href: "/ai-solutions/ai-receptionist" },
  { label: "AI Sales Agents", href: "/ai-solutions/ai-sales-agents" },
  { label: "AI Customer Support", href: "/ai-solutions/ai-customer-support" },
  { label: "Workflow Automation", href: "/ai-solutions/workflow-automation" },
  { label: "AI Chatbots", href: "/ai-solutions/ai-chatbots" },
  { label: "CRM Automation", href: "/ai-solutions/crm-automation" },
];

const PRODUCT_LINKS = [
  { label: "NAVCHETNAA AI Receptionist", href: "/products/navchetnaa-ai-receptionist" },
  { label: "CollegeOS", href: "/products/collegeos" },
  { label: "BizConnect", href: "/products/bizconnect" },
];

const AGENCY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Our Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Column 1: Brand & Verified Contact */}
        <div className={styles.brandCol}>
          <Link href="/" aria-label="NAVCHETNAA AI Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE_ASSETS.brand.wordmark}
              alt="NAVCHETNAA AI"
              width={212}
              height={36}
              className={styles.logo}
            />
          </Link>
          <p className={styles.tagline}>{SITE_CONFIG.tagline}</p>
          <p className={styles.aboutText}>
            Digital &amp; Applied AI Engineering Agency building custom software,
            conversational AI agents, scalable web &amp; mobile platforms, and
            intelligent business automation.
          </p>

          <div className={styles.contactMeta}>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className={styles.contactLink}
            >
              <Mail size={15} />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <MessageSquare size={15} />
              <span>{SITE_CONFIG.contact.whatsappDisplay}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className={styles.colTitle}>
            <span className={styles.colDot} aria-hidden="true" />
            <span>Services</span>
          </h3>
          <ul className={styles.linkList}>
            {SERVICE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: AI Solutions */}
        <div>
          <h3 className={styles.colTitle}>
            <span className={styles.colDot} aria-hidden="true" />
            <span>AI Solutions</span>
          </h3>
          <ul className={styles.linkList}>
            {SOLUTION_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Products */}
        <div>
          <h3 className={styles.colTitle}>
            <span className={styles.colDot} aria-hidden="true" />
            <span>Products</span>
          </h3>
          <ul className={styles.linkList}>
            {PRODUCT_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Agency */}
        <div>
          <h3 className={styles.colTitle}>
            <span className={styles.colDot} aria-hidden="true" />
            <span>Company</span>
          </h3>
          <ul className={styles.linkList}>
            {AGENCY_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved. Founded by{" "}
            {SITE_CONFIG.founder.name}.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className={styles.legalLink}>
              Terms &amp; Conditions
            </Link>
            <Link href="/cookie-policy" className={styles.legalLink}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}