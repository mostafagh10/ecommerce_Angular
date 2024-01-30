import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterserviceService } from '../services/counterservice.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private counterservice:CounterserviceService){};
  numofitemsincard !:number;
  ngOnInit(){
    this.counterservice.getcounter().subscribe((data:any) => {
      this.numofitemsincard = data.length;
    })
  }
}
