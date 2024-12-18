import React from 'react';

const clients = [
  'Empresa Industrial S.A.',
  'Manufacturas XYZ',
  'Tecnología Avanzada Corp',
  'Industrias Modernas',
  'Procesos Técnicos Ltd.',
  'Sistemas Industriales Inc.'
];

export function Clients() {
  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas que confían en nuestra experiencia y profesionalismo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-lg font-medium text-gray-900 text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}