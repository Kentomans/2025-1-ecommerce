import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {


  tarjet: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private cartService:CartService) {
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
            title: "¿Estas apunto de comprar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d6efd",
            cancelButtonColor: "#0d6efd",
            confirmButtonText: "Sí!",
            cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Compra Realizada!",
                icon: "success",
                confirmButtonColor: "#0d6efd",
              }).then(() => {
                this.router.navigate(['/home']);
                this.cartService.removeCart();
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
        this.tarjet.get('fecha')?.setValue(input, { emitEvent: false });
      }
      

}
