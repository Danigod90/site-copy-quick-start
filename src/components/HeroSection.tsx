
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Heart, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
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

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">Formación Continua</h3>
                <p className="text-sm text-green-100">Programas de desarrollo profesional</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">Comunidad</h3>
                <p className="text-sm text-green-100">Red de educadores comprometidos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">Bienestar</h3>
                <p className="text-sm text-green-100">Servicios de salud y bienestar</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <h3 className="font-semibold mb-2">Protección</h3>
                <p className="text-sm text-green-100">Seguridad social y legal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
