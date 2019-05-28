import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AcpUserService } from './acp-user.service'


@Injectable({
  providedIn: 'root'
})
export class AcpAuthService implements CanActivate {

  canActivate() {
    console.log('Auth Guard Check! Please Implement your own Auth Guard')

    if(this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert('You do not have permission to view this page');
      this.router.navigate(['login']);
      return false;
    }
  }

  Authenticate = (username: string, password: string) => {
    
  }
  

  constructor(
    private userService: AcpUserService,
    private router: Router
  ) { }

}
