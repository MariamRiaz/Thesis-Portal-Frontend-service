import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialogRef: MatDialogRef<ModalComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
