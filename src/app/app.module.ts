import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PiChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
