import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ServiceOrderRoutingModule } from './service-order-routing.module';
import { ServiceOrderComponent } from './service-order.component';
import { ServiceOrdersComponent } from './service-orders/service-orders.component';
import { ServiceOrderCreateComponent } from './service-order-create/service-order-create.component';
import { ServiceOrderEditComponent } from './service-order-edit/service-order-edit.component';
import { ServiceOrderShowComponent } from './service-order-show/service-order-show.component';
import { ServiceOrderDeleteComponent } from './service-order-delete/service-order-delete.component';

@NgModule({
  declarations: [
	ServiceOrderComponent,
	ServiceOrdersComponent,
	ServiceOrderCreateComponent,
	ServiceOrderEditComponent,
	ServiceOrderShowComponent,
	ServiceOrderDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceOrderRoutingModule
  ]
})
export class ServiceOrderModule { }
