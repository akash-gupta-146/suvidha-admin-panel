import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    if (localStorage.username) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    if (this.email == 'ceo@suvidha.com' && this.password == '123456') {
      this.router.navigate(['dashboard']);
      this.appComponent.setUser('Admin', 'CEO', 'ceo@ipsaa.com');
    }
    else if(this.email == 'manager@suvidha.com' && this.password == '123456'){
      this.router.navigate(['dashboard']);
      this.appComponent.setUser('Admin', 'manager', 'manager@ipsaa.com');
    } 
    else {
      alert("Invalid credentials.")
    }
  }
}