import { CommonModule } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { productos } from '../productos/data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  productosDestacados = computed(() =>
    productos().filter(p => p.destacado)
  );


  constructor(private router: Router) {}

irA(ruta: string) {
  this.router.navigate([ruta]);
}
}
