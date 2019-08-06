import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ServiceOrderDetailRoutingModule } from './service-order-detail-routing.module';
import { ServiceOrderDetailComponent } from './service-order-detail.component';
import { ServiceOrderDetailsComponent } from './service-order-details/service-order-details.component';
import { ServiceOrderDetailCreateComponent } from './service-order-detail-create/service-order-detail-create.component';
import { ServiceOrderDetailEditComponent } from './service-order-detail-edit/service-order-detail-edit.component';
import { ServiceOrderDetailShowComponent } from './service-order-detail-show/service-order-detail-show.component';
import { ServiceOrderDetailDeleteComponent } from './service-order-detail-delete/service-order-detail-delete.component';

@NgModule({
  declarations: [
	ServiceOrderDetailComponent,
	ServiceOrderDetailsComponent,
	ServiceOrderDetailCreateComponent,
	ServiceOrderDetailEditComponent,
	ServiceOrderDetailShowComponent,
	ServiceOrderDetailDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceOrderDetailRoutingModule
  ]
})
export class ServiceOrderDetailModule { }
