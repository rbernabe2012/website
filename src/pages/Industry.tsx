import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Banknote, 
  Factory,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Industry: React.FC = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Empresas de Servicios',
      description: 'Consultoría, legal, contabilidad, marketing',
      solutions: [
        'CRM para gestión de clientes',
        'Bots de IA para atención 24/7',
        'Sistema de tickets y soporte',
        'Contact center para campañas',
        'Monitoreo de infraestructura IT'
      ],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'Retail y E-commerce',
      description: 'Tiendas online, retail físico, marketplace',
      solutions: [
        'Bots de venta por WhatsApp',
        'Integración CRM con inventario',
        'Soporte multicanal 24/7',
        'Análisis de comportamiento de compra',
        'Automatización de marketing'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'Educación',
      description: 'Universidades, colegios, centros de formación',
      solutions: [
        'Plataforma de soporte estudiantil',
        'Bots para información académica',
        'Sistema de tickets para IT',
        'Contact center para admisiones',
        'Monitoreo de plataformas educativas'
      ],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&auto=format',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Salud y Bienestar',
      description: 'Clínicas, hospitales, centros médicos',
      solutions: [
        'Bots para citas médicas',
        'Sistema de gestión de pacientes',
        'Soporte técnico especializado',
        'Contact center para seguimiento',
        'Monitoreo de equipos médicos'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&auto=format',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Banknote,
      title: 'Servicios Financieros',
      description: 'Bancos, aseguradoras, fintech',
      solutions: [
        'Bots para consultas financieras',
        'CRM especializado en servicios financieros',
        'Soporte de alta seguridad',
        'Contact center para ventas',
        'Monitoreo de transacciones'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Factory,
      title: 'Manufactura e Industria',
      description: 'Fábricas, producción, logística',
      solutions: [
        'Monitoreo de líneas de producción',
        'Sistema de inventario automático',
        'Soporte técnico industrial',
        'Contact center B2B',
        'Análisis de eficiencia operacional'
      ],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop&auto=format',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const benefits = [
    'Implementación rápida y eficiente',
    'Personalización según industria',
    'Soporte especializado 24/7',
    'Integración con sistemas existentes',
    'ROI demostrable y medible',
    'Escalabilidad según crecimiento'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluciones por <span className="text-primary-600">Industria</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada industria tiene desafíos únicos. Nuestras soluciones están 
              diseñadas específicamente para abordar las necesidades particulares 
              de tu sector empresarial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {industry.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Soluciones Específicas:
                  </h4>
                  
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                    <span>Conocer más detalles</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué elegir nuestras soluciones especializadas?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                No solo implementamos tecnología, creamos soluciones que se adaptan 
                perfectamente a los flujos de trabajo y necesidades específicas de tu industria.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&auto=format"
                alt="Industrias atendidas"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">Empresas Atendidas</div>
                </div>
              </div>
            </motion.div>
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
              ¿Tu industria no está listada?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              No te preocupes. Nuestras soluciones son flexibles y adaptables. 
              Conversemos sobre cómo podemos ayudar a tu sector específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                Consulta Personalizada
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Ver Casos de Éxito
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industry;
