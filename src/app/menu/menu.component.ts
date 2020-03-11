import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TopicsService } from '../topics.service';
import { SearchDisplayComponent } from '../search-display/search-display.component'
import { EventEmitterService } from '../event-emitter.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchTerm: any;

  constructor(private topicService: TopicsService, private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    if (data.form.valid) {
      console.log(data.value.searchTerm)
      // this.topicService.setSearchTerm(data.value.searchTerm)
      // this.searchDisplay.searchTopics()
      // this.topicService.searchTopics(data.value.searchTerm).subscribe((x) => {
      // console.log(x);
      // });
      this.eventEmitterService.onFirstComponentButtonClick(data.value.searchTerm);
    }
  } 
}
