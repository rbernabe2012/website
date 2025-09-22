import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  PhoneOutgoing, 
  BarChartHorizontal, 
  Zap, 
  Users, 
  ClipboardList,
  CheckCircle,
  ArrowRight,
  Headset,
  HandCoins,
  Vote
} from 'lucide-react';

const ContactCenter: React.FC = () => {
  const features = [
    {
      icon: PhoneCall,
      title: 'Campañas Entrantes (Inbound)',
      description: 'Gestiona llamadas de soporte y ventas con enrutamiento inteligente y IVR.',
    },
    {
      icon: PhoneOutgoing,
      title: 'Campañas Salientes (Outbound)',
      description: 'Automatiza tus campañas de telemarketing y cobranza con marcadores predictivos.',
    },
    {
      icon: Zap,
      title: 'IVR Interactivo',
      description: 'Diseña flujos de voz que guían al cliente y resuelven consultas sin un agente.',
    },
    {
      icon: BarChartHorizontal,
      title: 'Monitoreo en Tiempo Real',
      description: 'Supervisa las colas de llamadas, el estado de los agentes y los KPIs en vivo.',
    },
    {
      icon: ClipboardList,
      title: 'Grabación y Calidad',
      description: 'Graba todas las llamadas y evalúa a tus agentes para asegurar la calidad del servicio.',
    },
    {
      icon: Users,
      title: 'Integración con CRM',
      description: 'Obtén la información del cliente en pantalla (Screen Pop-up) antes de contestar.',
    }
  ];

  const benefits = [
    'Aumento de la productividad de los agentes en más de un 50%.',
    'Reducción del tiempo de espera de los clientes.',
    'Mejora de la tasa de resolución en la primera llamada (FCR).',
    'Visibilidad completa de la operación del contact center.',
    'Optimización de la fuerza de trabajo con informes de rendimiento.',
    'Personalización de la experiencia del cliente con IVR y CRM.',
    'Escalabilidad para manejar picos de llamadas sin problemas.',
    'Cumplimiento de normativas con grabación de llamadas.',
    'Mejora continua a través del monitoreo de calidad.',
    'Reducción de costos operativos con marcadores automáticos.',
    'Soporte para agentes remotos y distribuidos.',
    'Enrutamiento basado en habilidades (Skill-Based Routing).',
    'Reportes históricos detallados para análisis estratégico.',
    'Disponibilidad de WebRTC para operar desde el navegador.',
    'API para integración con cualquier sistema empresarial.',
    'Disminución de la tasa de abandono de llamadas.',
    'Gestión de múltiples campañas simultáneamente.',
    'Scripts dinámicos para guiar a los agentes en la llamada.',
    'Identificación de cuellos de botella en la operación.',
    'Plataforma robusta, estable y de alta disponibilidad.'
  ];

  const useCases = [
    {
      title: 'Telemarketing y Ventas',
      description: 'Campañas masivas para generación de leads.',
      icon: PhoneOutgoing
    },
    {
      title: 'Servicio al Cliente',
      description: 'Centro de atención para soporte y consultas.',
      icon: Headset
    },
    {
      title: 'Cobranzas',
      description: 'Gestión automatizada de cartera.',
      icon: HandCoins
    },
    {
      title: 'Encuestas Telefónicas',
      description: 'Recopilación de datos y opinión a gran escala.',
      icon: Vote
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-yellow-600">Contact Center</span> Profesional
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Orquesta tus operaciones de voz con una solución de contact center completa para campañas entrantes y salientes, con monitoreo en tiempo real y analíticas avanzadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Modernizar mi Operación
                </button>
                <button className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300">
                  Hablar con un Experto
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
                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop"
                alt="Solución de Contact Center"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <PhoneCall className="w-6 h-6 text-yellow-500"/>
                  <span className="text-sm font-medium text-gray-700">Llamadas Gestionadas: 1M+</span>
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
              Funcionalidades de Nivel Mundial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para una operación de voz eficiente y escalable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-yellow-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios para tu Operación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más eficiencia, mejor servicio y mayor rentabilidad para tu contact center.
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
              Aplicaciones Versátiles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma se adapta a los objetivos de negocio más exigentes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-yellow-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu Contact Center necesita un impulso?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Realizamos una auditoría completa de tu operación actual y te presentamos un plan para llevarla al siguiente nivel con nuestra tecnología.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Auditoría Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all duration-300">
                Ver Arquitectura
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactCenter;
