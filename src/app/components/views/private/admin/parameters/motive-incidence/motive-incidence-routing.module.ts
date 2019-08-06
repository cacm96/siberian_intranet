import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MotiveIncidenceComponent } from './motive-incidence.component';
import { MotiveIncidencesComponent } from './motive-incidences/motive-incidences.component';
import { MotiveIncidenceCreateComponent } from './motive-incidence-create/motive-incidence-create.component';
import { MotiveIncidenceEditComponent } from './motive-incidence-edit/motive-incidence-edit.component';
import { MotiveIncidenceShowComponent } from './motive-incidence-show/motive-incidence-show.component';
import { MotiveIncidenceDeleteComponent } from './motive-incidence-delete/motive-incidence-delete.component';

const routes: Routes = [

	{path: '', component: MotiveIncidenceComponent, canActivate: [],
		children:
		[
			{path: '', component: MotiveIncidencesComponent},
			{path: 'create', component: MotiveIncidenceCreateComponent},
			{path: 'edit/:id', component: MotiveIncidenceEditComponent},
			{path: 'show/:id', component: MotiveIncidenceShowComponent},
			{path: 'delete/:id', component: MotiveIncidenceDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MotiveIncidenceRoutingModule { }
