import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './../quote'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() this_quote: Quote

  constructor() { }

  ngOnInit() {
  }

}
