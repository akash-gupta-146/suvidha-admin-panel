import { Component, OnInit } from '@angular/core';
import { ChartistModule } from 'ng-chartist';

import * as Chartist from 'chartist';


declare var require: any;

const data: any = require('./data.json');



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public chart: any;
  public customer_suffering:any;
  constructor() {
    this.customer_suffering = 
      {
        data: data.customer_suffering,
        type: 'Bar',
        options: {
          seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
              offset: 70
            }
        }
      }




  }

  ngOnInit() {

  }
  // new ChartistComponent.Line()

}

