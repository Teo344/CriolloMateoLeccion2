import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productos } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'] 
})
export class Productos {
  productos = productos;
}
