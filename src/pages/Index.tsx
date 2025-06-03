
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
      {/* Fondo fijo con imagen del logo CACEC - Efecto Parallax */}
      <div className="fixed inset-0 -z-10">
        {/* Fondo blanco base */}
        <div className="absolute inset-0 bg-white"></div>
        {/* Logo como marca de agua con mayor visibilidad */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/715d562c-849f-4024-887f-d1f6708f0555.png')`,
            backgroundSize: '600px 600px',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'grayscale(100%) brightness(1.2) contrast(0.4)'
          }}
        ></div>
        {/* Patrón repetido más sutil */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/lovable-uploads/715d562c-849f-4024-887f-d1f6708f0555.png')`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            filter: 'grayscale(100%) brightness(1.5) contrast(0.2)'
          }}
        ></div>
      </div>
      
      {/* Contenido que se desplaza con fondo semi-transparente */}
      <div className="relative z-10 bg-white/85 backdrop-blur-[2px]">
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
