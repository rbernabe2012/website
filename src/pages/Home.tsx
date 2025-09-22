import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Bot, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Monitoreo IT',
      description: 'Supervisión 24/7 de tu infraestructura tecnológica'
    },
    {
      icon: Bot,
      title: 'Inteligencia Artificial',
      description: 'Bots inteligentes para atención al cliente y ventas'
    },
    {
      icon: Users,
      title: 'Gestión de Clientes',
      description: 'CRM avanzado y herramientas de contact center'
    },
    {
      icon: BarChart3,
      title: 'Análisis y Reportes',
      description: 'Insights profundos para la toma de decisiones'
    }
  ];

  const solutions = [
    {
      department: 'IT & Tecnología',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      products: ['Zabbix', 'Otobo', 'GLPI'],
      link: '/productos/zabbix'
    },
    {
      department: 'Ventas',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      products: ['Bots de IA', 'CRM Twenty'],
      link: '/productos/ai-bots'
    },
    {
      department: 'Atención al Cliente',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      products: ['Bots Inteligentes', 'Zammad'],
      link: '/productos/zammad'
    },
    {
      department: 'Marketing',
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      products: ['Contact Center', 'Bots de Voz'],
      link: '/productos/contact-center'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Transformamos tu
              <span className="block text-primary-400 mt-2">
                Empresa con Tecnología
              </span>
            </h1>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto">
              Implementamos soluciones tecnológicas avanzadas que optimizan tus procesos, 
              mejoran la eficiencia y potencian el crecimiento de tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <Link
                to="/contacto"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Solicitar Consulta
              </Link>
              <Link
                to="/nosotros"
                className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-lg font-semibold hover:bg-primary-400 hover:text-white transition-all duration-300 text-center"
              >
                Conocer Más
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Sempitecno?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas de vanguardia adaptadas a las necesidades específicas de cada departamento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Department */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluciones por Departamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada área de tu empresa tiene necesidades específicas. Descubre nuestras soluciones especializadas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.department}</h3>
                
                <div className="space-y-3 mb-6">
                  {solution.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={solution.link}
                  className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  <span>Ver soluciones</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestros expertos están listos para ayudarte a implementar la solución perfecta para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactar Ahora
              </Link>
              <Link
                to="/industria"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Ver Casos de Uso
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
