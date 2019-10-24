import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent } from './lender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';
import { DetailRequestLenderComponent } from './detail-request-lender/detail-request-lender.component';
import { IncidenceComponent } from './incidence/incidence.component';

@NgModule({
  declarations:
  [
    LenderComponent,
  	DashboardComponent,
  	RequestComponent,
  	ServiceComponent,
  	DetailRequestLenderComponent,
  	IncidenceComponent,
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class LenderModule { }
