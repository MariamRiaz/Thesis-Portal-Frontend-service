import { Component, OnInit } from '@angular/core';
// import { HttpClient  } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { TopicsService } from '../topics.service'; // for the service
import { ModalService } from  '../modal.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';
import { CookieService }from 'ngx-cookie-service';
import {Topic} from '../Topic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thesis-form',
  templateUrl: './thesis-form.component.html',
  styleUrls: ['./thesis-form.component.css']
})
export class DummyComponent implements OnInit {

  bodyText : any;
  topic:Topic = new Topic()
  result = null;
  model: NgbDateStruct;
  date: { year: number, month: number };
  isSubmitted = false;
  public researchGroup:string;


// for the service declare private variable 
  constructor(
    private router: Router,
    private cookieService: CookieService,
    private calendar: NgbCalendar,
    public dialog: MatDialog, 
    private topicsService: TopicsService,
    private modalService: ModalService) {
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

    this.bodyText = 'This text can be updated in modal 1';
    this.getResearchGroup()
  }

  getResearchGroup() {
    this.topicsService.getCurrentResearchGroup().subscribe((x) => {
      console.log(x)
      this.researchGroup = x.researchGroup
      console.log(this.researchGroup)
    });
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      panelClass: 'custom-modalbox'
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSubmit(data: NgForm) {


    if (data.form.valid) {


      var startDate = data.value.startDate.year + "-" ;
      if(data.value.startDate.month < 10){
        startDate = startDate + "0"
      }
      startDate = startDate + data.value.startDate.month + "-"
      if (data.value.startDate.day < 10) {
        startDate = startDate + "0"
      }
      startDate = startDate + data.value.startDate.day 
      console.log(startDate)

      var request = new Topic()
      request.title = data.value.title
      request.researchGroupId = this.cookieService.get("tp_researchGroupId")
      request.supervisor = data.value.supervisor
      request.description = data.value.description
      request.mustHave = data.value.mustHave
      request.niceHave = data.value.niceHave
      request.contactInfo = data.value.contactInfo
      request.startDate = startDate
      request.createdOn = startDate // TODO : add current date 

      console.log("request : "+request)

      this.topicsService.setTopics(request).subscribe ((x) => {
        console.log(x)
        if(x.thesisTopicId){
          this.openModal('topic-modal');
        }
        else{
          // TODO : ADD ERROR MODAL
        }
      },err => {

        console.log("Error communication with database !! ")
        // TODO : ADD ERROR MODAL

      });

      data.form.reset();
    }
    else {
      this.isSubmitted = true;
    }
  }
  
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
