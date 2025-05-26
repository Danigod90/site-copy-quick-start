
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, TrendingUp, Users2 } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    "Tasas de interés preferenciales en todos nuestros productos",
    "Acceso a programas de vivienda con subsidios especiales",
    "Descuentos en establecimientos afiliados",
    "Programas de formación y desarrollo profesional",
    "Servicios de salud con tarifas preferenciales",
    "Asesoría financiera personalizada y gratuita",
    "Eventos y actividades recreativas para socios",
    "Participación en las decisiones de la cooperativa"
  ];

  const stats = [
    { number: "15,000+", label: "Educadores Asociados", icon: Users2 },
    { number: "25", label: "Años de Experiencia", icon: Star },
    { number: "95%", label: "Satisfacción del Cliente", icon: TrendingUp }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Beneficios de ser Socio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Como miembro de nuestra cooperativa, accedes a beneficios exclusivos 
            diseñados para mejorar tu calidad de vida y la de tu familia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Cifras que nos Respaldan
                </h3>
                <div className="grid gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-yellow-300">{stat.number}</div>
                        <div className="text-green-100">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
