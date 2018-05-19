import { Component, OnInit } from '@angular/core';
import { ChartistModule } from 'ng-chartist';

import * as Chartist from 'chartist';

declare var google: any;
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
  public open_incidents:any;
  role:string;
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
              offset: 120
            }
        }
      }
  }

  draw_open_incidences_chart() {
    let data = google.visualization.arrayToDataTable([
      ['Appliances', 'New', 'Assigned', 'InProgress', { role: 'annotation' } ],
      ['Laundry Care', 10, 44, 20, ''],
      ['Cooking and Baking', 6, 52, 23, ''],
      ['Dishwasher', 18, 39, 9, ''],
      ['Cooling', 5, 12, 10, ''],
      ['Coffee Machines', 8, 4, 12, '']
    ]);

    let options = {
      chartArea: {
        left: 120,
      },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
      colors: ['#fdcdcd','#ff5252','#a70000'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));
    open_incidences_chart.draw(data, options);
  }

  customer_suffering_report(){

    let data = google.visualization.arrayToDataTable([
      ['Appliances', '#Sufferers'],
      ['Laundry Care', 20],
      ['Cooking and Baking', 55,],
      ['Dishwasher', 32],
      ['Cooling', 45],
      ['Coffee Machines', 8]
    ]);

    let options = {
      chartArea: {width: '50%'},
      hAxis: {
        title: 'Customers Suffering',
        minValue: 0
      },
      vAxis: {
        title: 'Appliances'
      },
      'legend': 'top',
      colors:['#ff9800'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));
    chart.draw(data, options);
  }

  incident_weekly_report() {
    let data = google.visualization.arrayToDataTable([
      ['Appliances', 'Carry Forward', 'New', 'Closed'],
      ['Laundry Care', 10, 40, 25],
      ['Cooking', 26, 42, 20],
      ['Dishwasher', 2, 9, 12],
      ['Cooling', 15, 22, 10],
      ['Coffee Machines', 3, 4, 2]
    ]);


    let options = {
      chartArea: {
        left: 120,
      },
      hAxis: {
        title: 'Incidents',
      },
      vAxis: {
        title: 'Appliances'
      },
      'legend': 'top',
      bars: 'vertical',
      colors:['#cddc3a','#8ac34a','#3a8a3d'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
    chart.draw(data, options);
  }

  regions_chart(){
    {
      let data = google.visualization.arrayToDataTable([
        ['Province', 'Weekly Open Incidents'],
        ['Rajasthan', 20],
        ['Maharashtra', 200],
        ['Haryana', 30],
        ['Gujarat', 40],
        ['Tamil Nadu', 50],
        ['Nagaland', 10],
        ['Karnataka', 70],
        ['Punjab', 10],
        ['Uttar Pradesh', 15],
        ['Madhya Pradesh', 5],
        ['Andhra Pradesh', 27],
        ['Delhi', 150],
        ['Kerala', 2],
        ['Bihar', 3],
        ['Orissa', 2],
        ['Manipur', 5],
        ['West Bengal',20],
        ['Meghalaya', 4],
        ['Tripura', 2],
        ['Himachal Pradesh', 10],
        ['Telangana', 45],
        ['Assam', 15],
        ['Chhattisgarh', 45],
        ['Jharkhand', 15],
        ['Jammu and Kashmir', 12]
      ]);

      let options = {
      region: 'IN', 
          resolution: 'provinces',
          colorAxis: {colors: ['#01bcd7']},
          animation: {
            "startup": true,
            duration: 600,
            easing: 'in-out'
          }
          };

      let chart = new google.visualization.GeoChart(document.getElementById('regions_chart'));

      chart.draw(data, options);
    }
  }

  ngOnInit() {
    this.role = localStorage.role;
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(this.draw_open_incidences_chart);
    google.charts.setOnLoadCallback(this.customer_suffering_report);
    google.charts.setOnLoadCallback(this.incident_weekly_report);
    google.charts.setOnLoadCallback(this.regions_chart);
  }
}

