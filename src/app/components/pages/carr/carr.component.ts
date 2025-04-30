import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/model/producto';

@Component({
  selector: 'app-carr',
  imports: [RouterLink],
  templateUrl: './carr.component.html',
  styleUrl: './carr.component.css'
})
export class CarrComponent {
  
   
  counter: Signal<number>;
  carritoProductos: { producto: Product, cantidad: number }[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.counter = cartService.getCounter();
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    const idsCart = this.cartService.getCart(); 
    const allProducts = this.productService.productos;

    const cantidades: { [id: number]: number } = {};

    idsCart.forEach(id => {
      cantidades[id] = (cantidades[id] || 0) + 1;
    });

    this.carritoProductos = Object.keys(cantidades).map(idStr => {
      const id = parseInt(idStr, 10);
      const producto = allProducts.find(p => p.id === id)!;
      return {
        producto,
        cantidad: cantidades[id]
      };
    });
  }

  agregarUno(id: number) {
    this.cartService.addToCart(id);
    this.actualizarCarrito();
  }

  quitarUno(id: number) {
    this.cartService.removeFromCart(id);
    this.actualizarCarrito();
  }

  calcularTotal(): number {
    return this.carritoProductos.reduce(
      (acc, item) => acc + item.producto.price * item.cantidad,
      0
    );
  }
}
