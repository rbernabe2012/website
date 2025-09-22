import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  AlertTriangle, 
  BarChart3, 
  Shield, 
  Clock, 
  Zap,
  CheckCircle,
  ArrowRight,
  Database,
  Cloud,
  Globe
} from 'lucide-react';

const Zabbix: React.FC = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Monitoreo en Tiempo Real',
      description: 'Supervisión continua de servidores, redes, aplicaciones y servicios 24/7',
    },
    {
      icon: AlertTriangle,
      title: 'Alertas Inteligentes',
      description: 'Notificaciones automáticas por email, SMS y webhooks cuando se detectan problemas',
    },
    {
      icon: BarChart3,
      title: 'Dashboards Avanzados',
      description: 'Visualización de datos en tiempo real con gráficos personalizables y KPIs',
    },
    {
      icon: Shield,
      title: 'Monitoreo de Seguridad',
      description: 'Detección de amenazas y análisis de logs de seguridad en tiempo real',
    },
    {
      icon: Clock,
      title: 'Historial de Datos',
      description: 'Almacenamiento de históricos para análisis de tendencias y capacidad',
    },
    {
      icon: Zap,
      title: 'Auto-descubrimiento',
      description: 'Detección automática de dispositivos y servicios en la red',
    }
  ];

  const benefits = [
    'Reducción del 80% en tiempo de inactividad no planificado',
    'Detección proactiva de problemas antes de que afecten usuarios',
    'Optimización de recursos y capacidad de infraestructura',
    'Cumplimiento de SLAs y reportes automáticos',
    'Integración con más de 1000 tecnologías diferentes',
    'Escalabilidad para monitorear desde 10 hasta 100,000+ dispositivos',
    'Interface web intuitiva y móvil responsive',
    'API REST completa para integraciones personalizadas',
    'Mapas de red dinámicos y topología automática',
    'Monitoreo de aplicaciones web y transacciones',
    'Análisis de rendimiento de bases de datos',
    'Predicción de fallos mediante machine learning',
    'Plantillas predefinidas para tecnologías comunes',
    'Control de acceso basado en roles y permisos',
    'Reportes ejecutivos y técnicos automatizados',
    'Backup y recovery de configuraciones',
    'Monitoreo de contenedores y microservicios',
    'Integración con sistemas de ticketing',
    'Alertas escalables y políticas de notificación',
    'Soporte para SNMP, WMI, JMX y protocolos personalizados'
  ];

  const useCases = [
    {
      title: 'Centros de Datos',
      description: 'Monitoreo completo de infraestructura crítica',
      icon: Database
    },
    {
      title: 'Aplicaciones Web',
      description: 'Supervisión de rendimiento y disponibilidad',
      icon: Globe
    },
    {
      title: 'Redes Empresariales',
      description: 'Control de switches, routers y dispositivos de red',
      icon: Zap
    },
    {
      title: 'Cloud Computing',
      description: 'Monitoreo de recursos en AWS, Azure, Google Cloud',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Zabbix</span> - Monitoreo Empresarial
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                La solución de monitoreo más completa para supervisar tu infraestructura IT 
                en tiempo real. Detecta problemas antes de que afecten a tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Solicitar Demo
                </button>
                <button className="border-2 border-blue-500 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                  Ver Precios
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
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop"
                alt="Zabbix Monitoreo Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Monitoreando 24/7</span>
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
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zabbix ofrece monitoreo integral con herramientas avanzadas para mantener tu infraestructura funcionando perfectamente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Implementar Zabbix
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 20 ventajas que transformarán la gestión de tu infraestructura IT
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
              Casos de Uso Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zabbix se adapta a diferentes entornos y necesidades empresariales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para monitorear tu infraestructura?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Implementamos Zabbix personalizado para tu empresa con configuración completa y capacitación incluida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Consulta Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Descargar Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Zabbix;
