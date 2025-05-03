import { Component, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';
import { Product } from '../../services/model/producto';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  tarjet: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.tarjet = this.fb.group({
      numtarj: ['', [Validators.required, Validators.pattern('^\\d{13,19}$')]],
      nomtarj: ['', [Validators.required]],
      date: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])/\\d{2}$')]],
      cvv: ['', [Validators.required, Validators.pattern('^\\d{3,4}$')]]
    });
  }

  onSubmit(): void {
    if (this.tarjet.valid) {
      Swal.fire({
        title: "Esta Compra no es reversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0d6efd",
        cancelButtonColor: "#0d6efd",
        confirmButtonText: "Comprar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          const idsCart = this.cartService.getCart();
          const allProducts = this.productService.productos;
          const cantidades: { [id: number]: number } = {};

          idsCart.forEach(id => {
            cantidades[id] = (cantidades[id] || 0) + 1;
          });

          const resumen = Object.keys(cantidades).map(idStr => {
            const id = parseInt(idStr, 10);
            const producto = allProducts.find(p => p.id === id)!;
            return {
              producto: { ...producto },
              cantidad: cantidades[id]
            };
          });

  
          localStorage.setItem('resumen', JSON.stringify(resumen));

          this.cartService.removeCart();

          Swal.fire({
            title: "¡Compra Realizada!",
            icon: "success",
            confirmButtonColor: "#0d6efd",
          }).then(() => {
            this.router.navigate(['/resumen']);
          });
        }
      });
    }
  }

  formatFecha(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length >= 3) {
      input = input.substring(0, 2) + '/' + input.substring(2, 4);
    }
    event.target.value = input;
    this.tarjet.get('date')?.setValue(input, { emitEvent: false });
  }
}
