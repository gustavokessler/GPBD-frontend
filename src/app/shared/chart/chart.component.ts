import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

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

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['#5cbae6', '#b6d957', '#fac364', '#93b9c6', '#d998cb', '#ccc5a8', '#8cd3ff'],
    },
  ];


  constructor() {
    /*-*/
  }

  ngOnInit(): void {
    this.pieChartLabels = this.labels;
    this.pieChartData = this.data;


  }
}
