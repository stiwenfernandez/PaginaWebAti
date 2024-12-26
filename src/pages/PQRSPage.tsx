import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PQRSForm } from '../components/pqrs/PQRSForm';
import { FileText } from 'lucide-react';

export function PQRSPage() {
  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90 h-72" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Formulario PQRS
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              En el siguiente formulario podrá registrar sus solicitudes, quejas, reclamos y/o sugerencias relacionadas con la empresa o el servicio.
            </p>
          </div>
        </div>
      </div>

      <main className="-mt-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Apreciado Cliente
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Ingrese los datos y en el menor tiempo nos comunicaremos con usted.
              </p>
              <PQRSForm />
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
}