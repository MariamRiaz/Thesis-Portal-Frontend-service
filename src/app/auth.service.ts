import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Token } from './Token';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { CookieService }from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginIcon:any = "login-icon.svg";
  logoutIcon:any = "logout-icon.svg";
  user: User
  token: Token


  private loginImageSource = new BehaviorSubject<String>(this.loginIcon);
  currentAuthIcon = this.loginImageSource.asObservable();

  private loginStateSource = new BehaviorSubject<boolean>(false);
  currentAuthState = this.loginStateSource.asObservable();

  constructor(private router: Router, private notifyService: NotificationService,private cookieService: CookieService, private http: HttpClient) { 
    this.user = new User()
    this.token = new Token()
    if(this.cookieService.get("tp_user")){
      // console.log("user present")
      this.loginImageSource.next(this.logoutIcon);
      this.loginStateSource.next(true);
    }
    else {
      // console.log("user not present")
    }
    // console.log("user: " + this.cookieService.get("tp_user"))
  }

  login(username, password){

    this.user.username = username
    this.user.password = password
    this.user.researchGroupId = "xx"

    // console.log(this.user)

    // console.log("in auth service...");
    // console.log("username : " + username);
    // console.log("password : " + password);


    this.http.post<any>(environment.dbUrl+environment.authContext, this.user).subscribe((x) => {
      this.token = x
      console.log(this.token)
      
      this.cookieService.set("tp_loginToken", this.token.loginToken)
      this.cookieService.set("tp_researchGroupId", this.token.researchGroupId)
      this.cookieService.set("tp_user", this.user.username)

      this.router.navigate(['/', 'supervisor-dashboard']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    },
    (error) => {
      if(error.error == "Invalid Credentials"){
        console.log("Invalid Credentials")
        this.notifyService.showError("Login error", error.error)
      }
    });
    this.loginImageSource.next(this.logoutIcon);
    this.loginStateSource.next(true);
  }

  logout(){
    this.loginImageSource.next(this.loginIcon);
    this.loginStateSource.next(false);
    this.cookieService.deleteAll();  
  }
}
