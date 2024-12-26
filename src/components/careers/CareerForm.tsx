import React, { useState } from 'react';
import { FormField } from './FormField';
import { SelectField } from './SelectField';
import { FileUpload } from './FileUpload';

export function CareerForm() {
  const [formData, setFormData] = useState({
    cargo: '',
    nombre: '',
    correo: '',
    identificacion: '',
    documento: 'cc',
    direccion: '',
    ciudad: 'ABRIAQUÍ',
    telefono: '',
    genero: 'masculino'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <SelectField
        label="Cargos disponibles"
        name="cargo"
        value={formData.cargo}
        onChange={handleChange}
        options={[{ value: 'administrador_red', label: 'ADMINISTRADOR RED' }]}
      />

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
          required
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

      <FileUpload />

      <div className="pt-4">
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