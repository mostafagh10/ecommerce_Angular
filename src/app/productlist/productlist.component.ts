import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Productinterface } from '../interfaces/productinterface';
import { ProductsapiserviceService } from '../services/productsapiservice.service';
import { CounterserviceService } from '../services/counterservice.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})


export class ProductlistComponent {

  constructor(private router: Router, private productservice: ProductsapiserviceService, private counterservice: CounterserviceService) { };

  products !: Array<Productinterface>;

  ngOnInit() {
    this.productservice.getProducts().subscribe((data: any) => {
      this.products = data.products
    }, (err => {
      console.log(err);
    })
    )
  }

  movetodetailspage(id: number) {
    this.router.navigate(["/product", id]);
  }

  productsincard: Array<any> = [];

  addtocartfun(product: any) {
    let products: Array<any> = [];
    this.counterservice.getcounter().subscribe(d => products = d);
    if (!products.some((p: any) => p.id === product.id)) {
      products.push(product);
      this.counterservice.getcounter().next(products);
    }
  }

}
