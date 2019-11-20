import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { BorderWidth, Chart, ChartData, Point, ChartColor } from 'chart.js';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'sib-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
    public isDate: boolean = false;
    public fecha: Date;
    public minDate = new Date();
    public maxDate = new Date();
    public dateFechaIn: any;
    public dateFechaFin: any;


  //  @ViewChild('callFecha') callFecha: TemplateRef;
  //  @ViewChild('callFiltro') callFiltro: TemplateRef;


  constructor(public dialog: MatDialog) { }

  Linea = [];
  Barra1 = [];
  Barra2 = [];
  Linea2 = [];


  ngOnInit() {

    this.Linea = new Chart ('linea', {
        type: 'line',
      data: {
          labels: ['group 1', 'group 2'],
          datasets: [
              {
                  backgroundColor: '#000000',
                  borderWidth: 1,
                  label: 'test',
                  data: [1, null, 3],
              },
              {
                  backgroundColor: '#ff0000',
                  borderWidth: { top: 1, right: 1, bottom: 0, left: 1 },
                  label: 'test',
                  data: [1, 3, 5],
              }
          ],
      },
      options: {
          hover: {
              intersect: true,
          },
          title: {
              text: ['foo', 'bar'],
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
                      ticks: {
                          callback: Math.floor,
                      },
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
          },
          legend: {
              display: true,
              labels: {
                  usePointStyle: true,
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
/*
penDialog(): void {
    const dialogRef = this.dialog.open(this.callFecha, {
      width: '250px',
      data: {name: this.dateFechaIn, animal: this.dateFechaFin
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dateFechaIn = result;
      this.dateFechaFin = result;
    });
  }

  callFil(): void {
    const dialogRef = this.dialog.open(this.callFiltro, {
      width: '250px',
      data: {name: this.dateFechaIn, animal: this.dateFechaFin
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dateFechaIn = result;
      this.dateFechaFin = result;
    });
  }

  

onNoClick(): void {
    this.dialogRef.close();
  }

changeDate(type: string, event: MatDatepickerInputEvent<Date>)
  {
    this.isDate = true;
    this.fecha = event.value;
    this.dateFechaIn = event.value;
    this.dateFechaFin = event.value;
  }*/

}

