import { v4 as uuid } from 'uuid'

export interface PersonajeDBZ {
  nombre: string;
  poder: number;
  edad?: number; // La edad es opcional
  raza?: string; // La raza es opcional
  uuid?: string
  // Puedes agregar más propiedades según tus necesidades
}

// Ejemplo de uso
const goku: PersonajeDBZ = {
  nombre: 'Goku',
  poder: 9000,
  edad: 35,
  raza: 'Saiyan',
  uuid: uuid()

};

const vegeta: PersonajeDBZ = {
  nombre: 'Vegeta',
  poder: 8500,
  edad: 37,
  raza: 'Saiyan',
  uuid: uuid()
};
