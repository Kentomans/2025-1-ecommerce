import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

      adress!: FormGroup;
 

      constructor(private fb: FormBuilder,private router: Router){
            this.adress = this.fb.group({

              name: ['',[ Validators.required]],
              firstLastName: ['', [Validators.required]],
              secondLastName: ['', [Validators.required]],
              tel: ['', [Validators.required,]],
              email: ['', [Validators.required, Validators.email]],
              postal: ['', [Validators.required,]],
              colonia: ['', [Validators.required,]],
              city: ['', [Validators.required,]],
              calle: ['', [Validators.required,]],
              NoExter: ['', [Validators.required,]],
              agreeTerms: [false, [Validators.requiredTrue]],
            });
      }

      onSubmit(): void {
        if (this.adress.valid) {
              Swal.fire({
                title: "Guardado!",
                icon: "success",
                confirmButtonColor: "#0d6efd",
              }).then(() => {
                this.router.navigate(['/confirmacion']);
              });
        }
      }
      

}
