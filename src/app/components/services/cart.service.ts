import { Injectable, signal } from '@angular/core';
import { Product } from './model/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(){}

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
      const prod= this.getCart();
      prod.push(id);
      localStorage.setItem('idProduct', JSON.stringify(prod));
      this.incremento();
  }

  removeFromCart(id:number){
    this.decremento();
  const prod = this.getCart(); 
  const index = prod.indexOf(id);
  if (index !== -1) {
    prod.splice(index, 1); 
  }
  localStorage.setItem('idProduct', JSON.stringify(prod));
  }

  Delete(id: number) {
    const prod = this.getCart(); 
    const nuevaLista = prod.filter(p => p !== id); 
  
    const eliminados = prod.length - nuevaLista.length;
    for (let i = 0; i < eliminados; i++) {
      this.decremento();
    }
  
    localStorage.setItem('idProduct', JSON.stringify(nuevaLista));
  }
  

  removeCart() {
      localStorage.removeItem('idProduct'); 
      this.reset();
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
    this.count.set(0)
  }

  
}


