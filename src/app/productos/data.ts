import { signal } from '@angular/core';

export const productos = signal([
  { id: 1, nombre: 'Camisa', descripcion: 'Camisa de algodón', precio: 25.99, imagen: 'camisa.jpg', destacado: true },
  { id: 2, nombre: 'Pantalón', descripcion: 'Pantalón casual', precio: 34.50, imagen: 'pantalon.jpg', destacado: false },
  { id: 3, nombre: 'Zapatos', descripcion: 'Zapatos deportivos', precio: 59.99, imagen: 'zapatos.jpg', destacado: true },


]);
