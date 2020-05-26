import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { CookieService }from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-display-topics',
  templateUrl: './supervisor-display-topics.component.html',
  styleUrls: ['./supervisor-display-topics.component.css']
})
export class SupervisorDisplayTopicsComponent implements OnInit {
  topics: any = [];
  showContent : boolean = false;
  togglePanel: boolean[] ;

  constructor(private router: Router, private cookieService: CookieService, private topicService: TopicsService) {
    this.togglePanel = []
    // console.log(this.togglePanel)
   }

  ngOnInit() {

    if(this.cookieService.get("tp_user")){
      // console.log("user present")
    }
    else {
      this.router.navigate(['/', 'login']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
      // console.log("user not present")
    }

    this.getTopics()
    this.togglePanel = []
  }

  getTopics() {
    this.topicService.getResearchGroupTopics().subscribe((x) => {
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

  editTopic(i){
    console.log(this.topics[i])
  }

  deleteTopic(i){
    console.log(this.topics[i].thesisTopicId)
    this.topicService.deleteTopic(this.topics[i].thesisTopicId).subscribe((x) =>{
      console.log(x)

      this.router.navigate(['/', 'supervisor-display-topics']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    })
  }

}
