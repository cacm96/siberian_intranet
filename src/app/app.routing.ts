import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RedirectAuthGuard } from './redirect-auth.guard';

import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

import { LoginComponent } from './components/auth/login/login.component';
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

import { CategoryFatherComponent } from './components/masters/configure-catalogue/category-father/category-father.component';
import { CategorysComponent } from './components/masters/configure-catalogue/categorys/categorys.component';
import { CategoryCreateComponent } from './components/masters/configure-catalogue/category-create/category-create.component';
import { CategoryEditComponent } from './components/masters/configure-catalogue/category-edit/category-edit.component';
import { CategoryShowComponent } from './components/masters/configure-catalogue/category-show/category-show.component';
import { CategoryDeleteComponent } from './components/masters/configure-catalogue/category-delete/category-delete.component';

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