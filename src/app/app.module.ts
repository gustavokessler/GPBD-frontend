import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NosqlModule } from './nosql/nosql.module';
import { HttpClientModule } from '@angular/common/http';
import { MysqlModule } from './mysql/mysql.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FlexLayoutModule,
    NosqlModule,
    HttpClientModule,
    MysqlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
