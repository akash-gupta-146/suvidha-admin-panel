import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor(private router : Router,
    private appComponent:AppComponent ) { }

  ngOnInit() {
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
