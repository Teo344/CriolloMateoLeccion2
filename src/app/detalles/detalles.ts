import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { productos } from '../productos/data'; // <- signal que ya tienes
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles',
  imports: [CommonModule, RouterModule],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css'
})


export class Detalles {
  producto = productos().find(p => p.id === 0); // valor inicial

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = productos().find(p => p.id === id)!;
  }
}
