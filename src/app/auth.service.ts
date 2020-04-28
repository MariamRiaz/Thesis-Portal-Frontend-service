import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginIcon:any = "login-icon.svg";
  logoutIcon:any = "logout-icon.svg";

  private loginImageSource = new BehaviorSubject<String>(this.loginIcon);
  currentAuthIcon = this.loginImageSource.asObservable();

  private loginStateSource = new BehaviorSubject<boolean>(false);
  currentAuthState = this.loginStateSource.asObservable();

  constructor() { 
  }

  login(username, password){

    // console.log("in auth service...");
    // console.log("username : " + username);
    // console.log("password : " + password);
    this.loginImageSource.next(this.logoutIcon);
    this.loginStateSource.next(true);

    //TODO

  }

  logout(){

    this.loginImageSource.next(this.loginIcon);
    this.loginStateSource.next(false);

    //TODO
  }
}
