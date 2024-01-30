import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){};

  handleloginform(form:any){
    console.log(form);
  }

  showsuccessmessage(){
    this.router.navigate(["/"]);
    setTimeout(() => {
      alert("congratulation ... you entered right info")
    }, 1000);
  }

}
