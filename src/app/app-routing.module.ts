import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterheaderComponent } from './masterheader/masterheader.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { MapviewComponent } from './mapview/mapview.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'masterheader',
    component: MasterheaderComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'mapview',
    component: MapviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
