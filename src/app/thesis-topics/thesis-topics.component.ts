import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-thesis-topics',
  templateUrl: './thesis-topics.component.html',
  styleUrls: ['./thesis-topics.component.css']
})
export class ThesisTopicsComponent implements OnInit {

  topics : any

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.topicsService.getTopics().subscribe((x) => {
      this.topics = x
      console.log(this.topics)
    });
  }
}
