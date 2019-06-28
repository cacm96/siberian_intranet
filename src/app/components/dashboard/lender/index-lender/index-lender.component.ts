import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'sib-index-lender',
  templateUrl: './index-lender.component.html',
  styleUrls: ['./index-lender.component.scss']
})
export class IndexLenderComponent implements OnInit {

  constructor() { }
  LineChart = [];
  BarChart = [];
  PieChart = [];
  LineChart2 = [];

  ngOnInit() {
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Pendiente', 'Ejecución', 'Finalizado', 'Garantía' ],
        datasets: [{
          data: [2, 5, 4, 18],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
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
          labels: {
            fontColor: 'rgba(210, 210, 210, 1)'
          }
        },
        title: {
          display: true,
          text: 'Servicios según su estatus',
          fontColor: 'rgba(210, 210, 210, 1)'
        },
        display: true,
        tooltips: {
          displayColors: false
        },
        scales: {
         /* yAxes: [{
            gridLines: {
              color: 'rgba(255, 255, 255, 0.2)'
            },
            ticks: {
              beginAtZero: true,
              fontColor: 'white',
            }
          }]
        */ }
      }
    });

    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: '',
          data: [5, 3, 1, 3, 2, 4],
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
          text: 'Servicios prestados los últimos 6 meses',
          fontColor: 'rgba(210, 210, 210, 1)'
        },
        display: true,
        legend: {
          position: 'top',
          labels: {
            fontColor: 'rgba(210, 210, 210, 1)',
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
              fontColor: 'rgba(210, 210, 210, 1)',
              showLabelBackdrop: false,
            },
            gridLines: {
              color: 'rgba(255, 255, 255, 0.2)'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'rgba(210, 210, 210, 1)'
            }
          }]
           /* pointLabels: {
              fontColor: 'white'
            }*/
        }
      }
    });
  }

}
