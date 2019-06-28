import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RedirectAuthGuard } from './redirect-auth.guard';

import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

import { LoginComponent } from './components/auth/login/login.component';
import { LoginWeitComponent } from './components/auth/login-weit/login-weit.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

import { UserFatherComponent } from './components/masters/configure-user/user/user-father/user-father.component';
import { UsersComponent } from './components/masters/configure-user/user/users/users.component';
import { UserCreateComponent } from './components/masters/configure-user/user/user-create/user-create.component';
import { UserEditComponent } from './components/masters/configure-user/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/masters/configure-user/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/masters/configure-user/user/user-delete/user-delete.component';

import { ProfileFatherComponent } from './components/profile/profile-father/profile-father.component';
import { ProfilesComponent } from './components/profile/profiles/profiles.component';
import { ProfileCreateComponent } from './components/profile/profile-create/profile-create.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileShowComponent } from './components/profile/profile-show/profile-show.component';
import { ProfileDeleteComponent } from './components/profile/profile-delete/profile-delete.component';

import { SystemFatherComponent } from './components/masters/configure-system/system/system-father/system-father.component';
import { SystemsComponent } from './components/masters/configure-system/system/systems/systems.component';
import { SystemCreateComponent } from './components/masters/configure-system/system/system-create/system-create.component';
import { SystemEditComponent } from './components/masters/configure-system/system/system-edit/system-edit.component';
import { SystemShowComponent } from './components/masters/configure-system/system/system-show/system-show.component';
import { SystemDeleteComponent } from './components/masters/configure-system/system/system-delete/system-delete.component';

import { FunctionFatherComponent } from './components/masters/configure-system/function/function-father/function-father.component';
import { FunctionsComponent } from './components/masters/configure-system/function/functions/functions.component';
import { FunctionCreateComponent } from './components/masters/configure-system/function/function-create/function-create.component';
import { FunctionEditComponent } from './components/masters/configure-system/function/function-edit/function-edit.component';
import { FunctionShowComponent } from './components/masters/configure-system/function/function-show/function-show.component';
import { FunctionDeleteComponent } from './components/masters/configure-system/function/function-delete/function-delete.component';

import { IndexManagerComponent } from './components/dashboard/manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './components/dashboard/admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './components/dashboard/lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './components/dashboard/client/index-cliente/index-cliente.component';


import { PermissionFatherComponent } from './components/masters/configure-system/permission/permission-father/permission-father.component';
import { PermissionsComponent } from './components/masters/configure-system/permission/permissions/permissions.component';
import { PermissionCreateComponent } from './components/masters/configure-system/permission/permission-create/permission-create.component';
import { PermissionEditComponent } from './components/masters/configure-system/permission/permission-edit/permission-edit.component';
import { PermissionShowComponent } from './components/masters/configure-system/permission/permission-show/permission-show.component';
import { PermissionDeleteComponent } from './components/masters/configure-system/permission/permission-delete/permission-delete.component';

import { RoleFatherComponent } from './components/masters/configure-system/role/role-father/role-father.component';
import { RolesComponent } from './components/masters/configure-system/role/roles/roles.component';
import { RoleCreateComponent } from './components/masters/configure-system/role/role-create/role-create.component';
import { RoleEditComponent } from './components/masters/configure-system/role/role-edit/role-edit.component';
import { RoleShowComponent } from './components/masters/configure-system/role/role-show/role-show.component';
import { RoleDeleteComponent } from './components/masters/configure-system/role/role-delete/role-delete.component';

import { AssignFunctionFatherComponent } from './components/masters/configure-system/assignFunction/assign-function-father/assign-function-father.component';
import { AssignFunctionsComponent } from './components/masters/configure-system/assignFunction/assign-functions/assign-functions.component';
import { AssignFunctionCreateComponent } from './components/masters/configure-system/assignFunction/assign-function-create/assign-function-create.component';
import { AssignFunctionEditComponent } from './components/masters/configure-system/assignFunction/assign-function-edit/assign-function-edit.component';
import { AssignFunctionShowComponent } from './components/masters/configure-system/assignFunction/assign-function-show/assign-function-show.component';
import { AssignFunctionDeleteComponent } from './components/masters/configure-system/assignFunction/assign-function-delete/assign-function-delete.component';

