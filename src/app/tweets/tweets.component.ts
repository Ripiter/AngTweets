import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  

  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
   }

  ngOnInit() {
  }

  check(value : string){

    if(this.search == '')
      return false;

    if(value.includes(this.search))
    {
        return true;
    }
    
    return false;
  }
  
  date : number;
  checkforDate(value : Date){
    this.date = <number><any>(value.getMonth() + 1).toString().slice(-2);
    
    if(this.date == 5)
      return true;

    return false;
  }
  checkForLikes(value : number){
    if(value > 90000){
      return true;
    }
    return false;
  }


  onClickMe(){
    this.search = this.hiddenSearch;
  }

  search : string;
  hiddenSearch : string;

  onKey(value: string) {
    if(value == "")
      this.search = "";
    this.hiddenSearch = value;

  }

}
