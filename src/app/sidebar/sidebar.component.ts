import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  list:SidebarList[];

  constructor(private router : Router,
    private appComponent:AppComponent ) { }

  ngOnInit() {
    if(localStorage.role == 'manager'){
      this.list = [
          {
            name:'Dashboard',
            icon:'dashboard',
            route:'dashboard'
          },
          {
            name:'page',
            icon:'assignment_returned',
            route:'dashboard'
          }
      ]
    }
    if(localStorage.role == 'CEO'){
      this.list = [
          {
            name:'Dashboard',
            icon:'dashboard',
            route:'dashboard'
          }
      ]
    }
  }
logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
  this.router.navigate(['login']);
  this.appComponent.username = null;
      this.appComponent.role= null;
    this.appComponent.email= null;
}
}

export interface SidebarList{
  name:string;
  icon:string;
  route:string;
}