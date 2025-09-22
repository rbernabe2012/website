import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  const productCategories = [
    {
      title: 'IT & Tecnología',
      items: [
        { name: 'Zabbix - Monitoreo', path: '/productos/zabbix' },
        { name: 'Otobo - Mesa de Ayuda', path: '/productos/otobo' },
        { name: 'GLPI - Inventario', path: '/productos/glpi' },
      ],
    },
    {
      title: 'Ventas',
      items: [
        { name: 'Bots de IA', path: '/productos/ai-bots' },
        { name: 'CRM Twenty', path: '/productos/crm-twenty' },
      ],
    },
    {
      title: 'Atención al Cliente',
      items: [
        { name: 'Bots Inteligentes', path: '/productos/ai-bots' },
        { name: 'Zammad - Tickets', path: '/productos/zammad' },
      ],
    },
    {
      title: 'Marketing',
      items: [
        { name: 'Contact Center', path: '/productos/contact-center' },
        { name: 'Bots de Voz', path: '/productos/voice-bots' },
      ],
    },
  ];

  const mainNavLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Industria', path: '/industria' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  const toggleMobileMenu = (menu: string) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Sempitecno
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Inicio
            </Link>

            <div className="relative" onMouseLeave={() => setIsProductsOpen(false)}>
              <button
                onMouseEnter={() => setIsProductsOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                <span>Productos</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-1/2 transform translate-x-1/4 mt-2 w-[700px] bg-white shadow-xl rounded-lg border border-gray-100 p-6"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {productCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="font-bold text-gray-800 mb-3">{category.title}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.path}>
                                <Link
                                  to={item.path}
                                  className="block text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md p-2 transition-colors duration-200"
                                  onClick={() => setIsProductsOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainNavLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contacto"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 py-4"
            >
              <div className="space-y-2">
                <Link to="/" className="block text-gray-700 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                
                <div>
                  <button
                    onClick={() => toggleMobileMenu('products')}
                    className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                  >
                    Productos
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileMenu === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMobileMenu === 'products' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-4"
                      >
                        {productCategories.map((category) => (
                          <div key={category.title}>
                            <h4 className="font-semibold text-gray-500 text-sm mb-2">{category.title}</h4>
                            <div className="space-y-2">
                              {category.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block text-gray-600 hover:text-primary-600 py-1"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {mainNavLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-700 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/contacto"
                  className="block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-medium text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
