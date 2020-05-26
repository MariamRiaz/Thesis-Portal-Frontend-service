import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-display-topics',
  templateUrl: './display-topics.component.html',
  styleUrls: ['./display-topics.component.css']
})
export class DisplayTopicsComponent implements OnInit {
  topics: any = [];
  showContent : boolean = false;
  togglePanel: boolean[] ;
  constructor(private topicService: TopicsService) {
    this.togglePanel = []
    // console.log(this.togglePanel)
   }

  ngOnInit() {
    this.getTopics()
    this.togglePanel = []
  }

  getTopics() {
    this.topicService.getTopics().subscribe((x) => {
      this.topics = x
      this.setToggle()
      console.log(this.topics)
    });
  }

  // setting toggle of each topic to false.. ie. every card in closed
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
