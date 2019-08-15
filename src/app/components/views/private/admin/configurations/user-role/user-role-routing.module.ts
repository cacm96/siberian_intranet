import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserRoleComponent } from './user-role.component';
import { UserRolesComponent } from './user-roles/user-roles.component';


const routes: Routes = [

	{path: '', component: UserRoleComponent, canActivate: [],
		children:
		[
			{path: '', component: UserRolesComponent},
			{path: 'function', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './function/function.module#FunctionModule',
					}
				]
			},
			{path: 'location', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './location/location/location.module#LocationModule',
					}
				]
			},
			{path: 'phone', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './phone/phone.module#PhoneModule',
					}
				]
			},
			{path: 'role', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './role/role.module#RoleModule',
					}
				]
			},
			{path: 'role-function', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './role-function/role-function.module#RoleFunctionModule',
					}
				]
			},
			{path: 'user', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './user/user.module#UserModule',
					}
				]
			},

		]
	},	

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class UserRoleRoutingModule { }
