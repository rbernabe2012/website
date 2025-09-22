import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Zap, 
  Calendar, 
  BarChart3, 
  BrainCircuit,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  Headset,
  Lightbulb,
  Briefcase
} from 'lucide-react';

const AIBots: React.FC = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'Procesamiento de Lenguaje Natural',
      description: 'Entiende y responde a las preguntas de los usuarios de forma natural y humana.',
    },
    {
      icon: MessageSquare,
      title: 'Soporte Multicanal',
      description: 'Implementa tu bot en tu sitio web, WhatsApp, Messenger y más.',
    },
    {
      icon: Zap,
      title: 'Automatización 24/7',
      description: 'Atiende a tus clientes y genera leads incluso fuera del horario de oficina.',
    },
    {
      icon: Calendar,
      title: 'Agendamiento de Citas',
      description: 'Permite que los usuarios agenden reuniones o citas directamente con el bot.',
    },
    {
      icon: BarChart3,
      title: 'Cualificación de Leads',
      description: 'Filtra y cualifica prospectos automáticamente antes de pasarlos a tu equipo de ventas.',
    },
    {
      icon: Bot,
      title: 'Integración con CRM',
      description: 'Sincroniza conversaciones y datos de leads con tu sistema CRM actual.',
    }
  ];

  const benefits = [
    'Disponibilidad de atención 24 horas, 7 días a la semana.',
    'Aumento de la captación de leads en un 50% o más.',
    'Reducción de hasta un 70% en costos de atención al cliente.',
    'Respuestas instantáneas a preguntas frecuentes.',
    'Mejora de la experiencia y satisfacción del cliente.',
    'Liberación de agentes humanos para tareas complejas.',
    'Personalización de conversaciones basada en datos del usuario.',
    'Capacidad para manejar miles de conversaciones simultáneamente.',
    'Recopilación de datos valiosos sobre las necesidades del cliente.',
    'Proceso de venta guiado y automatizado.',
    'Integración con pasarelas de pago para transacciones.',
    'Fácil de entrenar y actualizar con nueva información.',
    'Análisis de sentimientos en las conversaciones.',
    'Escalado a agente humano de forma transparente.',
    'Soporte para múltiples idiomas.',
    'Reducción de la tasa de abandono en carritos de compra.',
    'A/B testing de flujos de conversación para optimización.',
    'Cumplimiento de normativas de protección de datos.',
    'Generación de reportes sobre interacciones y rendimiento.',
    'Mejora de la imagen de marca como empresa innovadora.'
  ];

  const useCases = [
    {
      title: 'Ventas y E-commerce',
      description: 'Asistente de compras y captador de leads.',
      icon: ShoppingBag
    },
    {
      title: 'Atención al Cliente',
      description: 'Resolución de FAQs y soporte de primer nivel.',
      icon: Headset
    },
    {
      title: 'Marketing',
      description: 'Captura de leads en campañas y landing pages.',
      icon: Lightbulb
    },
    {
      title: 'Recursos Humanos',
      description: 'Onboarding de empleados y resolución de dudas internas.',
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-primary-600">Bots con IA</span> - Ventas y Soporte 24/7
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatiza tus ventas y atención al cliente con chatbots inteligentes que conversan de forma natural, capturan leads y resuelven dudas al instante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Crear mi Bot
                </button>
                <button className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300">
                  Ver Ejemplos
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
                src="https://images.unsplash.com/photo-1620712943543-2858200e9485?q=80&w=1974&auto=format&fit=crop"
                alt="Bots con Inteligencia Artificial"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-primary-500"/>
                  <span className="text-sm font-medium text-gray-700">Conversaciones Automatizadas</span>
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
              Tecnología Conversacional Avanzada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestros bots están diseñados para entender, interactuar y convertir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto Directo en tu Negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más que un chatbot, una herramienta de crecimiento estratégico.
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
              Bots para Cada Necesidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptamos la tecnología de IA a los objetivos específicos de cada departamento.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-primary-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
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
              ¿Quieres un Bot que Venda por Ti?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Hablemos sobre tus objetivos. Diseñaremos un bot de IA a la medida de tu empresa para maximizar tu ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Consulta de IA Gratuita</span>
                <ArrowRight className="w-5 h-5" />
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

export default AIBots;
