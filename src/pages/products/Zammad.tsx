import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Ticket, 
  Zap, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Headset,
  FileWarning,
  Lightbulb
} from 'lucide-react';

const Zammad: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Comunicación Omnicanal',
      description: 'Centraliza tickets desde email, WhatsApp, teléfono, web y redes sociales.',
    },
    {
      icon: Ticket,
      title: 'Sistema de Tickets Moderno',
      description: 'Una interfaz limpia y eficiente para que tus agentes gestionen las solicitudes.',
    },
    {
      icon: Zap,
      title: 'Automatización y Triggers',
      description: 'Crea reglas para automatizar respuestas, asignaciones y escalados.',
    },
    {
      icon: BookOpen,
      title: 'Base de Conocimiento Integrada',
      description: 'Reduce la carga de trabajo de tus agentes con un portal de autoayuda para clientes.',
    },
    {
      icon: Mail,
      title: 'Integración con Correo',
      description: 'Convierte cada correo electrónico en un ticket rastreable y gestionable.',
    },
    {
      icon: Phone,
      title: 'Integración CTI (Telefonía)',
      description: 'Registra llamadas y crea tickets automáticamente desde tu sistema telefónico.',
    }
  ];

  const benefits = [
    'Visión unificada de todas las conversaciones con el cliente.',
    'Reducción del tiempo de respuesta en más de un 60%.',
    'Mejora drástica en la satisfacción del cliente (CSAT).',
    'Colaboración en tiempo real entre agentes en un mismo ticket.',
    'Historial completo y auditable de cada interacción.',
    'Automatización de tareas repetitivas.',
    'Reportes detallados sobre el rendimiento del equipo.',
    'Cumplimiento de SLAs con notificaciones y escalados.',
    'Interfaz intuitiva que reduce el tiempo de capacitación.',
    'Búsqueda de texto completo en todos los tickets y artículos.',
    'Campos de ticket personalizables para cada necesidad.',
    'Plataforma Open Source, flexible y sin costos de licencia.',
    'Vistas personalizadas para organizar el trabajo de cada agente.',
    'Etiquetado y priorización de tickets.',
    'Fusión y división de tickets para una mejor gestión.',
    'Soporte para múltiples marcas o departamentos en una instancia.',
    'API REST para integraciones a medida.',
    'Seguridad robusta y control de acceso basado en roles.',
    'Notificaciones en tiempo real para agentes y clientes.',
    'Mejora la comunicación interna y externa.'
  ];

  const useCases = [
    {
      title: 'Atención al Cliente',
      description: 'Soporte omnicanal para clientes externos.',
      icon: Headset
    },
    {
      title: 'Soporte IT Interno',
      description: 'Mesa de ayuda para empleados.',
      icon: Zap
    },
    {
      title: 'Gestión de Reclamos',
      description: 'Proceso estructurado para quejas y reclamos.',
      icon: FileWarning
    },
    {
      title: 'Ventas y Consultas',
      description: 'Canaliza las solicitudes de preventa.',
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-orange-600">Zammad</span> - Soporte Omnicanal
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unifica todos tus canales de comunicación en una sola plataforma de ticketing. Ofrece un servicio al cliente excepcional, rápido y organizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Optimizar mi Soporte
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300">
                  Ver Demo en Vivo
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
                src="https://images.unsplash.com/photo-1586776911425-283c74373469?q=80&w=2070&auto=format&fit=crop"
                alt="Soporte Omnicanal con Zammad"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-orange-500"/>
                  <span className="text-sm font-medium text-gray-700">Canales Unificados</span>
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
              Funcionalidades que Impulsan tu Servicio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zammad está diseñado para hacer que el soporte sea simple para tus clientes y eficiente para tu equipo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                 <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios Clave de Zammad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforma tu atención al cliente en una ventaja competitiva.
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
              Una Solución para Múltiples Escenarios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde startups hasta grandes corporaciones, Zammad se adapta a tus procesos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu Soporte está Descentralizado?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Unifiquemos tus canales. Agenda una consulta y te mostraremos cómo Zammad puede organizar tu comunicación y deleitar a tus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Unificar mis Canales</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                Ver Casos de Éxito
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Zammad;
