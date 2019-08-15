import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { ServiceDetailResourceRoutingModule } from './service-detail-resource-routing.module';
import { ServiceDetailResourceComponent } from './service-detail-resource.component';
import { ServiceDetailResourcesComponent } from './service-detail-resources/service-detail-resources.component';
import { ServiceDetailResourceCreateComponent } from './service-detail-resource-create/service-detail-resource-create.component';
import { ServiceDetailResourceEditComponent } from './service-detail-resource-edit/service-detail-resource-edit.component';
import { ServiceDetailResourceShowComponent } from './service-detail-resource-show/service-detail-resource-show.component';
import { ServiceDetailResourceDeleteComponent } from './service-detail-resource-delete/service-detail-resource-delete.component';

@NgModule({
  declarations: [
	ServiceDetailResourceComponent,
	ServiceDetailResourcesComponent,
	ServiceDetailResourceCreateComponent,
	ServiceDetailResourceEditComponent,
	ServiceDetailResourceShowComponent,
	ServiceDetailResourceDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceDetailResourceRoutingModule
  ]
})
export class ServiceDetailResourceModule { }
