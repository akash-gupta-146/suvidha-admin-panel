import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartistModule } from 'ng-chartist';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IncidentsComponent } from './pages/manager/incidents/incidents.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  {path : 'incidents', component : IncidentsComponent},
  {path : '', component : LoginComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    IncidentsComponent,
    // LiveChartComponent,
    // AsyncChartComponent,
    // DynamicChartComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
