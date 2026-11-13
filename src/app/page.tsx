import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { MethodologySection } from "@/components/home/MethodologySection";
import { PortfolioPreviewSection } from "@/components/home/PortfolioPreviewSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { HomeFAQSection } from "@/components/home/HomeFAQSection";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "NAVCHETNAA AI | AI Development, Custom Software & Automation",
  description:
    "NAVCHETNAA AI builds intelligent AI solutions, custom software, business automation, websites, mobile applications and CRM & ERP platforms.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <EcosystemSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <MethodologySection />
      <PortfolioPreviewSection />
      <TechStackSection />
      <HomeFAQSection />
      <CTASection />
    </>
  );
}