import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Array<Quote>

  constructor() { }

  ngOnInit() {
    this.quotes = []
  }

  create_quote(new_quote: Quote) {
    console.log('Emission heard');
    this.quotes.push(new_quote)
  }
  upRating(idx) {
    console.log("Click received from", idx);
    this.quotes[idx].rating += 1
  }
  downRating(idx) {
    this.quotes[idx].rating -= 1
  }
}
