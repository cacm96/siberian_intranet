import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { ActivitysComponent } from './activitys/activitys.component';
import { ActivityCreateComponent } from './activity-create/activity-create.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityShowComponent } from './activity-show/activity-show.component';
import { ActivityDeleteComponent } from './activity-delete/activity-delete.component';

@NgModule({
  declarations: [
	ActivityComponent,
	ActivitysComponent,
	ActivityCreateComponent,
	ActivityEditComponent,
	ActivityShowComponent,
	ActivityDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
