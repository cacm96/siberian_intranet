import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { MotiveIncidenceRoutingModule } from './motive-incidence-routing.module';
import { MotiveIncidenceComponent } from './motive-incidence.component';
import { MotiveIncidencesComponent } from './motive-incidences/motive-incidences.component';
import { MotiveIncidenceCreateComponent } from './motive-incidence-create/motive-incidence-create.component';
import { MotiveIncidenceEditComponent } from './motive-incidence-edit/motive-incidence-edit.component';
import { MotiveIncidenceShowComponent } from './motive-incidence-show/motive-incidence-show.component';
import { MotiveIncidenceDeleteComponent } from './motive-incidence-delete/motive-incidence-delete.component';

@NgModule({
  declarations: [
	MotiveIncidenceComponent,
	MotiveIncidencesComponent,
	MotiveIncidenceCreateComponent,
	MotiveIncidenceEditComponent,
	MotiveIncidenceShowComponent,
	MotiveIncidenceDeleteComponent
  ],
  imports: [
  	CommonModule,
    MaterialModule,
    MotiveIncidenceRoutingModule,
  ],
})
export class MotiveIncidenceModule { }
