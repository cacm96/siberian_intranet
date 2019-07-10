import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';

const routes: Routes = [

	{path: '', component: ClientComponent, canActivate: [],
		children:
		[
			{path: '', component: ClientsComponent},
			{path: 'create', component: ClientCreateComponent},
			{path: 'edit/:id', component: ClientEditComponent},
			{path: 'show/:id', component: ClientShowComponent},
			{path: 'delete/:id', component: ClientDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ClientRoutingModule { }
