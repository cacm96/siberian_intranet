import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IncidenceComponent } from './incidence.component';
import { IncidencesComponent } from './incidences/incidences.component';
import { IncidenceCreateComponent } from './incidence-create/incidence-create.component';
import { IncidenceEditComponent } from './incidence-edit/incidence-edit.component';
import { IncidenceShowComponent } from './incidence-show/incidence-show.component';
import { IncidenceDeleteComponent } from './incidence-delete/incidence-delete.component';

const routes: Routes = [

	{path: '', component: IncidenceComponent, canActivate: [],
		children:
		[
			{path: '', component: IncidencesComponent},
			{path: 'create', component: IncidenceCreateComponent},
			{path: 'edit/:id', component: IncidenceEditComponent},
			{path: 'show/:id', component: IncidenceShowComponent},
			{path: 'delete/:id', component: IncidenceDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class IncidenceRoutingModule { }
