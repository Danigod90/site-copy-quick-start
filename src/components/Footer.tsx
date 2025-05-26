
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg mr-3">
                <span className="text-xl font-bold">CE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cooperativa Educadores</h3>
                <p className="text-sm text-gray-400">Unidos por la educación</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Una cooperativa comprometida con el bienestar y desarrollo profesional 
              de los educadores. Juntos construimos un futuro mejor.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Préstamos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ahorros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vivienda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Salud</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Educación</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">Calle Principal 123, Madrid</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">info@cooperativaeducadores.coop</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Cooperativa Educadores. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
