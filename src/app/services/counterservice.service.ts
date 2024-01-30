import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  constructor() { }
  private counter = new BehaviorSubject<Array<any>>([]);

  getcounter(){
    return this.counter;
  }

  updatecounter(currentproducts : Array<any>){
    this.counter.next(currentproducts)
  }
  
}
