interface FormData {
  cargo: string;
  nombre: string;
  correo: string;
  identificacion: string;
  documento: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  genero: string;
}

interface Option {
  value: string;
  label: string;
}

export type { FormData, Option };