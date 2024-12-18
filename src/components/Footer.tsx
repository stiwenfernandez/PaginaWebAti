import React from 'react';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ATI</h3>
            <p className="text-gray-300">
              Asistencia Técnica Industrial, expertos en servicios técnicos y recuperación de cartera.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
              

              </li>
              <li>
                <a href="/valores-corporativos" className="text-gray-300 hover:text-white transition-colors">
                  Valores Corporativos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario de atención</h4>
            <p className="text-gray-300">
              Lunes a Viernes<br />
              8:00 AM - 6:00 PM
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} ATI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}