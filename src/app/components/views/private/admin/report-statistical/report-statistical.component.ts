import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../../../core/services/dialog.service';
import { BorderWidth, Chart, ChartData, Point, ChartColor } from 'chart.js';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'sib-report-statistical',
  templateUrl: './report-statistical.component.html',
  styleUrls: ['./report-statistical.component.scss']
})
export class ReportStatisticalComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'addSubcategory', 'status'];
  //dataSource: MatTableDataSource<Category>;

  constructor(
    private dialogService: DialogService,
  ) { }

  servicesByGenre = [];

  ngOnInit() {
    this.requestedServices();
  }

  openDate() {
    this.dialogService.openDateDialog().afterClosed();
  }
  openFiltros() {
    {
      this.dialogService.openStatisticalFilterDialog().afterClosed();
    }
  }

  requestedServices() {
    this.requestedServices = new Chart ('requestedServices', {
      type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        datasets: [
            {
                backgroundColor: '#000000',
                borderWidth: 1,
                data: [5, 2, 6, 5, 4],
                fill: false,
                lineTension: 0.2,
                borderColor: '#242451',
            },
        ],
    },
    options: {
        hover: {
            intersect: true,
        },
        title: {
            text: ['Servicios más solicitados '],
            display: true,
        },
        tooltips: {
            intersect: true,
            mode: 'index',
            position: 'average',
            caretPadding: 2,
            displayColors: true,
            borderColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            titleAlign: 'center',
        },
        scales: {
            xAxes: [
                {
                    minBarLength: 2,
                    gridLines: {
                        display: false,
                        borderDash: [5, 15],
                        borderDashOffset: 2,
                        zeroLineBorderDash: [5, 15],
                        zeroLineBorderDashOffset: 2,
                        lineWidth: [1, 2, 3],
                    },
                },
            ],
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }
            ]
        },
        legend: {
            display: false,
            labels: {
                boxWidth: 0,
                usePointStyle: false,
                padding: 40,
            },
        },
        devicePixelRatio: 2,
        plugins: {
            bar: false,
            foo: {},
        },
    },
  });
  }
}
