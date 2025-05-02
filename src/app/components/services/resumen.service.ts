import { Injectable } from '@angular/core';
import { Product } from './model/producto';

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor() { }

    
  private resumen: { producto: Product; cantidad: number }[] = [];

  setResumen(resumen: { producto: Product; cantidad: number }[]) {
    this.resumen = resumen.map(item => ({
      producto: { ...item.producto },
      cantidad: item.cantidad
    }));
    localStorage.setItem('resumen', JSON.stringify(this.resumen));
  }

  getResumen(): { producto: Product; cantidad: number }[] {
    if (this.resumen.length > 0) return this.resumen;
    const stored = localStorage.getItem('resumen');
    return stored ? JSON.parse(stored) : [];
  }

  clearResumen() {
    this.resumen = [];
    localStorage.removeItem('resumen');
  }

}
