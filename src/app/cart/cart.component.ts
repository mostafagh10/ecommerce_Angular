import { Component } from '@angular/core';
import { CounterserviceService } from '../services/counterservice.service';
import { CartitemComponent } from '../cartitem/cartitem.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartitemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private counterservice : CounterserviceService){};

  products !: Array<any>;
  ngOnInit(){
    this.counterservice.getcounter().subscribe((data) => {
      this.products = data;
    })
  }

removefromparent(id : any){
  console.log("in cart : ",this.products);
  this.products =this.products.filter((prod) => prod.id != id);
  console.log("after delete : ",this.products);
  this.counterservice.updatecounter(this.products);
}


}
