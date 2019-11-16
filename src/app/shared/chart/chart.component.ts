import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

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

  // options = {
  //   responsive: true,
  //   legend: {
  //     position: 'bottom'
  //   },
  //   plugins: {
  //     labels: {
  //       render: (args) => {
  //         return args.value + ' horas';
  //       },
  //       fontColor: '#fff',
  //       fontFamily: 'Roboto',
  //       textShadow: true
  //     }
  //   }
  // };

  // colors = [
  //   {
  //     backgroundColor: ['#5cbae6', '#b6d957', '#fac364', '#93b9c6', '#d998cb', '#8cd3ff', '#ccc5a8']
  //   }
  // ];


  constructor() {
    /*-*/
  }

  ngOnInit(): void {
    this.chart = {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        legend: {
          position: 'bottom'
        },
        plugins: [pluginDataLabels]
      },
      labels: this.labels,
      colors: [
        {
          backgroundColor: ['#5cbae6', '#b6d957', '#fac364', '#93b9c6', '#d998cb', '#8cd3ff', '#ccc5a8']
        }
      ]
    };


  }
}
