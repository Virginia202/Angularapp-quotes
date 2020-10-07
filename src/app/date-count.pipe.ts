import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    const date = new Date();
    const quoteDate = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate());
    const todaysDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    var difference = Math.floor((todaysDate - quoteDate) /(1000 * 60 * 60 * 24));

    return difference
  }
}