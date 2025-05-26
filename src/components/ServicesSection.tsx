
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CreditCard, Home, Car, Stethoscope, Calculator } from "lucide-react";

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
      title: "Educación Continua",
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

  return (
    <section id="servicios" className="py-20 bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
