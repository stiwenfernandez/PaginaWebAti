import React from "react";

const Servicios = () => {
  const services = [
    {
      title: "RECUPERACIÓN DE CARTERA",
      image: "/images/servicios-recuperacion.jpg",
    },
    {
      title: "FACTURACIÓN EN SITIO DE SERVICIOS PÚBLICOS Y MASIVOS",
      image: "/images/servicios-facturacion.jpg",
    },
    {
      title: "PERPE",
      subtitle: "(PROGRAMA EMPRESARIAL DE RECUPERACIÓN DE PÉRDIDAS ELÉCTRICAS)",
      image: "/images/servicios-perpe.jpg",
    },
    {
      title: "MONTAJE Y MANTENIMIENTO DE SUBESTACIONES DE ALTA TENSIÓN",
      image: "/images/servicios-montaje.jpg",
    }
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Quiénes Somos</h1>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mt-8">Misión</h2>
          <p className="text-gray-600 mt-2">
            Somos una empresa prestadora de servicios en ingeniería eléctrica y mecánica enfocados en el montaje y 
            mantenimiento de subestaciones de alta tensión, y en la gestión comercial de servicios públicos en el sector 
            oficial y privado. Contamos con recursos humanos y de infraestructura que nos permiten garantizar la 
            satisfacción de las partes interesadas, cumpliendo con sus expectativas y requerimientos.
          </p>

          <h2 className="text-3xl font-semibold mt-8">Visión</h2>
          <p className="text-gray-600 mt-2 mb-16">
            A.T.I. Ltda., seguirá siendo en el año 2023 una empresa sólida y reconocida a nivel nacional en el montaje y 
            mantenimiento de proyectos de ingeniería eléctrica y mecánica, y se fortalecerá en la gestión comercial de 
            servicios públicos.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center text-navy-blue mb-8">
          NUESTROS SERVICIOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="relative h-48 group overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="text-white text-lg font-bold">
                  {service.title}
                  {service.subtitle && (
                    <div className="text-sm mt-1">{service.subtitle}</div>
                  )}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;