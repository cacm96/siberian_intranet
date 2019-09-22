import { Component, OnInit } from '@angular/core';
import { BorderWidth, Chart, ChartData, Point, ChartColor } from 'chart.js';

@Component({
  selector: 'sib-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {

  constructor() { }

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

    this.Barra1 = new Chart ('barra1', {
        type: 'bar',
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

    this.Barra2 = new Chart ('barra2', {
        type: 'bar',
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

    this.Linea2 = new Chart ('linea2', {
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

}
