
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
      {/* Fondo fijo que NO se mueve - Efecto Parallax verdadero */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Fondo blanco sólido */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Imagen CACEC posicionada a la derecha, tamaño mediano */}
        <div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-80 h-80 opacity-15"
          style={{
            backgroundImage: `url('/lovable-uploads/715d562c-849f-4024-887f-d1f6708f0555.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%) brightness(0.8) contrast(0.6)'
          }}
        ></div>
        
        {/* Patrón sutil repetido en toda la página */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `url('/lovable-uploads/715d562c-849f-4024-887f-d1f6708f0555.png')`,
            backgroundSize: '150px 150px',
            backgroundRepeat: 'repeat',
            filter: 'grayscale(100%) brightness(1.5) contrast(0.2)'
          }}
        ></div>
      </div>
      
      {/* Contenido que se desplaza sobre el fondo fijo con márgenes laterales */}
      <div className="relative z-10 bg-white/75 backdrop-blur-[1px] min-h-screen mx-8 lg:mx-16 xl:mx-24">
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
