import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PainPointsSection from "@/components/PainPointsSection";
import ContentSection from "@/components/ContentSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevicesSection from "@/components/DevicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FreeTrialSection from "@/components/FreeTrialSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <PainPointsSection />
      <ContentSection />
      <FeaturesSection />
      <DevicesSection />
      <TestimonialsSection />
      <PricingSection />
      <FreeTrialSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
