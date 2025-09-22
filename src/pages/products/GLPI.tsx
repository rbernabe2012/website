import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  FileText, 
  DollarSign, 
  Shield, 
  RefreshCw, 
  Search,
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  HardDrive,
  Lightbulb,
  Banknote
} from 'lucide-react';

const GLPI: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'Inventario Automático',
      description: 'Descubre y centraliza todo tu hardware y software de forma automática.',
    },
    {
      icon: FileText,
      title: 'Gestión de Licencias',
      description: 'Controla el uso de licencias de software para optimizar costos y asegurar cumplimiento.',
    },
    {
      icon: Database,
      title: 'Gestión de Activos (ITAM)',
      description: 'Administra el ciclo de vida completo de tus activos, desde la compra hasta el retiro.',
    },
    {
      icon: DollarSign,
      title: 'Gestión Financiera',
      description: 'Asocia costos, presupuestos y contratos a tus activos para un control financiero total.',
    },
    {
      icon: RefreshCw,
      title: 'Mesa de Ayuda Integrada',
      description: 'Vincula tickets de soporte directamente a los activos afectados para un diagnóstico rápido.',
    },
    {
      icon: Shield,
      title: 'Reportes y Cumplimiento',
      description: 'Genera reportes detallados para auditorías y toma de decisiones estratégicas.',
    }
  ];

  const benefits = [
    'Visibilidad del 100% de los activos de hardware y software.',
    'Reducción de hasta un 30% en costos de licenciamiento.',
    'Ahorro de tiempo con descubrimiento automático de red.',
    'Toma de decisiones basada en datos precisos y actualizados.',
    'Simplificación de auditorías de software y hardware.',
    'Optimización de la planificación de compras y renovaciones.',
    'Mejora de la seguridad al detectar software no autorizado.',
    'Gestión centralizada del ciclo de vida de cada activo.',
    'Asignación de activos a usuarios y ubicaciones.',
    'Control de contratos de soporte y garantías.',
    'Integración con sistemas de monitoreo como Zabbix.',
    'Base de datos de configuración (CMDB) robusta.',
    'Gestión de componentes y relaciones entre activos.',
    'Reservas de activos para proyectos o nuevos empleados.',
    'Generación de códigos de barras y QR para activos.',
    'Plataforma Open Source, adaptable y sin costo de licencia.',
    'Historial completo de cambios y movimientos de activos.',
    'Cálculo de depreciación y valor residual de activos.',
    'Plantillas de activos para estandarizar el inventario.',
    'Mejora en la resolución de incidentes al tener info del activo.'
  ];

  const useCases = [
    {
      title: 'Auditoría de Software',
      description: 'Asegura el cumplimiento de licencias.',
      icon: ClipboardCheck
    },
    {
      title: 'Planificación de TI',
      description: 'Planifica renovaciones de hardware y software.',
      icon: Lightbulb
    },
    {
      title: 'Gestión de Seguridad',
      description: 'Identifica vulnerabilidades y activos no gestionados.',
      icon: Shield
    },
    {
      title: 'Control Financiero',
      description: 'Realiza un seguimiento de los costos de TI.',
      icon: Banknote
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-indigo-600">GLPI</span> - Gestión de Activos IT
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Obtén control total sobre tu infraestructura tecnológica. GLPI centraliza el inventario, la gestión financiera y el ciclo de vida de todos tus activos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Iniciar Proyecto
                </button>
                <button className="border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300">
                  Consultar Experto
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
                src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=2070&auto=format&fit=crop"
                alt="Gestión de Activos GLPI"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Database className="w-6 h-6 text-indigo-500"/>
                  <span className="text-sm font-medium text-gray-700">Activos Gestionados: 5,000+</span>
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
              Control y Visibilidad Total
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las herramientas de GLPI te permiten administrar cada aspecto de tu parque tecnológico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Usar GLPI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimiza costos, mejora la seguridad y simplifica la gestión de tu infraestructura de TI.
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
              Aplicaciones Estratégicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GLPI es una herramienta clave para la gestión estratégica de TI y finanzas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-indigo-50 to-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas Orden en tu Inventario?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Permite que nuestros especialistas implementen y configuren GLPI para darte una visión 360° de tu tecnología.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Solicitar Auditoría Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Descargar Guía ITAM
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GLPI;
