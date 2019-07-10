import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParameterClientComponent } from './parameter-client.component';
import { ParameterClientsComponent } from './parameter-clients/parameter-clients.component';
import { ParameterClientCreateComponent } from './parameter-client-create/parameter-client-create.component';
import { ParameterClientEditComponent } from './parameter-client-edit/parameter-client-edit.component';
import { ParameterClientShowComponent } from './parameter-client-show/parameter-client-show.component';
import { ParameterClientDeleteComponent } from './parameter-client-delete/parameter-client-delete.component';

const routes: Routes = [

	{path: '', component: ParameterClientComponent, canActivate: [],
		children:
		[
			{path: '', component: ParameterClientsComponent},
			{path: 'create', component: ParameterClientCreateComponent},
			{path: 'edit/:id', component: ParameterClientEditComponent},
			{path: 'show/:id', component: ParameterClientShowComponent},
			{path: 'delete/:id', component: ParameterClientDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ParameterClientRoutingModule { }
