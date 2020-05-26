import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { CookieService }from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStateImage:any;
  loginState:boolean;
  
  constructor(private cookieService: CookieService,private router: Router, private auth: AuthService) { 
  }

  ngOnInit() {
    this.auth.currentAuthIcon.subscribe(message => this.loginStateImage = message)
    this.auth.currentAuthState.subscribe(message => this.loginState = message)
  }

  loginLogout(){

    if(this.loginState){
      this.auth.logout();
    }
    
    this.router.navigate(['/', 'login']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
  
}
