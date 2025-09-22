import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovación',
      description: 'Estamos a la vanguardia de las últimas tecnologías para ofrecer soluciones disruptivas.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos como socios estratégicos para garantizar el éxito de nuestros clientes.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Nos comprometemos con la calidad y la mejora continua en todos nuestros servicios.'
    },
    {
      icon: Globe,
      title: 'Impacto Global',
      description: 'Nuestras soluciones trascienden fronteras para conectar empresas mundialmente.'
    }
  ];

  const stats = [
    { number: '200+', label: 'Clientes Satisfechos' },
    { number: '50+', label: 'Proyectos Implementados' },
    { number: '99.9%', label: 'Uptime Garantizado' },
    { number: '24/7', label: 'Soporte Técnico' }
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
              Sobre <span className="text-primary-600">Sempitecno</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos una empresa líder en soluciones tecnológicas empresariales, 
              especializada en la implementación de herramientas avanzadas que 
              transforman la manera en que las empresas operan y se relacionan con sus clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format"
                alt="Equipo Sempitecno"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Democratizar el acceso a tecnologías avanzadas, proporcionando a empresas 
                  de todos los tamaños las herramientas necesarias para competir en la era digital. 
                  Creemos que la tecnología debe ser un facilitador, no una barrera.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconocidos como el socio tecnológico de confianza que impulsa la 
                  transformación digital en América Latina, creando un ecosistema donde 
                  la innovación y la eficiencia empresarial convergen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada una de nuestras decisiones y acciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Logros en Números
            </h2>
            <p className="text-xl opacity-90">
              La confianza de nuestros clientes se refleja en estos resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales apasionados por la tecnología y comprometidos con el éxito de nuestros clientes
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experiencia y Dedicación
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Nuestro equipo multidisciplinario combina años de experiencia en tecnología, 
                desarrollo de software, análisis de procesos empresariales y atención al cliente. 
                Cada miembro aporta una perspectiva única que enriquece nuestras soluciones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-gray-700">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-gray-700">Especialistas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-gray-700">Comprometidos</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
