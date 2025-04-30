import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { CarrComponent } from './components/pages/carr/carr.component';


export const routes: Routes = [
    { path: 'productos', component:ProductListComponent , title:"Productos" },
    { path: 'carrito', component:CarrComponent , title:"Carrito" },
];
