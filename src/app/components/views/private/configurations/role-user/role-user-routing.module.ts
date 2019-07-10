import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoleUserComponent } from './role-user.component';
import { RoleUsersComponent } from './role-users/role-users.component';
import { RoleUserCreateComponent } from './role-user-create/role-user-create.component';
import { RoleUserEditComponent } from './role-user-edit/role-user-edit.component';
import { RoleUserShowComponent } from './role-user-show/role-user-show.component';
import { RoleUserDeleteComponent } from './role-user-delete/role-user-delete.component';

const routes: Routes = [

	{path: '', component: RoleUserComponent, canActivate: [],
		children:
		[
			{path: '', component: RoleUsersComponent},
			{path: 'create', component: RoleUserCreateComponent},
			{path: 'edit/:id', component: RoleUserEditComponent},
			{path: 'show/:id', component: RoleUserShowComponent},
			{path: 'delete/:id', component: RoleUserDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RoleUserRoutingModule { }
