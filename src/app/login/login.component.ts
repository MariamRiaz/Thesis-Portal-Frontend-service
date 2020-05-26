import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CookieService }from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;
  
  constructor(private cookieService: CookieService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if(this.cookieService.get("tp_user")){
      // console.log("user present")
      this.router.navigate(['/', 'supervisor-dashboard']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    }
    else {
      // console.log("user not present")
    }
  }

  login(data: NgForm){
    if (data.form.valid) {
      this.auth.login(data.value.username, data.value.password)
    }
    
  }

}
