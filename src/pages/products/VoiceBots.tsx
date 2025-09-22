import React from 'react';
import { motion } from 'framer-motion';
import { 
  Voicemail, 
  CalendarCheck, 
  Info, 
  Bot, 
  BrainCircuit, 
  PhoneOutgoing,
  CheckCircle,
  ArrowRight,
  HeartPulse,
  Banknote,
  ShoppingBag,
  Building
} from 'lucide-react';

const VoiceBots: React.FC = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'Comprensión de Lenguaje Natural',
      description: 'Nuestros bots entienden la intención del usuario, no solo palabras clave.',
    },
    {
      icon: PhoneOutgoing,
      title: 'Llamadas Salientes Masivas',
      description: 'Realiza miles de llamadas simultáneas para recordatorios, encuestas o notificaciones.',
    },
    {
      icon: CalendarCheck,
      title: 'Agendamiento y Confirmación',
      description: 'Agenda, confirma o cancela citas de forma totalmente automatizada por voz.',
    },
    {
      icon: Info,
      title: 'Entrega de Información',
      description: 'Proporciona información como estado de pedidos, saldos o resultados, 24/7.',
    },
    {
      icon: Voicemail,
      title: 'IVR Conversacional',
      description: 'Reemplaza los menús de tonos (DTMF) por una experiencia de conversación fluida.',
    },
    {
      icon: Bot,
      title: 'Integración con APIs',
      description: 'Conecta el bot a tus sistemas para consultar y actualizar información en tiempo real.',
    }
  ];

  const benefits = [
    'Reducción de costos operativos de llamadas en hasta un 80%.',
    'Disponibilidad 24/7 para atender o realizar llamadas.',
    'Capacidad para manejar un volumen de llamadas ilimitado.',
    'Eliminación de tiempos de espera para los clientes.',
    'Automatización de tareas repetitivas para los agentes.',
    'Experiencia de cliente moderna y eficiente.',
    'Recopilación de datos estructurados a través de la voz.',
    'Confirmación de citas que reduce el ausentismo en un 40%.',
    'Personalización de las conversaciones con el nombre del cliente.',
    'Voz natural y personalizable (masculina/femenina).',
    'Detección de contestador automático para optimizar campañas.',
    'Escalado transparente a un agente humano si es necesario.',
    'Soporte para múltiples idiomas y acentos.',
    'Reportes detallados del resultado de cada llamada.',
    'Cumplimiento de regulaciones de contacto (TCPA).',
    'Realización de encuestas de satisfacción post-servicio.',
    'Notificaciones masivas en casos de emergencia.',
    'Cualificación de leads a través de llamadas automáticas.',
    'Integración con cualquier sistema de telefonía (SIP Trunk).',
    'Rápida implementación y fácil gestión de campañas.'
  ];

  const useCases = [
    {
      title: 'Salud',
      description: 'Recordatorios y confirmación de citas médicas.',
      icon: HeartPulse
    },
    {
      title: 'Finanzas',
      description: 'Recordatorios de pago y notificaciones de saldo.',
      icon: Banknote
    },
    {
      title: 'Retail',
      description: 'Notificación de estado de pedidos y encuestas CSAT.',
      icon: ShoppingBag
    },
    {
      title: 'Servicios Públicos',
      description: 'Avisos de corte de servicio y recordatorios de lectura.',
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-cyan-600">Bots de Voz</span> con IA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatiza tus comunicaciones telefónicas con agentes de voz inteligentes que pueden agendar citas, realizar recordatorios y responder preguntas 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Automatizar mis Llamadas
                </button>
                <button className="border-2 border-cyan-500 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all duration-300">
                  Escuchar un Demo
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
                src="https://images.unsplash.com/photo-1589995153225-111677a2d34e?q=80&w=2070&auto=format&fit=crop"
                alt="Bots de Voz con IA"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Voicemail className="w-6 h-6 text-cyan-500"/>
                  <span className="text-sm font-medium text-gray-700">Conversación Activa</span>
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
              Tecnología de Voz de Próxima Generación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Funcionalidades diseñadas para crear experiencias de voz fluidas y eficientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-cyan-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de la Automatización por Voz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce costos, mejora la eficiencia y ofrece un servicio ininterrumpido a tus clientes.
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
              Aplicaciones por Industria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los bots de voz son una herramienta poderosa para la comunicación proactiva en cualquier sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-cyan-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para que tu empresa hable por sí misma?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contacta con nosotros. Diseñaremos una estrategia de comunicación por voz que se alinee con tus objetivos de negocio y sorprenda a tus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Diseñar mi Voice Bot</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Ver Precios
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VoiceBots;
