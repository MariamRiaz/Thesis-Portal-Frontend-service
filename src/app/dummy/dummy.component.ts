import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private http: HttpClient , private calendar: NgbCalendar,public dialog: MatDialog) { }
  result = null;
  topic = {
    title: '',
    desc: '',
    supvsr: '',
    req: '',
    keywords: '',
    date: ''
  }
  model: NgbDateStruct;
  date: { year: number, month: number };
  selectToday() {
    this.model = this.calendar.getToday();
  }
  isSubmitted = false;

  ngOnInit() {
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
        "requirements":data.value.req,
        "keywords":data.value.keywords
      }
      this.http.post("http://localhost:8080/saveTopic",JSON.stringify(request)).subscribe((data) => {
        console.log(data)
      
        this.openDialog();
       
       
        this.result = data;
      });
    }
    else {
      this.isSubmitted = true;
    }


  }
}
