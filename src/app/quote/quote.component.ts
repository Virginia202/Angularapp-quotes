import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote("Life", "Gee Nish", "The best way to get started is quit talking and begin doing.", new  Date('2020/8/2')),
    new Quote("Growth", "Daima Lama", "The purpose of our life is to be happy.", new Date('2020/9/4')),
    new Quote("Love", "Muthoni Wairimu", "Let people be",new Date('2020/9/1')),
    new Quote("Health", "Pauline wambui", "Eat healthy",new Date('2020,9/7')),
  ];
 
  upvote(i){
    this.quotes[i].upvotes++
  }
  downvote(i){
    this.quotes[i].downvotes++
  }
  delete(i){
    console.log(i)
    this.quotes.splice(i,1)
  }
  addNewQuote(quote){
    this.quotes.push(quote)
  }
  constructor() { }
 
  ngOnInit() {
  }
  preNum:number
lastNum:number
counter:number
highestUpvote(){
  this.preNum = 0
  this.lastNum = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNum = this.quotes[this.counter].upvotes;
    if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  }
  console.log(this.preNum)
  return  this.preNum
}

}