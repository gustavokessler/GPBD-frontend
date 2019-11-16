import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@NgModule({
  declarations: [ChartComponent, LineChartComponent, BarChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ChartComponent, LineChartComponent, BarChartComponent]
})
export class SharedModule { }
