import { Routes } from '@angular/router';
import { ProductListComponent } from './components/pages/product-list/product-list.component';


export const routes: Routes = [
    { path: 'productos', component:ProductListComponent , title:"Productos" },
];
