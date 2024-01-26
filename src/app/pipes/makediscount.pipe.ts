import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makediscount',
  standalone: true
})
export class MakediscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): any {
    return (value*(args[0]/100)).toFixed(2);
  }

}
