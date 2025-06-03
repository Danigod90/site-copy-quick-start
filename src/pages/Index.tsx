
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
      {/* Fondo fijo con imagen del logo CACEC */}
      <div className="fixed inset-0 -z-10">
        {/* Fondo blanco base */}
        <div className="absolute inset-0 bg-white"></div>
        {/* Logo como marca de agua */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/715d562c-849f-4024-887f-d1f6708f0555.png')`,
            backgroundSize: '400px 400px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) brightness(1.5) contrast(0.3)'
          }}
        ></div>
      </div>
      
      {/* Contenido que se desplaza */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm">
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
