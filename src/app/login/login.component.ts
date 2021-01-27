import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public selectedRole = "";
  public selectedProvider = "";
  public selectedPractice = "";
  public selectedInfo = "";
  userType = "physician";
  navigationType = 'login';

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('Admin');
  }

  onSignInSubmit(signin: NgForm) {
    console.log(signin.value)
  }
  onSignupSubmit(signup: NgForm) {
    console.log(signup.value);
  }


  onNavigateTo(type: string) {
    this.navigationType = type;
  }
}
