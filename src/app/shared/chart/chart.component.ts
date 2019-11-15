import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import 'chartjs-plugin-labels';
// tslint:disable-next-line:class-name
interface Chart {
  type: ChartType;
  data: Array<number>;
  labels: Array<string>;
  options: ChartOptions;
  colors: any;
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() data: any;
  @Input() labels: any;
  @Input() type: ChartType;

  chart: Chart;

  pieChartData: Array<number> = [];

  constructor() {
    /*-*/
  }

  ngOnInit(): void {
    this.chart = {
      type: this.type,
      data: this.data.split(',').map((e) => e = +e),
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
        plugins: {
          labels: {
            render: (args) => {
              return args.value + ' horas';
            },
            fontColor: '#fff',
            fontFamily: 'Roboto',
            textShadow: true
          }
        }
      },

      labels: this.labels.split(','),
      colors: [
        {
          backgroundColor: ['#3f51b5', '#f44336', 'green', 'purple', 'orange', 'white', 'black']
        }
      ]
    };
  }

}
