import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart():number[]{
    const productoId = localStorage.getItem('idProduct') ;
    if(productoId === null){
      return [];
    }
    const prod = JSON.parse(productoId);
    const length = prod.length;
    this.count.update(n => length);
    return prod;
  }

  addToCart(id:number){
    this.incremento();
      const prod= this.getCart();
      prod.push(id);
      localStorage.setItem('idProduct', JSON.stringify(prod));
      console.log('Producto agregado al carrito:', prod);
  }

  removeFromCart(id:number){
    this.decremento();
    const prod= this.getCart();
    const updated = prod.filter(item => item !== id);
    localStorage.setItem('idProduct', JSON.stringify(updated));
  }


  private count = signal<number>(0);

  getCounter(){
    return this.count;
  }

  incremento(){
    this.count.update(n => n+1);
  }

  decremento(){
    this.count.update(n => n-1);
  }

  reset(){
    this.count.set(0);
  }

}
