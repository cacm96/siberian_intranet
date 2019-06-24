import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RedirectAuthGuard } from './redirect-auth.guard';

import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

import { UserFatherComponent } from './components/user/user-father/user-father.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';

import { ProfileFatherComponent } from './components/profile/profile-father/profile-father.component';
import { ProfilesComponent } from './components/profile/profiles/profiles.component';
import { ProfileCreateComponent } from './components/profile/profile-create/profile-create.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileShowComponent } from './components/profile/profile-show/profile-show.component';
import { ProfileDeleteComponent } from './components/profile/profile-delete/profile-delete.component';

import { SystemFatherComponent } from './components/system/system-father/system-father.component';
import { SystemsComponent } from './components/system/systems/systems.component';
import { SystemCreateComponent } from './components/system/system-create/system-create.component';
import { SystemEditComponent } from './components/system/system-edit/system-edit.component';
import { SystemShowComponent } from './components/system/system-show/system-show.component';
import { SystemDeleteComponent } from './components/system/system-delete/system-delete.component';

import { FunctionFatherComponent } from './components/function/function-father/function-father.component';
import { FunctionsComponent } from './components/function/functions/functions.component';
import { FunctionCreateComponent } from './components/function/function-create/function-create.component';
import { FunctionEditComponent } from './components/function/function-edit/function-edit.component';
import { FunctionShowComponent } from './components/function/function-show/function-show.component';
import { FunctionDeleteComponent } from './components/function/function-delete/function-delete.component';

import { IndexManagerComponent } from './components/dashboard/manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './components/dashboard/admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './components/dashboard/lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './components/dashboard/client/index-cliente/index-cliente.component';


// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [RedirectAuthGuard]},
	{path: 'login', component: LoginComponent, canActivate: [RedirectAuthGuard]},
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