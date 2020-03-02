import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TopicsService } from '../topics.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchTerm: any;

  constructor(private topicService: TopicsService) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    if (data.form.valid) {
      console.log(data.value.searchTerm)
      this.topicService.searchTopics(data.value.searchTerm);
    }
  }

}
