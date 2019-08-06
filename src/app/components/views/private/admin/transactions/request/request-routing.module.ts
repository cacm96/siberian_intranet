import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './request.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import { RequestShowComponent } from './request-show/request-show.component';
import { RequestDeleteComponent } from './request-delete/request-delete.component';

const routes: Routes = [

	{path: '', component: RequestComponent, canActivate: [],
		children:
		[
			{path: '', component: RequestsComponent},
			{path: 'create', component: RequestCreateComponent},
			{path: 'edit/:id', component: RequestEditComponent},
			{path: 'show/:id', component: RequestShowComponent},
			{path: 'delete/:id', component: RequestDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RequestRoutingModule { }
