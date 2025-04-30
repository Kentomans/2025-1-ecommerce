import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

      adress!: FormGroup;

      constructor(private fb: FormBuilder){
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

      onSubmit():void{
        if(this.adress.valid){
        }
      }



      // Swal.fire({
      //   title: "La informacion es correcta?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!"
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire({
      //       title: "Deleted!",
      //       text: "Your file has been deleted.",
      //       icon: "success"
      //     });
      //   }
      // });
}
