import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MysqlComponent } from './mysql/mysql.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [MysqlComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatListModule
  ],
  exports: [MysqlComponent]
})
export class MysqlModule { }
