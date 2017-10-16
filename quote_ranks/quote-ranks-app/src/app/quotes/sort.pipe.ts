import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from './quote'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(quotes: Array<Quote>): Array<Quote> {
    return quotes.sort((a, b)=>{
      console.log('here is the sort', b.rating-a.rating);
      return b.rating - a.rating});
  }

}
