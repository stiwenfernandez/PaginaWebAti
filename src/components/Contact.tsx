import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para más información
          </p>
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Teléfono */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Teléfono</h3>
                <p className="mt-1 text-gray-600">+1 (234) 567-8900</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Email</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=gerenciacomercial@ati.net.co
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-gray-600 underline hover:text-primary"
                >
                  gerenciacomercial@ati.net.co

                </a>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary">Dirección</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1896607707254!2d-73.03649712643713!3d5.82886333084852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a3f0c7b642eb7%3A0x22ed41281ee27778!2sCentro%20Empresarial%20Palma%20Real!5e0!3m2!1ses!2sco!4v1734355534289!5m2!1ses!2sco"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Campo Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Campo Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 px-6 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
