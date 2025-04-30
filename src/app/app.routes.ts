import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CarrComponent } from './components/pages/carr/carr.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';


export const routes: Routes = [
    { path: 'productos', component:ProductListComponent , title:"Productos" },
    { path: 'carrito', component:CarrComponent , title:"Carrito" },
    { path: 'checkout', component:CheckoutComponent, title:"CheckOut"},
];
