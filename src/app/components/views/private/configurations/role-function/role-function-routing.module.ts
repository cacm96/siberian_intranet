import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleFunctionComponent } from './role-function.component';
import { RoleFunctionsComponent } from './role-functions/role-functions.component';
import { RoleFunctionCreateComponent } from './role-function-create/role-function-create.component';
import { RoleFunctionEditComponent } from './role-function-edit/role-function-edit.component';
import { RoleFunctionShowComponent } from './role-function-show/role-function-show.component';
import { RoleFunctionDeleteComponent } from './role-function-delete/role-function-delete.component';

const routes: Routes = [

	{path: '', component: RoleFunctionComponent, canActivate: [],
		children:
		[
			{path: '', component: RoleFunctionsComponent},
			{path: 'create', component: RoleFunctionCreateComponent},
			{path: 'edit/:id', component: RoleFunctionEditComponent},
			{path: 'show/:id', component: RoleFunctionShowComponent},
			{path: 'delete/:id', component: RoleFunctionDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RoleFunctionRoutingModule { }
