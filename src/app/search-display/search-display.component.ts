import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  topics: any = [];
  showContent : boolean = false;
  togglePanel: boolean[] ;
  constructor(private topicService: TopicsService) {
    this.togglePanel = []
    console.log(this.togglePanel)
   }

   ngOnInit() {
    this
    // this.setToggle()
    this.togglePanel = []
  }



  setToggle(){
    console.log(this.topics.length)
    for(var i=0; i<this.topics.length; i++){
      console.log(i)
      this.togglePanel[i] = false;
    }    
  }

  toggler(i){
    console.log("toggler")
    console.log(i)
    console.log(this.togglePanel)
    // for(var j=0; j<this.topics.length; j++){
    //   this.togglePanel[j] = false;
    // }    
    if(this.togglePanel[i] == true)
      this.togglePanel[i] = false
    else 
      this.togglePanel[i] = true
  }

}
