import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-2xl font-bold text-primary-400">Sempitecno</span>
            </div>
            <p className="text-gray-300 text-sm">
              Soluciones tecnológicas avanzadas para transformar tu empresa y optimizar tus procesos de negocio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/productos/zabbix" className="text-gray-300 hover:text-white transition-colors">Zabbix</Link></li>
              <li><Link to="/productos/otobo" className="text-gray-300 hover:text-white transition-colors">Otobo</Link></li>
              <li><Link to="/productos/glpi" className="text-gray-300 hover:text-white transition-colors">GLPI</Link></li>
              <li><Link to="/productos/ai-bots" className="text-gray-300 hover:text-white transition-colors">Bots de IA</Link></li>
              <li><Link to="/productos/crm-twenty" className="text-gray-300 hover:text-white transition-colors">CRM Twenty</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/productos/contact-center" className="text-gray-300 hover:text-white transition-colors">Contact Center</Link></li>
              <li><Link to="/productos/voice-bots" className="text-gray-300 hover:text-white transition-colors">Bots de Voz</Link></li>
              <li><Link to="/productos/zammad" className="text-gray-300 hover:text-white transition-colors">Zammad</Link></li>
              <li><Link to="/industria" className="text-gray-300 hover:text-white transition-colors">Soluciones por Industria</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">info@sempitecno.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-gray-300">Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Sempitecno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
