import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from '../../../../../core/services/dialog.service';
import { BorderWidth, Chart, ChartData, Point, ChartColor, ChartType, ChartOptions } from 'chart.js';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { ServiceDetail } from 'src/app/models/serviceDetail';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sib-report-statistical',
  templateUrl: './report-statistical.component.html',
  styleUrls: ['./report-statistical.component.scss']
})
export class ReportStatisticalComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'gender', 'type'];
  dataSource: MatTableDataSource<ServiceDetail>;
  public dateIn: any;
  public dateFin: any;
  public gender: string;
  public serviceType: string;
  public serviceName: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dialogService: DialogService,
  ) { }

  servicesOrders = [];

  ngOnInit() {
    this.OrdenesServicios();
  }

  openDate() {
    this.dialogService.openDateDialog().afterClosed();
  }
  openFiltros() {
    {
      this.dialogService.openStatisticalFilterDialog().afterClosed();
    }
  }

  OrdenesServicios() {
    this.servicesOrders = new Chart ('servicesOrders', {
      type: 'line',
    data: {
        labels: [], //valores eje x
        datasets: [
            {
                backgroundColor: '#000000',
                borderWidth: 1,
                data: [], //data grafica
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
            text: ['Servicios más solicitados'],
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
