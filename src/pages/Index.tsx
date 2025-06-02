
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <ContactSection />
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
};

export default Index;
