import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'app';
  username:string;
  email: string;
  role:string;
  setUser(name,role,email){
    localStorage.setItem("username", name);
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);
    this.username= localStorage.username;
    this.role= localStorage.role;
    this.email= localStorage.email;
  }
  ngAfterViewInit(){
    if(localStorage.username){
      this.username= localStorage.username;
    }
  }
}
