import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { CookieService }from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {ModalComponent} from '../modal/modal.component';
import { ModalService } from  '../modal.service';

@Component({
  selector: 'app-supervisor-display-topics',
  templateUrl: './supervisor-display-topics.component.html',
  styleUrls: ['./supervisor-display-topics.component.css']
})
export class SupervisorDisplayTopicsComponent implements OnInit {
  topics: any = [];
  showContent : boolean = false;
  togglePanel: boolean[] ;
  private todeleteId : string;

  constructor(private router: Router, private cookieService: CookieService, private topicService: TopicsService, private modalService: ModalService) {
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
    this.router.navigate(['/create-topic/'+this.topics[i].thesisTopicId]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

  confirmDelete(i){
    this.todeleteId = i;
    this.openModal('topic-del-modal');
  }

  deleteTopic(){
    console.log(this.topics[this.todeleteId].thesisTopicId)
    this.topicService.deleteTopic(this.topics[this.todeleteId].thesisTopicId).subscribe((x) =>{
      
      // TODO add modal

      console.log(x)
      
      this.getTopics()
      this.closeModal('topic-del-modal')
    })

  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
