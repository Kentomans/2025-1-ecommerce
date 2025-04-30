import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  counter: Signal<number>

  constructor(private  cartService: CartService){

    this.counter = cartService.getCounter();
    cartService.getCart();
  }

 

}
