import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  chart1 = {
    data :{
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
          label: 'Premium',
          data: [50, 80, 60, 120, 80, 100, 60],
          backgroundColor: 'transparent',
          borderColor: '#0392cf',
          borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: 'transparent',
        borderColor: '#82b440',
        borderWidth: 2
      }
    ]
    },
    options:{
      scales: {
          yAxes: [{
            ticks: {
                fontColor: 'rgba(0,0,0,.6)',
                fontStyle: 'bold',
                beginAtZero: true,
                maxTicksLimit: 8,
                padding: 10
            }          
        }]       
      },
      responsive: true,
      legend: {          
        position:'bottom',
        display:false
      },
    }
  };
  chart2 = {
    data :{
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
          label: 'Premium',
          data: [50, 80, 60, 120, 80, 100, 60],
          backgroundColor: '#0392cf',
          borderColor: '#0392cf',
          borderWidth: 2
      },
      {
        label: 'Free',
        data: [100, 60, 80, 50, 140, 60, 100],
        backgroundColor: '#82b440',
        borderColor: '#82b440',
        borderWidth: 2
      }
    ]
    },
    options:{
      barValueSpacing: 1,
      scales: {
          yAxes: [{
            ticks: {
                fontColor: 'rgba(0,0,0,.6)',
                fontStyle: 'bold',
                beginAtZero: true,
                maxTicksLimit: 8,
                padding: 10
            }          
        }],
        xAxes: [{
          barPercentage: 0.4      
      }]       
      },
      responsive: true,
      legend: {          
        position:'bottom',
        display:false
      },
    }
  };
  chart3 = {
    data:{
      datasets: [{
          data: [20, 12, 10],
          backgroundColor: ["#82b440","#0392cf","#6f42c1"],
      }],
      labels: [
          'html',
          'css',
          'javascript'
      ],
      // color:["#82b440","#0392cf","#6f42c1"]
      
    },
    options:{
      legend: {          
        position:'bottom',
        display:false
      },
      cutoutPercentage: 80
    }
  };

  constructor() { }

  ngOnInit() {

 new Chart('chart-line',  {
      type: 'line',
      data: this.chart1.data,
      options: this.chart1.options
    });
 new Chart('chart-bar',  {
      type: 'bar',
      data: this.chart2.data ,
      options: this.chart2.options
    });
 new Chart('chart-doughnut',  {
      type: 'doughnut',
      data: this.chart3.data,
      options:this.chart3.options
    });

  }

}
