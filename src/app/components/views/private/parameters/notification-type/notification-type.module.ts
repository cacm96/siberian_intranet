import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { NotificationTypeRoutingModule } from './notification-type-routing.module';
import { NotificationTypeComponent } from './notification-type.component';
import { NotificationTypesComponent } from './notification-types/notification-types.component';
import { NotificationTypeCreateComponent } from './notification-type-create/notification-type-create.component';
import { NotificationTypeEditComponent } from './notification-type-edit/notification-type-edit.component';
import { NotificationTypeShowComponent } from './notification-type-show/notification-type-show.component';
import { NotificationTypeDeleteComponent } from './notification-type-delete/notification-type-delete.component';

@NgModule({
  declarations: [
	NotificationTypeComponent,
	NotificationTypesComponent,
	NotificationTypeCreateComponent,
	NotificationTypeEditComponent,
	NotificationTypeShowComponent,
	NotificationTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NotificationTypeRoutingModule
  ]
})
export class NotificationTypeModule { }
