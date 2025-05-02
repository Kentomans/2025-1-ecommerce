import { Component, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/model/producto';
import { ResumenService } from '../../services/resumen.service';
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
      console.log('Resumen cargado:', this.carritoProductos);
    }
  }

  reser() {
    localStorage.removeItem('resumen');  
    localStorage.removeItem('idProduct');  
    this.carritoProductos = [];  
    this.router.navigate(['/home']);
    console.log('Resumen y carrito eliminados');
  }


  calcularTotal(): number {
    return this.carritoProductos.reduce(
      (acc, item) => acc + item.producto.price * item.cantidad,
      0
    );
  }
}
