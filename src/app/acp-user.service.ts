import { Injectable } from '@angular/core';
import { AcpUser } from './dataClasses/acp-user';

@Injectable({
  providedIn: 'root'
})
export class AcpUserService {

  constructor() { }

  currentUser: AcpUser;
  Authenticated: boolean = false;

  isLoggedIn = (): boolean => {
    return this.Authenticated;
  }

  AuthUser =  (username: string, password: string): boolean  =>  {
    let tUser: AcpUser;

    tUser.email = username;
    tUser.userName = 'DemoUser1';
    tUser.Messages = 99;

    this.currentUser = tUser;
    this.Authenticated = true;

    return true
  };

}
