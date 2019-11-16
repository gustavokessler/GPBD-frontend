import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosqlComponent } from './nosql/nosql.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [NosqlComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [NosqlComponent]
})
export class NosqlModule { }
