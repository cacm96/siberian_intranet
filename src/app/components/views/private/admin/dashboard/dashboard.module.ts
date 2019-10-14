import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { RequestComponent } from './request/request.component';
import { RevisionComponent } from './revision/revision.component';
import { ServiceOrderComponent } from './service-order/service-order.component';


@NgModule({
  declarations:
  [
  	DashboardComponent,
    DashboardsComponent,
  	RequestComponent,
    RevisionComponent,
    ServiceOrderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})

export class DashboardModule { }
