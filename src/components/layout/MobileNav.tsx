"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, MessageSquare } from "lucide-react";
import { MAIN_NAVIGATION, SITE_CONFIG } from "@/data/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Lock body scroll while mobile drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          aria-label="Mobile Navigation"
          className={styles.drawer}
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0% 0% 100% 0%)", opacity: 0.98 }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
          }
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0% 0% 100% 0%)", opacity: 0.98 }
          }
          transition={{
            duration: prefersReducedMotion ? 0.05 : 0.36,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className={styles.drawerInner}>
            <ul className={styles.navList}>
              {MAIN_NAVIGATION.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isExpanded = expandedSection === item.label;
                const active = isRouteActive(item.href);

                return (
                  <li key={item.label} className={styles.navItem}>
                    <div className={styles.itemRow}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(styles.itemLink, active && styles.itemLinkActive)}
                      >
                        {active && <span className={styles.activeBadge} aria-hidden="true" />}
                        <span>{item.label}</span>
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          className={styles.accordionTrigger}
                          aria-expanded={isExpanded}
                          aria-label={`Toggle ${item.label} submenu`}
                          onClick={() => toggleSection(item.label)}
                        >
                          <ChevronDown
                            className={cn(
                              styles.chevron,
                              isExpanded && styles.chevronOpen
                            )}
                          />
                        </button>
                      )}
                    </div>

                    {hasChildren && (
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            className={styles.subMenuWrapper}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: prefersReducedMotion ? 0.05 : 0.25,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <ul className={styles.subMenuList}>
                              {item.children!.map((child) => {
                                const childActive = pathname === child.href;
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={onClose}
                                      className={cn(
                                        styles.subMenuLink,
                                        childActive && styles.subMenuLinkActive
                                      )}
                                    >
                                      <span className={styles.subMenuTitle}>
                                        {child.label}
                                      </span>
                                      {child.description && (
                                        <span className={styles.subMenuDesc}>
                                          {child.description}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className={styles.mobileFooter}>
              <Link
                href="/contact"
                onClick={onClose}
                className={styles.primaryCta}
              >
                <span>Start Your Project</span>
                <ArrowUpRight size={17} />
              </Link>

              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={styles.secondaryCta}
              >
                <MessageSquare size={16} />
                <span>WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}