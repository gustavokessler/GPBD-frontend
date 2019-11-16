import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() data: any;
  @Input() labels: any;

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];

  public lineChartColors: Color[] = [
    {
      borderColor: '#5cbae6',
      backgroundColor: 'rgba(92, 186, 230,0.0)',
    },
    {
      borderColor: '#b6d957',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#fac364',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#93b9c6',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#d998cb',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#8cd3ff',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#ccc5a8',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#d998cb',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#ccc5a8',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#93b9c6',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
    {
      borderColor: '#ccc5a8',
      backgroundColor: 'rgba(255,255,255,0.0)',
    },
  ];

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType = 'line';
  // public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.lineChartLabels = this.labels;
    this.lineChartData = this.data;
  }

}
