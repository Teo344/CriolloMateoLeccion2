import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  imports: [CommonModule,FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css'
})
export class Contactos {
    nombre = '';
  email = '';
  mensaje = '';

  enviarMensaje() {
    console.log('Mensaje enviado:', {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    });

    // Limpiar formulario
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
