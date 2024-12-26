import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CareerForm } from '../components/careers/CareerForm';
import { BriefcaseIcon } from 'lucide-react';

export function CarrerasPage() {
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90 h-72" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Banco de Hojas de Vida
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Únase al banco de hojas de vida y podrá participar en convocatorias de personal operativo de proyectos ATI.
            </p>
          </div>
        </div>
      </div>

      <main className="-mt-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <BriefcaseIcon className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Apreciado Aspirante
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Ingrese sus datos personales y seleccione el cargo al que desea ingresar:
              </p>
              <CareerForm />
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
}