import { ParameterFatherComponent } from './components/masters/configure-system/parameter/parameter-father/parameter-father.component';
import { ParametersComponent } from './components/masters/configure-system/parameter/parameters/parameters.component';
import { ParameterCreateComponent } from './components/masters/configure-system/parameter/parameter-create/parameter-create.component';
import { ParameterEditComponent } from './components/masters/configure-system/parameter/parameter-edit/parameter-edit.component';
import { ParameterShowComponent } from './components/masters/configure-system/parameter/parameter-show/parameter-show.component';
import { ParameterDeleteComponent } from './components/masters/configure-system/parameter/parameter-delete/parameter-delete.component';

// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [RedirectAuthGuard]},
	{path: 'login', component: LoginComponent, canActivate: [RedirectAuthGuard]},
	{path: 'loginWeit', component: LoginWeitComponent, canActivate: []},
	{path: 'logout', component: LogoutComponent},
	
	{path: 'user', component: UserFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: UsersComponent},
			{path: 'create', component: UserCreateComponent},
			{path: 'edit/:id', component: UserEditComponent},
			{path: 'show/:id', component: UserShowComponent},
			{path: 'delete/:id', component: UserDeleteComponent},
		]
	},

	{path: 'profile', component: ProfileFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: ProfilesComponent},
			{path: 'create', component: ProfileCreateComponent},
			{path: 'edit/:id', component: ProfileEditComponent},
			{path: 'show/:id', component: ProfileShowComponent},
			{path: 'delete/:id', component: ProfileDeleteComponent},
		]
	},

	{path: 'system', component: SystemFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: SystemsComponent},
			{path: 'create', component: SystemCreateComponent},
			{path: 'edit/:id', component: SystemEditComponent},
			{path: 'show/:id', component: SystemShowComponent},
			{path: 'delete/:id', component: SystemDeleteComponent},
		]
	},

	{path: 'function', component: FunctionFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: FunctionsComponent},
			{path: 'create', component: FunctionCreateComponent},
			{path: 'edit/:id', component: FunctionEditComponent},
			{path: 'show/:id', component: FunctionShowComponent},
			{path: 'delete/:id', component: FunctionDeleteComponent},
		]
	},

	{path: 'category', component: CategoryFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: CategorysComponent},
			{path: 'create', component: CategoryCreateComponent},
			{path: 'edit/:id', component: CategoryEditComponent},
			{path: 'show/:id', component: CategoryShowComponent},
			{path: 'delete/:id', component: CategoryDeleteComponent},
		]
	},

	{path: 'permission', component: PermissionFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: PermissionsComponent},
			{path: 'create', component: PermissionCreateComponent},
			{path: 'edit/:id', component: PermissionEditComponent},
			{path: 'show/:id', component: PermissionShowComponent},
			{path: 'delete/:id', component: PermissionDeleteComponent},
		]
	},

	
	{path: 'role', component: RoleFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: RolesComponent},
			{path: 'create', component: RoleCreateComponent},
			{path: 'edit/:id', component: RoleEditComponent},
			{path: 'show/:id', component: RoleShowComponent},
			{path: 'delete/:id', component: RoleDeleteComponent},
		]
	},


	{path: 'assignFunction', component: AssignFunctionFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: AssignFunctionsComponent},
			{path: 'create', component: AssignFunctionCreateComponent},
			{path: 'edit/:id', component: AssignFunctionEditComponent},
			{path: 'show/:id', component: AssignFunctionShowComponent},
			{path: 'delete/:id', component: AssignFunctionDeleteComponent},
		]
	},

	{path: 'parameter', component: ParameterFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: ParametersComponent},
			{path: 'create', component: ParameterCreateComponent},
			{path: 'edit/:id', component: ParameterEditComponent},
			{path: 'show/:id', component: ParameterShowComponent},
			{path: 'delete/:id', component: ParameterDeleteComponent},
		]
	},

	{path: 'dashboardClient', component: IndexClienteComponent, canActivate: [AuthGuard]},
	{path: 'dashboardLender', component: IndexLenderComponent, canActivate: [AuthGuard]},
	{path: 'dashboardManager', component: IndexManagerComponent, canActivate: [AuthGuard]},
	{path: 'dashboardAdmin', component: IndexAdminComponent, canActivate: [AuthGuard]},


	

	{path: 'block', component: BlockComponent},
	{path: '**', component: ErrorComponent},

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled' });