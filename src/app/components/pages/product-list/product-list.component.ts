import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/model/producto';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productoLista: Product[] = [];

  constructor(
    private productService:ProductService,
    private cartService: CartService
){
    this.productoLista = this.productService.productos;
  }

  addToCart(id: number): void {
    this.cartService.addToCart(id);
  }

}
