import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { IncidenceRoutingModule } from './incidence-routing.module';
import { IncidenceComponent } from './incidence.component';
import { IncidencesComponent } from './incidences/incidences.component';
import { IncidenceCreateComponent } from './incidence-create/incidence-create.component';
import { IncidenceEditComponent } from './incidence-edit/incidence-edit.component';
import { IncidenceShowComponent } from './incidence-show/incidence-show.component';
import { IncidenceDeleteComponent } from './incidence-delete/incidence-delete.component';

@NgModule({
  declarations: [
	IncidenceComponent,
	IncidencesComponent,
	IncidenceCreateComponent,
	IncidenceEditComponent,
	IncidenceShowComponent,
	IncidenceDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IncidenceRoutingModule
  ]
})
export class IncidenceModule { }
