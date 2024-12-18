import React from 'react';
import { Wrench, BarChart, Settings, Users } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Mantenimiento Industrial',
    description: 'Servicios especializados de mantenimiento preventivo y correctivo para equipos industriales.'
  },
  {
    icon: BarChart,
    title: 'Recuperación de Cartera',
    description: 'Gestión profesional y efectiva de cobros y recuperación de activos financieros.'
  },
  {
    icon: Settings,
    title: 'Optimización de Procesos',
    description: 'Mejora continua de procesos industriales para maximizar la eficiencia operativa.'
  },
  {
    icon: Users,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento experto en implementación y mejora de sistemas industriales.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para la industria con un equipo altamente calificado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}