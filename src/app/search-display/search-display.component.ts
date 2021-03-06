import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  topics: any = [];
  message: any;
  showContent : boolean = false;
  togglePanel: boolean[] ;


  constructor(private topicService: TopicsService, private eventEmitterService: EventEmitterService) {
    this.togglePanel = []
    // console.log(this.togglePanel)
   }

   ngOnInit() {
    this.setToggle()
    this.togglePanel = []
    this.topicService.searchResults.subscribe(message => 
      this.topics = message)   
  }

  setToggle(){
    for(var i=0; i<this.topics.length; i++){
      this.togglePanel[i] = false;
    }    
  }

  toggler(i){ 
    if(this.togglePanel[i] == true)
      this.togglePanel[i] = false
    else 
      this.togglePanel[i] = true
  }

}
