
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fondo fijo blanco */}
      <div className="fixed inset-0 bg-white -z-10"></div>
      
      {/* Contenido que se desplaza */}
      <div className="relative z-10">
        <Header />
        <div className="pt-24">
          <HeroSection />
          <ServicesSection />
          <BenefitsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
      
      <FloatingButtons />
    </div>
  );
};

export default Index;
