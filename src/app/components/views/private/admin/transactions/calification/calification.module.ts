import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { CalificationRoutingModule } from './calification-routing.module';
import { CalificationComponent } from './calification.component';
import { CalificationsComponent } from './califications/califications.component';
import { CalificationCreateComponent } from './calification-create/calification-create.component';
import { CalificationEditComponent } from './calification-edit/calification-edit.component';
import { CalificationShowComponent } from './calification-show/calification-show.component';
import { CalificationDeleteComponent } from './calification-delete/calification-delete.component';

@NgModule({
  declarations: [
	CalificationComponent,
	CalificationsComponent,
	CalificationCreateComponent,
	CalificationEditComponent,
	CalificationShowComponent,
	CalificationDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalificationRoutingModule
  ]
})
export class CalificationModule { }
