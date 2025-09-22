import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  Target, 
  Mail, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Handshake,
  Rocket,
  Lightbulb
} from 'lucide-react';

const CRMTwenty: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestión de Contactos 360°',
      description: 'Centraliza toda la información de tus clientes y prospectos en un solo lugar.',
    },
    {
      icon: TrendingUp,
      title: 'Pipeline de Ventas Visual',
      description: 'Arrastra y suelta oportunidades a través de las etapas de tu proceso de ventas.',
    },
    {
      icon: Zap,
      title: 'Automatización de Tareas',
      description: 'Automatiza el seguimiento, la creación de tareas y el envío de correos electrónicos.',
    },
    {
      icon: Target,
      title: 'Marketing y Campañas',
      description: 'Segmenta tus contactos y ejecuta campañas de marketing dirigidas.',
    },
    {
      icon: BarChart3,
      title: 'Analíticas e Informes',
      description: 'Obtén informes en tiempo real sobre el rendimiento de ventas y pronósticos.',
    },
    {
      icon: Mail,
      title: 'Integración de Correo',
      description: 'Sincroniza tu bandeja de entrada para registrar todas las comunicaciones con clientes.',
    }
  ];

  const benefits = [
    'Incremento de ventas de hasta un 35% en el primer año.',
    'Visión completa del historial de cada cliente.',
    'Mejora en la productividad del equipo de ventas.',
    'Pronósticos de ventas más precisos y confiables.',
    'Reducción del ciclo de ventas.',
    'Mejora de la retención y lealtad de clientes.',
    'Personalización de la comunicación a gran escala.',
    'Seguimiento efectivo de todas las oportunidades.',
    'Colaboración mejorada entre los equipos de ventas y marketing.',
    'Acceso a la información desde cualquier dispositivo.',
    'Identificación de las mejores fuentes de leads.',
    'Automatización de recordatorios para no perder seguimientos.',
    'Segmentación avanzada de clientes para campañas efectivas.',
    'Dashboard personalizable para cada vendedor.',
    'Gestión de productos y creación de cotizaciones.',
    'Plataforma Open Source, totalmente adaptable.',
    'Integración con herramientas de e-commerce y ERP.',
    'Control de metas y comisiones del equipo de ventas.',
    'No más datos de clientes perdidos en hojas de cálculo.',
    'Toma de decisiones estratégicas basadas en datos reales.'
  ];

  const useCases = [
    {
      title: 'Equipos de Ventas B2B',
      description: 'Gestión de cuentas y oportunidades complejas.',
      icon: Handshake
    },
    {
      title: 'Startups y Pymes',
      description: 'Una solución asequible para crecer organizadamente.',
      icon: Rocket
    },
    {
      title: 'Agencias de Marketing',
      description: 'Seguimiento de campañas y gestión de clientes.',
      icon: Lightbulb
    },
    {
      title: 'Empresas de Servicios',
      description: 'Mantén relaciones a largo plazo con tus clientes.',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-green-600">CRM Twenty</span> - Potencia tus Ventas
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gestiona tus relaciones con clientes, optimiza tu proceso de ventas y haz crecer tu negocio con una plataforma CRM moderna y flexible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Implementar CRM
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300">
                  Diagnóstico Gratuito
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop"
                alt="CRM Twenty para Ventas"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-500"/>
                  <span className="text-sm font-medium text-gray-700">Crecimiento de Ventas: +35%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Herramientas para Vender Más y Mejor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que tu equipo de ventas necesita para cerrar más negocios, en una sola plataforma.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de un CRM Estratégico
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre el impacto real de gestionar tus clientes de forma profesional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal para Empresas en Crecimiento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CRM Twenty se adapta a diferentes modelos de negocio y equipos de ventas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para Dejar las Hojas de Cálculo?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Da el salto a una gestión de ventas profesional. Nuestros expertos te guiarán en la migración e implementación de tu nuevo CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Organizar mis Ventas</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                Ver Precios
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CRMTwenty;
