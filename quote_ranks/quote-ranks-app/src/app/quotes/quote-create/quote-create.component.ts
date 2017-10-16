import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote'
@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css']
})
export class QuoteCreateComponent implements OnInit {
  new_quote: Quote
  @Output() add_quote = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.new_quote = new Quote
  }

  create_quote(formController) {
    console.log(this.new_quote);
    this.add_quote.emit(this.new_quote)
    this.new_quote = new Quote
    formController.form.reset()
  }
}
