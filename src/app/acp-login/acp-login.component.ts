import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acp-login',
  templateUrl: './acp-login.component.html',
  styleUrls: ['./acp-login.component.css']
})
export class AcpLoginComponent implements OnInit {

  backgroundColor1: string = 'teal';
  backgroundColor2: string = 'teal';
  loginButtonColor: string = 'orange';

  hasShadow: boolean = false;

  loginPlaceholderText: string = 'Email Address';
  passPlaceholderText: string = 'Password';
  loginTitleText: string = 'Admin Control Panel'

  constructor(private router: Router) { }

  ngOnInit() {
  }

  processLogin = () => {
    //TODO Add Authentication Code!
    this.router.navigateByUrl('/dashboard');
  }

}
