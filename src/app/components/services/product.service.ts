import { Injectable } from '@angular/core';
import { Product } from './model/producto';
import { Productos } from './productos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  productos: Product[]= Productos;

}
