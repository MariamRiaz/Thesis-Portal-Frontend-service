import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TopicsService } from '../topics.service';
import { SearchDisplayComponent } from '../search-display/search-display.component'
import { EventEmitterService } from '../event-emitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchTerm: any;

  constructor(private topicService: TopicsService, private eventEmitterService: EventEmitterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    if (data.form.valid) {
      console.log("searching...")
      console.log(data.value.searchTerm)
      // this.topicService.setSearchTerm(data.value.searchTerm)
      // this.searchDisplay.searchTopics()
      // this.topicService.searchTopics(data.value.searchTerm).subscribe((x) => {
      // console.log(x);
      // });
      this.eventEmitterService.onFirstComponentButtonClick(data.value.searchTerm);
      this.router.navigate(['/', 'search-display']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    }
  } 

}
