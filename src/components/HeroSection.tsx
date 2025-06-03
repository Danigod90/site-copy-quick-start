
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const heroImages = [
    {
      src: "/lovable-uploads/cb428654-c98d-4dfb-b0e0-4e8e9437b365.png",
      title: "Aumenta la línea de tu tarjeta de crédito",
      description: "Universitaria premia a los socios que cumplen"
    },
    {
      src: "/lovable-uploads/892c3922-522a-4381-bf44-2177c55318f2.png",
      title: "Asociarte ahora es más simple",
      description: "Únete a nuestra comunidad de educadores"
    },
    {
      src: "/lovable-uploads/2be97ef8-309b-42fe-a4f7-ba75ad01301d.png",
      title: "Referencias a entidades",
      description: "Impulsamos tu crecimiento profesional"
    },
    {
      src: "/lovable-uploads/51c09164-df6b-46b4-a2e7-94fdea2362a6.png",
      title: "Sorteo de Reyes 2025",
      description: "Lista de Ganadores disponible"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="inicio" className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Unidos por la <span className="text-yellow-300">Educación</span>
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Una cooperativa comprometida con el bienestar y desarrollo profesional 
              de los educadores. Juntos construimos un futuro mejor para la educación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold">
                Únete Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                Conoce Más
              </Button>
            </div>
          </div>

          {/* Carrusel de imágenes hero */}
          <div className="relative">
            <div className="relative h-80 mb-8 overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <Card className="h-72 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0 h-full relative">
                        <img 
                          src={image.src} 
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h3 className="text-xl font-bold mb-2 text-white">{image.title}</h3>
                          <p className="text-green-100 text-sm">{image.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores del carrusel */}
            <div className="flex justify-center space-x-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-yellow-400 scale-125 shadow-lg' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
