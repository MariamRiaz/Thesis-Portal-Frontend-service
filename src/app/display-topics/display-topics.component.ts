import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-display-topics',
  templateUrl: './display-topics.component.html',
  styleUrls: ['./display-topics.component.css']
})
export class DisplayTopicsComponent implements OnInit {
  topics: any;
  showContent : boolean = false;
  togglePanel: any =[];
  constructor(private topicService: TopicsService) {
   }

  ngOnInit() {
    this.getTopics()
  }

  getTopics() {
    this.topicService.getTopics().subscribe((x) => {
      this.topics = x
      console.log(this.topics)
    });
  }

}
