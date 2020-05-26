import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  constructor(private topicService: TopicsService) { }

  ngOnInit() {
    this.getResearchGroup()
  }

  getResearchGroup() {
    this.topicService.getAllResearchGroups().subscribe((x) => {
      
      console.log(x)
    });
  }

}
