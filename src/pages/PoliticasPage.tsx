import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Cigarette } from 'lucide-react';

export function PoliticasPage() {
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90 h-72" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Políticas de Calidad
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprometidos con el bienestar y la seguridad de nuestros colaboradores
            </p>
          </div>
        </div>
      </div>

      <main className="-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Política de No Alcohol y Drogas */}
            <section className="p-8 md:p-12 border-b border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Política de No Alcohol y Drogas
                </h2>
              </div>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Las drogas y el alcohol afectan los ambientes sociales, familiares y de trabajo, 
                  aumentan los riesgos ocupacionales, atentan contra la salud y la seguridad, 
                  constituyéndose en una amenaza directa hacia la integridad física y mental de la población trabajadora en general.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="font-medium">
                    Por lo anterior, una de las políticas de A.T.I. Ltda., es prevenir el consumo de alcohol 
                    y drogas psicoactivas, para cuidar el ambiente laboral, la salud de los trabajadores, 
                    y contribuir en estilos de vida saludables.
                  </p>
                </div>
                <p className="leading-relaxed">
                  Es importante resaltar que el consumo de alcohol o de cualquier sustancia psicoactiva 
                  dentro de las instalaciones propias o contratadas de A.T.I., está prohibido, y contempla 
                  sanciones disciplinarias previamente establecidas en el reglamento institucional.
                </p>
              </div>
            </section>

            {/* Política de Tabaquismo */}
            <section className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Cigarette className="w-8 h-8 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Política de Tabaquismo
                </h2>
              </div>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  A.T.I. Ltda., consciente que el consumo de tabaco es dañino para la salud, no sólo 
                  para quienes lo consumen sino también para quienes inhalan el aire contaminado; 
                  establece como política prevenir el consumo de tabaco, cigarrillo, pipa, etc., con 
                  el fin de propiciar hábitos de vida saludable en sus colaboradores.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <p className="font-medium">
                    El consumo de tabaco y el porte de encendedores o fósforos pueden causar incendios 
                    y explosiones en áreas expuestas a sustancias combustibles.
                  </p>
                </div>
                <p className="leading-relaxed">
                  Por lo anterior y de acuerdo al reglamento de Higiene y Seguridad, A.T.I. Ltda., 
                  prohíbe el consumo de tabaco en el interior de edificaciones, vehículos y equipos 
                  operados por la compañía, sean propios o alquilados.
                </p>
                <p className="leading-relaxed">
                  Quienes reciban visitantes serán responsables de informarles acerca de esta política 
                  y de asegurar su cumplimiento al interior de la empresa.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Information */}
          <div className="mt-12 mb-24 bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-2">📞 +57 3165260580</p>
                  <p className="text-gray-600 mb-2">📞 +57 3186295186</p>
                  <p className="text-gray-600">📧 gerenciacomercial@atinet.co</p>
                </div>
                <div>
                  <p className="text-gray-600">
                    📍 Calle 16#14-41, Of. 1107<br />
                    Edificio Centro Empresarial Palma Real<br />
                    Duitama - Boyacá - Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}