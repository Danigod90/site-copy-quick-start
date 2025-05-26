
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+34 123 456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@cooperativaeducadores.coop</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Síguenos en nuestras redes sociales</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
              <span className="text-xl font-bold">CE</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Cooperativa Educadores</h1>
              <p className="text-sm text-gray-600">Unidos por la educación</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Nosotros</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
            <Button className="bg-blue-600 hover:bg-blue-700">Hazte Socio</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Beneficios</a>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre Nosotros</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">Hazte Socio</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
