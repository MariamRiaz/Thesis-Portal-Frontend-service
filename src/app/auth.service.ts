import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loginIcon:any = "login-icon.svg";
  logoutIcon:any = "logout-icon.svg";

  currentAuthIcon:any;

  constructor() { 
    this.currentAuthIcon = this.loginIcon;
  }

  login(username, password){

    console.log("in auth service...")
    console.log("username : " + username)
    console.log("password : " + password)

    //TODO

  }

  setLoginIcon(state){

    console.log("setting icon")

    if(state=="loggedIn"){
      this.currentAuthIcon = this.logoutIcon;
      console.log("setting icon Logout")
    }
    else if(state=="loggedOut"){
      this.currentAuthIcon = this.loginIcon;
      console.log("setting icon login")
    }

  }
}
