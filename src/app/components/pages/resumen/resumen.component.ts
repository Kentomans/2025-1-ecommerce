import { Component } from '@angular/core';
import { Product } from '../../services/model/producto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen',
  imports: [RouterLink],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  carritoProductos: { producto: Product, cantidad: number }[] = [];

   constructor(private router: Router,){

   }

  ngOnInit() {
    this.cargarResumen();
  }

  cargarResumen() {
    const resumen = localStorage.getItem('resumen');
    if (resumen) {
      this.carritoProductos = JSON.parse(resumen);
    }
  }

  reser() {
    localStorage.removeItem('resumen');  
    localStorage.removeItem('idProduct');  
    this.carritoProductos = [];  
    this.router.navigate(['/home']);
  }


  calcularTotal(): number {
    return this.carritoProductos.reduce(
      (acc, item) => acc + item.producto.price * item.cantidad,
      0
    );
  }
}
