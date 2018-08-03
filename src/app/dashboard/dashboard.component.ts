import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { AnimationService } from '../services/animation.service';


declare var google: any;
declare var require: any;
declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public chart: any;
  public customer_suffering:any;
  public open_incidents:any;
  role:string;
  modalChart:string;
  open_incidences: Array<any>

  constructor(private chartService:DashboardService,
              private animationService:AnimationService
   ) {}
  

  ngOnInit() {
    this.role = localStorage.role;
    window.addEventListener('scroll',this.animationService.setAnimation);
    google.charts.load('current', {packages: ['corechart', 'bar']});

    google.charts.setOnLoadCallback(this.chartService.ceo_customer_sufferers);

    google.charts.setOnLoadCallback(this.chartService.draw_open_incidences_chart);
    
    google.charts.setOnLoadCallback(this.chartService.customer_suffering_report);

    google.charts.setOnLoadCallback(this.chartService.incident_weekly_report);
    
    google.charts.setOnLoadCallback(this.chartService.regions_chart);
    
    google.charts.setOnLoadCallback(this.chartService.incidents_hour);
    
    google.charts.setOnLoadCallback(this.chartService.repair_time);

    google.charts.setOnLoadCallback(this.chartService.sufferers_piechart);
  }
}

