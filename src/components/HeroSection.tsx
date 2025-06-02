
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Heart, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const heroServices = [
    {
      icon: GraduationCap,
      title: "Formación Continua",
      description: "Programas de desarrollo profesional",
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Red de educadores comprometidos",
      bgColor: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Bienestar",
      description: "Servicios de salud y bienestar",
      bgColor: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Protección",
      description: "Seguridad social y legal",
      bgColor: "from-blue-500 to-blue-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroServices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroServices.length]);

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

          {/* Carrusel de servicios hero */}
          <div className="relative">
            <div className="relative h-80 mb-8 overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${heroServices.length * 100}%`
                }}
              >
                {heroServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${100 / heroServices.length}%` }}
                  >
                    <div className="px-2">
                      <Card className="h-72 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                        <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                          <div className={`bg-gradient-to-br ${service.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                            <service.icon className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                          <p className="text-green-100 leading-relaxed">{service.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores del carrusel */}
            <div className="flex justify-center space-x-3">
              {heroServices.map((_, index) => (
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
