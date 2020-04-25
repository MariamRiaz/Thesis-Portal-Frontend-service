import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStateImage:any = this.auth.currentAuthIcon;

  constructor(private auth: AuthService) { 
    this.loginStateImage = this.auth.currentAuthIcon;
  }

  ngOnInit() {
  }
  
}
