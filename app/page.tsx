import { TopBar } from "@/components/landing/top-bar";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { CompanyStatistics } from "@/components/landing/company-statistics";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { FeaturedProjects } from "@/components/landing/featured-projects";
import { WarehouseDesignSection } from "@/components/landing/warehouse-design-section";
import { DevelopmentProcess } from "@/components/landing/development-process";
import { DesignBuildSection } from "@/components/landing/design-build-section";
import { SiteSelectionSection } from "@/components/landing/site-selection-section";
import { WarehouseTypes } from "@/components/landing/warehouse-types";
import { PerformanceSection } from "@/components/landing/performance-section";
import { SustainabilitySection } from "@/components/landing/sustainability-section";
import { WhyFlexParks } from "@/components/landing/why-vertex";
import { ClientTypes } from "@/components/landing/client-types";
import { Testimonials } from "@/components/landing/testimonials";
import { MarketsSection } from "@/components/landing/markets-section";
import { InsightsSection } from "@/components/landing/insights-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCta } from "@/components/landing/final-cta";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content" className="flex-1 pb-mobile-cta">
        <HeroSection />
        <CompanyStatistics />
        <CapabilitiesSection />
        <IndustriesSection />
        <FeaturedProjects />
        <WarehouseDesignSection />
        <DevelopmentProcess />
        <DesignBuildSection />
        <SiteSelectionSection />
        <WarehouseTypes />
        <PerformanceSection />
        <SustainabilitySection />
        <WhyFlexParks />
        <ClientTypes />
        <Testimonials />
        <MarketsSection />
        <InsightsSection />
        <FaqSection />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
