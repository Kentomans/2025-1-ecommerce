import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CarrComponent } from './components/pages/carr/carr.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,ConfirmationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
