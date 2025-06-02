
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CreditCard, Home, Car, Stethoscope, Calculator } from "lucide-react";
import { useEffect, useState } from "react";

export const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Servicios Financieros",
      description: "Préstamos, ahorros y productos financieros especializados para educadores con condiciones preferenciales."
    },
    {
      icon: Home,
      title: "Vivienda",
      description: "Programas de vivienda, hipotecas y subsidios especiales para la adquisición de tu hogar propio."
    },
    {
      icon: Stethoscope,
      title: "Salud y Bienestar",
      description: "Planes de salud, medicina prepagada y programas de bienestar integral para ti y tu familia."
    },
    {
      icon: BookOpen,
      title: "Formación Continua",
      description: "Cursos, diplomados, especializaciones y programas de formación profesional permanente."
    },
    {
      icon: Car,
      title: "Movilidad",
      description: "Financiamiento para vehículos, seguros y servicios de transporte con condiciones especiales."
    },
    {
      icon: Calculator,
      title: "Asesoría Financiera",
      description: "Orientación profesional en planificación financiera, inversiones y gestión de recursos."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="servicios" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios diseñados específicamente 
            para satisfacer las necesidades de los educadores y sus familias.
          </p>
        </div>

        {/* Carrusel automático */}
        <div className="relative h-96 mb-12">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${services.length * 100}%`
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
                style={{ width: `${100 / services.length}%` }}
              >
                <Card className="h-80 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <service.icon className="w-10 h-10 text-yellow-200" />
                    </div>
                    <CardTitle className="text-2xl text-green-800 font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8">
                    <p className="text-gray-700 text-center leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mb-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-green-600 scale-125' 
                  : 'bg-green-300 hover:bg-green-400'
              }`}
            />
          ))}
        </div>

        {/* Grid de servicios (versión estática para pantallas grandes) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-yellow-200" />
                </div>
                <CardTitle className="text-xl text-green-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
