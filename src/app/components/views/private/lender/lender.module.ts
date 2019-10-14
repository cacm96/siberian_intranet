import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent } from './lender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';
import { DetailRequestLenderComponent } from './detail-request-lender/detail-request-lender.component';

@NgModule({
  declarations:
  [
    LenderComponent,
  	DashboardComponent,
  	RequestComponent,
  	ServiceComponent,
  	DetailRequestLenderComponent,
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    MaterialModule
  ]
})
export class LenderModule { }
