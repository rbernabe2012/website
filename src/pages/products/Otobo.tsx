import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ticket, 
  Clock, 
  Zap, 
  BookOpen, 
  BarChart3, 
  Users,
  CheckCircle,
  ArrowRight,
  Headset,
  Briefcase,
  Wrench
} from 'lucide-react';

const Otobo: React.FC = () => {
  const features = [
    {
      icon: Ticket,
      title: 'Gestión de Tickets',
      description: 'Centraliza, organiza y prioriza todas las solicitudes de soporte en un solo lugar.',
    },
    {
      icon: Zap,
      title: 'Automatización de Procesos',
      description: 'Crea flujos de trabajo automáticos para asignar tickets y escalar problemas.',
    },
    {
      icon: BookOpen,
      title: 'Base de Conocimiento',
      description: 'Permite el autoservicio de clientes y agentes con artículos y guías detalladas.',
    },
    {
      icon: Clock,
      title: 'Gestión de SLAs',
      description: 'Define y monitorea los Acuerdos de Nivel de Servicio para garantizar respuestas a tiempo.',
    },
    {
      icon: BarChart3,
      title: 'Reportes y Analíticas',
      description: 'Obtén métricas clave sobre el rendimiento de tu equipo y la satisfacción del cliente.',
    },
    {
      icon: Users,
      title: 'Portal de Cliente',
      description: 'Ofrece a tus clientes un portal para crear, seguir y gestionar sus propias solicitudes.',
    }
  ];

  const benefits = [
    'Centralización de todas las interacciones de soporte.',
    'Mejora del 90% en los tiempos de primera respuesta.',
    'Aumento de la productividad de los agentes en un 40%.',
    'Reducción de costos operativos mediante automatización.',
    'Visibilidad completa del ciclo de vida de cada ticket.',
    'Flujos de trabajo personalizables para cada departamento.',
    'Integración nativa con correo electrónico y portales web.',
    'Escalado automático de tickets basado en reglas.',
    'Control de acceso granular para agentes y clientes.',
    'Campos dinámicos para capturar información específica.',
    'Historial completo de comunicaciones por cada ticket.',
    'Encuestas de satisfacción del cliente automatizadas.',
    'Reportes personalizables y dashboards en tiempo real.',
    'Cumplimiento garantizado de los SLAs definidos.',
    'Base de conocimiento para reducir tickets recurrentes.',
    'Interfaz moderna, intuitiva y fácil de usar.',
    'Soporte para múltiples idiomas y zonas horarias.',
    'API abierta para integraciones con otros sistemas.',
    'Gestión de activos vinculada a los tickets de soporte.',
    'Plataforma Open Source, flexible y sin costos de licencia.'
  ];

  const useCases = [
    {
      title: 'Soporte Técnico IT',
      description: 'Gestión de incidentes y solicitudes de TI.',
      icon: Headset
    },
    {
      title: 'Atención al Cliente',
      description: 'Manejo de consultas, quejas y reclamos.',
      icon: Users
    },
    {
      title: 'Recursos Humanos',
      description: 'Gestión de solicitudes internas de empleados.',
      icon: Briefcase
    },
    {
      title: 'Operaciones',
      description: 'Coordinación de mantenimiento y servicios.',
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-teal-600">Otobo</span> - Mesa de Ayuda Inteligente
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Organiza, automatiza y optimiza tu soporte técnico y atención al cliente con una plataforma de ticketing flexible y potente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Solicitar Implementación
                </button>
                <button className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-300">
                  Ver Demo
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
                src="https://images.unsplash.com/photo-1554224155-169544351720?q=80&w=2070&auto=format&fit=crop"
                alt="Mesa de Ayuda Otobo"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Ticket className="w-6 h-6 text-teal-500"/>
                  <span className="text-sm font-medium text-gray-700">Tickets Resueltos: 1,204</span>
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
              Plataforma de Soporte Integral
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Otobo te da el control total sobre tus operaciones de soporte con herramientas de nivel empresarial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-teal-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Implementar Otobo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo Otobo transforma tu servicio de atención y soporte.
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
              Aplicaciones Departamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Otobo es tan flexible que se adapta a las necesidades de múltiples áreas de tu empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-teal-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para optimizar tu soporte?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contacta a nuestros expertos para un análisis gratuito de tus necesidades y una demostración personalizada de Otobo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Agendar Consulta</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                Ver Casos de Éxito
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Otobo;
