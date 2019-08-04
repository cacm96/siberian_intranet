import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationCreateComponent } from './notification-create/notification-create.component';
import { NotificationEditComponent } from './notification-edit/notification-edit.component';
import { NotificationShowComponent } from './notification-show/notification-show.component';
import { NotificationDeleteComponent } from './notification-delete/notification-delete.component';

@NgModule({
  declarations: [
	NotificationComponent,
	NotificationsComponent,
	NotificationCreateComponent,
	NotificationEditComponent,
	NotificationShowComponent,
	NotificationDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }