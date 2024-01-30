import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MakediscountPipe } from '../pipes/makediscount.pipe';
import { Productinterface } from '../interfaces/productinterface';
import { NgFor } from '@angular/common';
import { ProductsapiserviceService } from '../services/productsapiservice.service';
import { CounterserviceService } from '../services/counterservice.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [MakediscountPipe,NgFor],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

constructor(private activeRoute:ActivatedRoute,private productservice : ProductsapiserviceService,private counterservice:CounterserviceService){};

productdetails : any;

ngOnInit(){
  const id = this.activeRoute.snapshot.params["id"];
  this.productservice.getProductDetails(id).subscribe((data) => {
    console.log(data);
    this.productdetails = data;
  })
}

productsincard : Array<any>=[];

  addtocartfun(product: any) {
    let products: Array<any> = [];
    this.counterservice.getcounter().subscribe(d => products = d);
    if (!products.some((p: any) => p.id === product.id)) {
      products.push(product);
      this.counterservice.getcounter().next(products);
    }
}

}
