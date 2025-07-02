import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Productos } from './productos/productos';
import { Contactos } from './contactos/contactos';
import { Detalles } from './detalles/detalles'; // ← Este es tu componente de detalle

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'productos', component: Productos },
  { path: 'productos/:id', component: Detalles }, // ← Ruta dinámica correcta
  { path: 'contactos', component: Contactos },
  { path: '**', redirectTo: '/home' }
];
