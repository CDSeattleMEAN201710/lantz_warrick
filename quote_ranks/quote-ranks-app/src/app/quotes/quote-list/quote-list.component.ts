import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote'

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  new_rank: number
  @Input() this_quote: Quote
  @Output() upRank = new EventEmitter()
  @Output() downRank = new EventEmitter()
  @Output() destroyOne = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  upVote(idx) {
    this.upRank.emit(idx)
  }
  downVote(idx) {
    this.downRank.emit(idx)
  }
  removeOne(idx) {
    this.destroyOne.emit(idx)
  }
}
