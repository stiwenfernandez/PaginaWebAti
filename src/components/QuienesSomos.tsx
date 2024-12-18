import React from "react";
import "./QuienesSomos.css"; 

const Servicios = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* */}
        <h1 className="text-4xl font-bold text-center mb-8">Quiénes Somos</h1>
        <p className="text-gray-700 text-lg text-center mb-6">
          Nuestra misión es ofrecer soluciones de calidad...
        </p>
        <h2 className="text-3xl font-semibold mt-8">Misión</h2>
        <p className="text-gray-600 mt-2">
          Somos una empresa prestadora de servicios en ingeniería eléctrica y mecánica enfocados en el montaje y
          mantenimiento de subestaciones de alta tensión, y en la gestión comercial de servicios públicos en el sector
          oficial y privado. Contamos con recursos humanos y de infraestructura que nos permiten garantizar la
          satisfacción de las partes interesadas, cumpliendo con sus expectativas y requerimientos.
        </p>
        <h2 className="text-3xl font-semibold mt-8">Visión</h2>
        <p className="text-gray-600 mt-2">
          A.T.I. Ltda., seguirá siendo en el año 2023 una empresa sólida y reconocida a nivel nacional en el montaje y
          mantenimiento de proyectos de ingeniería eléctrica y mecánica, y se fortalecerá en la gestión comercial de
          servicios públicos.
        </p>

        {/* Sección de servicios */}
        <section className="servicios-container mt-16">
          <h2 className="servicios-titulo text-center">SERVICIOS</h2>
          <div className="servicios-grid">
            <div className="servicio-card">
              <div className="servicio-icono red-background">
                <img src="/icono1.png" alt="Recuperación de cartera" />
              </div>
              <h3>Recuperación de cartera</h3>
              <p>de servicios públicos mediante corte y reconexión del servicio</p>
            </div>

            <div className="servicio-card">
              <div className="servicio-icono red-background">
                <img src="/icono2.png" alt="Facturación en sitio" />
              </div>
              <h3>Facturación en sitio</h3>
              <p>de servicios públicos y masivos</p>
            </div>

            <div className="servicio-card">
              <div className="servicio-icono red-background">
                <img src="/icono3.png" alt="PERPE" />
              </div>
              <h3>PERPE</h3>
              <p>Programa empresarial de recuperación de pérdidas eléctricas</p>
            </div>

            <div className="servicio-card">
              <div className="servicio-icono red-background">
                <img src="/icono4.png" alt="Montaje y mantenimiento" />
              </div>
              <h3>Montaje y mantenimiento</h3>
              <p>de subestaciones de media y alta tensión</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicios;
