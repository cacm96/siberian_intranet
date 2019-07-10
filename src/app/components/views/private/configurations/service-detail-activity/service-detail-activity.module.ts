import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ServiceDetailActivityRoutingModule } from './service-detail-activity-routing.module';
import { ServiceDetailActivityComponent } from './service-detail-activity.component';
import { ServiceDetailActivitysComponent } from './service-detail-activitys/service-detail-activitys.component';
import { ServiceDetailActivityCreateComponent } from './service-detail-activity-create/service-detail-activity-create.component';
import { ServiceDetailActivityEditComponent } from './service-detail-activity-edit/service-detail-activity-edit.component';
import { ServiceDetailActivityShowComponent } from './service-detail-activity-show/service-detail-activity-show.component';
import { ServiceDetailActivityDeleteComponent } from './service-detail-activity-delete/service-detail-activity-delete.component';

@NgModule({
  declarations: [
	ServiceDetailActivityComponent,
	ServiceDetailActivitysComponent,
	ServiceDetailActivityCreateComponent,
	ServiceDetailActivityEditComponent,
	ServiceDetailActivityShowComponent,
	ServiceDetailActivityDeleteComponent
  ],
  imports: [
    MaterialModule,
    ServiceDetailActivityRoutingModule
  ]
})
export class ServiceDetailActivityModule { }
