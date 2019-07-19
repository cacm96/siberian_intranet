import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'sib-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.scss']
})
export class IndexAdminComponent implements OnInit {
  constructor() {  }

   ChartLinea = [];
   BarChart = [];
   PieChart = [];
   LineChart2 = [];


  ngOnInit() {
    /*var ctx = document.getElementById('chartlinea');
    var chartlinea = new Chart(ctx, {
  type : 'line',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', ' Jun', 'Jul', ' Ago', 'Sep', 'Oct', 'Nov', ' Dic'],
    datasets: [{
      display: false,
      data: [20, 30, 5, 19, 22, 15, 21, 9, 8, 24, 12, 10],
      fill: false,
      lineTension: 0.2,
      borderColor: 'red',
      borderWidth: 1,
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Cantidad de servicios solicitados por mes'
    },
    display: true,
    legend: {
      position: 'top',
      labels: {
        boxWidth: 0,
      }
    },
    tooltips: {
      displayColors: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    }
   }
});*/



    this.ChartLinea = new Chart('chartlinea', {
      type : 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', ' Jun', 'Jul', ' Ago', 'Sep', 'Oct', 'Nov', ' Dic'],
        datasets: [{
          display: false,
          data: [20, 30, 5, 19, 22, 15, 21, 9, 8, 24, 12, 10],
          fill: false,
          lineTension: 0.2,
          borderColor: 'red',
          borderWidth: 1,
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Cantidad de servicios solicitados por mes'
        },
        display: true,
        legend: {
          position: 'top',
          labels: {
            boxWidth: 0,
          }
        },
        tooltips: {
          displayColors: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }],
        }
       }
    });

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Plomeria', 'Pintura', 'Aire acondicionado', 'Microondas', 'Nevera', 'Jardineria'],
        datasets: [{
          label: '',
          data: [9, 7, 4, 5, 6, 10],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Cantidad de prestadores por servicio',
       //   fontColor: 'rgba(210, 210, 210, 1)'
        },
        display: true,
        legend: {
          position: 'top',
          labels: {
        //    fontColor: 'rgba(210, 210, 210, 1)',
            boxWidth: 0,
          }
        },
        tooltips: {
          displayColors: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
           //   fontColor: 'rgba(210, 210, 210, 1)',
              showLabelBackdrop: false,
            },
            gridLines: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          }],
          xAxes: [{
            ticks: {
            //  fontColor: 'rgba(210, 210, 210, 1)'
            }
          }]
           /* pointLabels: {
              fontColor: 'white'
            }*/
        }
      }
    });

    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Pintura', 'Plomería', 'Jardinería'],
        datasets: [{
          data: [15, 50, 25],
          fill: false,
          backgroundColor: [
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1,
        }]
      },
      options: {
        legend: {
          position: 'top',
          /*labels: {
            fontColor: 'rgba(210, 210, 210, 1)'
          }*/
        },
        title: {
          display: true,
          text: 'Servicios más solicitados',
          // fontColor: 'rgba(210, 210, 210, 1)'
        },
        display: true,
        tooltips: {
          displayColors: false
        },
      }
    });

    this.LineChart2 = new Chart('lineChart2', {
      type : 'line',
      data: {
        labels: ['dom ' + 23, 'lun ' + 24, 'mar ' + 25, 'mie ' + 26, 'jue ' + 27],
        datasets: [{
          label: '',
          display: false,
          data: [15, 10, 8, 6, 12, 11],
          fill: false,
          lineTension: 0.2,
          borderColor: 'yellow',
          borderWidth: 1,
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Usuarios registrados esta semana',
          fontColor: 'rgba(210, 210, 210, 1)'
        },
        display: true,
        legend: {
          position: 'top',
         /* labels: {
            fontColor: 'rgba(210, 210, 210, 1)',
            boxWidth: 0,
          }*/
        },
        tooltips: {
          displayColors: false
        },
        scales: {
          yAxes: [{
            pointLabels: {
           //   fontColor: 'rgba(210, 210, 210, 1)'
            },
            ticks: {
              beginAtZero: true,
           //   fontColor: 'rgba(210, 210, 210, 1)',
            },
            gridLines: {
             // color: 'rgba(255, 255, 255, 0.2)'
            }
          }],
          xAxes: [{
            ticks: {
             // fontColor: 'rgba(210, 210, 210, 1)'
            }
          }]
        }
      }
    });
  }

}
