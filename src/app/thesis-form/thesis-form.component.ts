import { Component, OnInit } from '@angular/core';
// import { HttpClient  } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material';
import { TopicsService } from '../topics.service'; // for the service
import { ModalService } from  '../modal.service';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-thesis-form',
  templateUrl: './thesis-form.component.html',
  styleUrls: ['./thesis-form.component.css']
})
export class DummyComponent implements OnInit {

  bodyText : any;

// for the service declare private variable 
  constructor(private calendar: NgbCalendar,
    public dialog: MatDialog, 
    private topicsService: TopicsService,
    private modalService: ModalService) { }
  result = null;
  topic = {
    title: '',
    researchGroup: '',
    desc: '',
    supvsr: '',
    musthave: '',
    nth: '',
    contact: '',
    date: ''
  }
  model: NgbDateStruct;
  date: { year: number, month: number };
  selectToday() {
    this.model = this.calendar.getToday();
  }
  isSubmitted = false;

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
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
      var date = data.value.date.day + "-" + data.value.date.month + "-" + data.value.date.year;
      data.value.date = date;
      var request={
        "title":data.value.title,
        "supervisor":data.value.supvsr,
        "description":data.value.desc,
        "MustHave":data.value.musthave,
        "NiceToHave":data.value.nth,
        "contact":data.value.contact,
        "startDate":data.value.date
      }
      // sends data to the service which then adds it to db.json
      this.topicsService.setTopics(request);
      // this.openDialog();
      this.openModal('topic-modal');
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
