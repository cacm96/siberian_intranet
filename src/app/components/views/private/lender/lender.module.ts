import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent } from './lender.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations:
  [
    LenderComponent,
  	RequestComponent,
  	ServiceComponent,
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    MaterialModule
  ]
})
export class LenderModule { }
