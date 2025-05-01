import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CarrComponent } from './components/pages/carr/carr.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContentComponent } from './components/content/content.component';
import { ConfirmationComponent } from './components/pages/confirmation/confirmation.component';


export const routes: Routes = [
    { path: "home", component:ContentComponent, title:"GameStore"},
    { path: 'productos', component:ProductListComponent , title:"Productos" },
    { path: 'carrito', component:CarrComponent , title:"Carrito" },
    { path: 'checkout', component:CheckoutComponent, title:"CheckOut"},
    { path: 'confirmacion', component:ConfirmationComponent, title:"Confirmacion"},
    { path: '', component:ContentComponent, title:"GameStore"},
    { path: '**',pathMatch:'full', redirectTo:'/home', title:"GameStore"},
];
