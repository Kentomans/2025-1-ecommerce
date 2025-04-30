import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/model/producto';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productoLista: Product[] = [];

  constructor(private productService:ProductService){
    this.productoLista = this.productService.productos;
  }

}
