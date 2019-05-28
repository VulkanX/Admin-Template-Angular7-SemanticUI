import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcpUser } from '../dataClasses/acp-user';
import { AcpUserService } from '../acp-user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'


@Component({
  selector: 'app-acp-login',
  templateUrl: './acp-login.component.html',
  styleUrls: ['./acp-login.component.css']
})
export class AcpLoginComponent implements OnInit {

  backgroundColor1: string = '#004d4d';
  backgroundColor2: string = '#008080';
  loginButtonColor: string = '#00b3b3';

  hasShadow: boolean = true;

  loginPlaceholderText: string = 'Email Address';
  passPlaceholderText: string = 'Password';
  loginTitleText: string = 'Admin Control Panel'

  loginForm: FormGroup;
  userName: string;
  password: string;

  constructor(
    private userService: AcpUserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      'userName': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required)
    })

  }

  processLogin = () => {
    //TODO Add Authentication Code!  

    this.router.navigateByUrl('/dashboard');
  }

}
