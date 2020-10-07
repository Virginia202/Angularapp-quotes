import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  name: string;
  author: string; 
  date: Date; 
  quote: string;
  newQuote:any

  @Output() addQuote = new EventEmitter();

  submitQuote(){
this.newQuote = new Quote(this.name,this.author,this.quote,new Date(this.date));
this.addQuote.emit(this.newQuote);
  

}
constructor() { }

  ngOnInit(): void {
  }
}