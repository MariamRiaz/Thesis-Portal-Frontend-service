import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;
  
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  // changeMess(){
  //   console.log("changing1")
  //   this.auth.changeMessage();
  // }

  login(data: NgForm){
    if (data.form.valid) {
      console.log("authenticating...")

      this.auth.login(data.value.username, data.value.password)

      this.auth.setLoginIcon("loggedIn")
      
      this.router.navigate(['/', 'supervisor-dashboard']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    }
  }

}
