import React, { useState } from 'react';
import { FormField } from '../careers/FormField';
import { SelectField } from '../careers/SelectField';
import { FileUpload } from '../careers/FileUpload';
import { FormSection } from './FormSection';
import { TextArea } from './TextArea';
import type { PQRSFormData } from './types';

export function PQRSForm() {
  const [formData, setFormData] = useState<PQRSFormData>({
    tipo_solicitud: 'peticion',
    proyecto: 'ATI - GERENCIA Y ADMINISTRACIÓN',
    descripcion: '',
    num_cuenta: '',
    identificacion_titular: '',
    nombre_titular: '',
    nombre: '',
    correo: '',
    identificacion: '',
    documento: 'cc',
    direccion: '',
    ciudad: 'ABRIAQUÍ',
    telefono: '',
    genero: 'masculino'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <SelectField
        label="Tipo de Solicitud"
        name="tipo_solicitud"
        value={formData.tipo_solicitud}
        onChange={handleChange}
        options={[
          { value: 'peticion', label: 'Petición' },
          { value: 'queja', label: 'Queja' },
          { value: 'reclamo', label: 'Reclamo' },
          { value: 'sugerencia', label: 'Sugerencia' }
        ]}
      />

      <FormField
        label="Proyecto"
        name="proyecto"
        type="text"
        value={formData.proyecto}
        onChange={handleChange}
        disabled
      />

      <TextArea
        label="Descripción"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Escriba su solicitud aquí..."
        required
      />

      <FileUpload />

      <FormSection title="Cuenta de servicio">
        <FormField
          label="No Cuenta"
          name="num_cuenta"
          type="text"
          value={formData.num_cuenta}
          onChange={handleChange}
        />
        <FormField
          label="Identificación del Titular"
          name="identificacion_titular"
          type="text"
          value={formData.identificacion_titular}
          onChange={handleChange}
        />
        <FormField
          label="Nombre del Titular"
          name="nombre_titular"
          type="text"
          value={formData.nombre_titular}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection title="Datos personales">
        <FormField
          label="Nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <FormField
          label="Correo electrónico"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            label="Identificación"
            name="identificacion"
            type="text"
            value={formData.identificacion}
            onChange={handleChange}
            required
          />
          <SelectField
            label="Tipo de Documento"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            options={[{ value: 'cc', label: 'CC' }]}
          />
        </div>
        <FormField
          label="Dirección"
          name="direccion"
          type="text"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-2 gap-6">
          <FormField
            label="Ciudad"
            name="ciudad"
            type="text"
            value={formData.ciudad}
            onChange={handleChange}
            disabled
          />
          <FormField
            label="Teléfono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <SelectField
          label="Género"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          options={[{ value: 'masculino', label: 'MASCULINO' }]}
        />
      </FormSection>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Enviar
        </button>
      </div>

      <p className="text-sm text-gray-600 text-center">
        Al enviar este formulario acepta nuestra{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800">
          política de términos y condiciones
        </a>
      </p>
    </form>
  );
}