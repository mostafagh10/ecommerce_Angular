import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { passwordValidator } from '../customvalidators/customvalidator';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;
  constructor(private router: Router){
    this.registerForm = new FormGroup({
      username: new FormControl("",[Validators.required, Validators.pattern('[a-zA-Z]+')]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(8),passwordValidator()]),
      confirmpassword:new FormControl("",[Validators.required])
    })
  }
  
  validatePasswordConfirmation(): void {
    const passwordValue = this.registerForm.get('password')?.value;
    const confirmPasswordValue = this.registerForm.get('confirmpassword')?.value;

    if (passwordValue !== confirmPasswordValue) {
      this.registerForm.get('confirmpassword')?.setErrors({ 'mismatch': true });
    } else {
      this.registerForm.get('confirmpassword')?.setErrors(null);
    }
  }

  handleregisterform(){
    console.log(this.registerForm);
    this.router.navigate(['/login']);
    setTimeout(() => {
      alert("congratulation ... you entered right info ... please login")
    }, 1000);
  }

}


