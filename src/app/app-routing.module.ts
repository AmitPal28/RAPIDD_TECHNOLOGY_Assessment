import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';

const routes: Routes = [
  { path:'',
  component: HomeComponent
  },
  { path:'\chart',
  component: PiChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
