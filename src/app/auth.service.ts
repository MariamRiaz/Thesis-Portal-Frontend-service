import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username, password){

    console.log("in auth service...")
    console.log("username : " + username)
    console.log("password : " + password)

    //TODO

  }
}
