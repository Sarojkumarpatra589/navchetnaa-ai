"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { MAIN_NAVIGATION } from "@/data/site";
import { SITE_ASSETS } from "@/data/assets";
import { NavItem } from "@/types";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import styles from "./Header.module.css";

const MEGA_MENU_META: Record<
  string,
  { eyebrow: string; title: string; description: string; ctaLabel: string }
> = {
  About: {
    eyebrow: "AGENCY PROFILE",
    title: "Built for Engineering Rigor",
    description:
      "Learn how NAVCHETNAA AI combines business-first thinking with disciplined full-stack and applied AI architecture.",
    ctaLabel: "Explore Agency Overview",
  },
  Services: {
    eyebrow: "CORE CAPABILITIES",
    title: "End-to-End Digital & AI Engineering",
    description:
      "Custom software, AI agents, voice receptionists, web & mobile platforms, and cloud infrastructure tailored to your operations.",
    ctaLabel: "View All 7 Services",
  },
  "AI Solutions": {
    eyebrow: "APPLIED INTELLIGENCE",
    title: "Connected AI Ecosystem",
    description:
      "Modular AI systems engineered to automate calls, qualify leads, support customers, and eliminate repetitive manual workflows.",
    ctaLabel: "Explore All AI Solutions",
  },
  Products: {
    eyebrow: "PROPRIETARY PLATFORMS",
    title: "Software Products Engineered In-House",
    description:
      "Configurable platforms built by NAVCHETNAA AI for business communications, academic institutions, and B2B networking.",
    ctaLabel: "View All Products",
  },
  Industries: {
    eyebrow: "DOMAIN EXPERTISE",
    title: "Sector-Specific Architecture",
    description:
      "Applied AI and custom operational software designed around the workflows of 10 high-impact industries.",
    ctaLabel: "Explore All 10 Industries",
  },
};

export function Header() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route navigation
  useEffect(() => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mega menu on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMegaMenu(null);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 140);
  };

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeNavObj: NavItem | undefined = MAIN_NAVIGATION.find(
    (item) => item.label === activeMegaMenu && item.children && item.children.length > 0
  );

  const activeMeta = activeNavObj ? MEGA_MENU_META[activeNavObj.label] : undefined;

  return (
    <>
      <header
        ref={headerRef}
        className={cn(styles.header, isScrolled && styles.headerScrolled)}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.inner}>
          {/* Brand Mark */}
          <Link
            href="/"
            className={styles.brandLink}
            aria-label="NAVCHETNAA AI Home"
            onClick={() => {
              setActiveMegaMenu(null);
              setMobileMenuOpen(false);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SITE_ASSETS.brand.wordmark}
              alt="NAVCHETNAA AI"
              width={212}
              height={36}
              className={styles.brandLogo}
            />
          </Link>

          {/* Desktop Primary Navigation */}
          <nav className={styles.desktopNav} aria-label="Primary Navigation">
            <ul className={styles.navList}>
              {MAIN_NAVIGATION.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isOpen = activeMegaMenu === item.label;
                const active = isRouteActive(item.href);

                return (
                  <li
                    key={item.label}
                    className={styles.navItem}
                    onMouseEnter={() =>
                      hasChildren ? handleMouseEnter(item.label) : setActiveMegaMenu(null)
                    }
                  >
                    {hasChildren ? (
                      <button
                        type="button"
                        className={cn(styles.navTrigger, active && styles.navLinkActive)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          setActiveMegaMenu((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={styles.chevron} aria-hidden="true" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(styles.navLink, active && styles.navLinkActive)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaButton}>
              <span className={styles.ctaDot} aria-hidden="true" />
              <span>Start Your Project</span>
            </Link>

            <button
              type="button"
              className={styles.mobileToggle}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeNavObj && activeMeta && (
            <motion.div
              key={activeNavObj.label}
              className={styles.megaMenu}
              onMouseEnter={() => handleMouseEnter(activeNavObj.label)}
              onMouseLeave={handleMouseLeave}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{
                duration: prefersReducedMotion ? 0.05 : 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.megaMenuInner}>
                <div className={styles.megaSidebar}>
                  <div>
                    <div className={styles.megaSidebarEyebrow}>
                      <span className={styles.megaSidebarDot} aria-hidden="true" />
                      <span>{activeMeta.eyebrow}</span>
                    </div>
                    <h3 className={styles.megaSidebarTitle}>{activeMeta.title}</h3>
                    <p className={styles.megaSidebarDesc}>{activeMeta.description}</p>
                  </div>

                  <Link
                    href={activeNavObj.href}
                    className={styles.megaOverviewLink}
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    <span>{activeMeta.ctaLabel}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <div
                  className={
                    activeNavObj.label === "Industries"
                      ? styles.megaGridCompact
                      : styles.megaGrid
                  }
                >
                  {activeNavObj.children!.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          styles.megaCard,
                          childActive && styles.megaCardActive
                        )}
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        <div className={styles.megaCardHeader}>
                          <span className={styles.megaCardTitle}>{child.label}</span>
                          <ArrowRight className={styles.megaCardArrow} aria-hidden="true" />
                        </div>
                        {child.description && (
                          <span className={styles.megaCardDesc}>{child.description}</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}