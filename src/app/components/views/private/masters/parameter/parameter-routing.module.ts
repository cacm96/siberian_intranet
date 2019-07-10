import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParameterComponent } from './parameter.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ParameterCreateComponent } from './parameter-create/parameter-create.component';
import { ParameterEditComponent } from './parameter-edit/parameter-edit.component';
import { ParameterShowComponent } from './parameter-show/parameter-show.component';
import { ParameterDeleteComponent } from './parameter-delete/parameter-delete.component';

const routes: Routes = [

	{path: '', component: ParameterComponent, canActivate: [],
		children:
		[
			{path: '', component: ParametersComponent},
			{path: 'create', component: ParameterCreateComponent},
			{path: 'edit/:id', component: ParameterEditComponent},
			{path: 'show/:id', component: ParameterShowComponent},
			{path: 'delete/:id', component: ParameterDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ParameterRoutingModule { }
