import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carr',
  imports: [RouterLink],
  templateUrl: './carr.component.html',
  styleUrl: './carr.component.css'
})
export class CarrComponent {
    counter:Signal<number>

    constructor(private cartService: CartService){
        this.counter = cartService.getCounter();
        cartService.getCart();
    }

   
}
