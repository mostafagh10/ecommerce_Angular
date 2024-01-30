import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  standalone: true,
  imports: [],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.css'
})
export class CartitemComponent {
  @Input() productitem : any;
  @Output() sendremoveproduct = new EventEmitter<any>();

  number:number=1;

  increasequantity(){
    this.number = this.number+1;
  }

  decresequantity(){
    this.number = this.number-1;
  }

  removefromcart(id : any){
    this.sendremoveproduct.emit(id);
  }



}
