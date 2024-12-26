import React, { useState, useEffect } from 'react';

const clients = [
  {
    name: 'Vantiv',
    logo: '/images/Vanti.jpg',
  },
  {
    name: 'EBSA',
    logo: '/images/ebsa.png',
  },
  {
    name: 'Electrohuila',
    logo: '/images/Electrohuila.png',
  },
  {
    name: 'Enerca',
    logo: '/images/Enerca.png',
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      moveToNextSet();
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(timer);
  }, []);

  const moveToNextSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length); // Cambiar posición de las imágenes
  };

  const getRotatedImages = () => {
    return clients.map((_, index) => {
      const adjustedIndex = (index + currentIndex) % clients.length;
      return clients[adjustedIndex];
    });
  };

  return (
    <section id="clients" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NUESTROS CLIENTES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reconocidas empresas han confiado en nosotros
          </p>
        </div>

        {/* Única fila que rota */}
        <div className="flex items-center justify-center gap-8">
          {getRotatedImages().map((client, index) => (
            <div key={index} className="flex-shrink-0 w-1/4 px-4">
              <div className="h-32 flex items-center justify-center bg-white rounded-lg p-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
