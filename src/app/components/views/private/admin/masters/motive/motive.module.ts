import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { MotiveRoutingModule } from './motive-routing.module';
import { MotiveComponent } from './motive.component';
import { MotivesComponent } from './motives/motives.component';
import { MotiveCreateComponent } from './motive-create/motive-create.component';
import { MotiveEditComponent } from './motive-edit/motive-edit.component';
import { MotiveShowComponent } from './motive-show/motive-show.component';
import { MotiveDeleteComponent } from './motive-delete/motive-delete.component';

@NgModule({
  declarations: [
	MotiveComponent,
	MotivesComponent,
	MotiveCreateComponent,
	MotiveEditComponent,
	MotiveShowComponent,
	MotiveDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MotiveRoutingModule
  ]
})
export class MotiveModule { }
