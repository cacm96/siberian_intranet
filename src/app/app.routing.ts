import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { RedirectAuthGuard } from './core/guards/redirect-auth.guard';

import { LoginComponent } from './components/views/public/auth/login/login.component';
import { LoginWeitComponent } from './components/views/public/auth/login-weit/login-weit.component';
import { LogoutComponent } from './components/views/public/auth/logout/logout.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { BlockComponent } from './components/shared/block/block.component';
import { HomeComponent } from './components/shared/home/home.component';


const routes: Routes =
[
	{path: '', redirectTo: 'login', pathMatch: 'full', canActivate: []},
	{path: 'login', component: LoginComponent, canActivate: []},
	{path: 'loginWeit', component: LoginWeitComponent, canActivate: []},
	{path: 'logout', component: LogoutComponent},

	{path: 'auth', canActivate: [], component: HomeComponent,
		children:
		[
			{path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: []},
			{path: 'dashboard', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/dashboard/dashboard.module#DashboardModule',
					}
				]
			},

			{path: 'masters', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/masters/master.module#MasterModule',
					}
				]
			},

			{path: 'parameters', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/parameters/parameter.module#ParameterModule',
					}
				]
			},

			{path: 'configurations', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/configurations/configuration.module#ConfigurationModule',
					}
				]
			},

			{path: 'transactions', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/transactions/transaction.module#TransactionModule',
					}
				]
			},
		]
	},

	{path: '**', component: ErrorComponent},
    {path: 'block', component: BlockComponent},

];

/*
const appRoutes: Routes = [

	{path: '', redirectTo: 'auth', pathMatch: 'full', canActivate: [],
		children:
		[
			{path: 'auth', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/public/auth/auth.module#AuthModule',
					}
				]
			},

			

			{path: 'dashboard', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/dashboard/dashboard.module#DashboardModule',
					}
				]
			},
			
		]
	},


	{path: 'app', component: HomeComponent, canActivate: [],
		children:
		[
			
	
			{path: 'parameters', component: HomeComponent, canActivate: [],
				children:
				[
					{path: 'parameter', component: ParameterFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: ParametersComponent},
							{path: 'create', component: ParameterCreateComponent},
							{path: 'edit/:id', component: ParameterEditComponent},
							{path: 'show/:id', component: ParameterShowComponent},
							{path: 'delete/:id', component: ParameterDeleteComponent},
						]
					},
					{path: 'phone-type', component: PhoneTypeFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: PhoneTypesComponent},
							{path: 'create', component: PhoneTypeCreateComponent},
							{path: 'edit/:id', component: PhoneTypeEditComponent},
							{path: 'show/:id', component: PhoneTypeShowComponent},
							{path: 'delete/:id', component: PhoneTypeDeleteComponent},
						]
					},
					{path: 'phone', component: PhoneFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: PhonesComponent},
							{path: 'create', component: PhoneCreateComponent},
							{path: 'edit/:id', component: PhoneEditComponent},
							{path: 'show/:id', component: PhoneShowComponent},
							{path: 'delete/:id', component: PhoneDeleteComponent},
						]
					},
					{path: 'gender', component: GenderFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: GendersComponent},
							{path: 'create', component: GenderCreateComponent},
							{path: 'edit/:id', component: GenderEditComponent},
							{path: 'show/:id', component: GenderShowComponent},
							{path: 'delete/:id', component: GenderDeleteComponent},
						]
					},
					{path: 'dni-type', component: DniTypeFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: DniTypesComponent},
							{path: 'create', component: DniTypeCreateComponent},
							{path: 'edit/:id', component: DniTypeEditComponent},
							{path: 'show/:id', component: DniTypeShowComponent},
							{path: 'delete/:id', component: DniTypeDeleteComponent},
						]
					},
					{path: 'worker-type', component: WorkerTypeFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: WorkerTypesComponent},
							{path: 'create', component: WorkerTypeCreateComponent},
							{path: 'edit/:id', component: WorkerTypeEditComponent},
							{path: 'show/:id', component: WorkerTypeShowComponent},
							{path: 'delete/:id', component: WorkerTypeDeleteComponent},
						]
					},
				]
			},

			{path: 'masters', component: HomeComponent, canActivate: [],
				children:
				[
					{path: 'client', component: ClientFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: ClientsComponent},
							{path: 'create', component: ClientCreateComponent},
							{path: 'edit/:id', component: ClientEditComponent},
							{path: 'show/:id', component: ClientShowComponent},
							{path: 'delete/:id', component: ClientDeleteComponent},
						]
					},

					{path: 'user', component: UserFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: UsersComponent},
							{path: 'create', component: UserCreateComponent},
							{path: 'edit/:id', component: UserEditComponent},
							{path: 'show/:id', component: UserShowComponent},
							{path: 'delete/:id', component: UserDeleteComponent},
						]
					},

					{path: 'function', component: FunctionFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: FunctionsComponent},
							{path: 'create', component: FunctionCreateComponent},
							{path: 'edit/:id', component: FunctionEditComponent},
							{path: 'show/:id', component: FunctionShowComponent},
							{path: 'delete/:id', component: FunctionDeleteComponent},
						]
					},
					{path: 'role', component: RoleFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: RolesComponent},
							{path: 'create', component: RoleCreateComponent},
							{path: 'edit/:id', component: RoleEditComponent},
							{path: 'show/:id', component: RoleShowComponent},
							{path: 'delete/:id', component: RoleDeleteComponent},
						]
					},
					{path: 'worker', component: WorkerFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: WorkersComponent},
							{path: 'create', component: WorkerCreateComponent},
							{path: 'edit/:id', component: WorkerEditComponent},
							{path: 'show/:id', component: WorkerShowComponent},
							{path: 'delete/:id', component: WorkerDeleteComponent},
						]
					},
					{path: 'skill', component: SkillFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: SkillsComponent},
							{path: 'create', component: SkillCreateComponent},
							{path: 'edit/:id', component: SkillEditComponent},
							{path: 'show/:id', component: SkillShowComponent},
							{path: 'delete/:id', component: SkillDeleteComponent},
						]
					},
					{path: 'skill-worker', component: SkillWorkerFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: SkillWorkersComponent},
							{path: 'create', component: SkillWorkerCreateComponent},
							{path: 'edit/:id', component: SkillWorkerEditComponent},
							{path: 'show/:id', component: SkillWorkerShowComponent},
							{path: 'delete/:id', component: SkillWorkerDeleteComponent},
						]
					},
				]
			},

			{path: 'configurations', component: HomeComponent, canActivate: [],
				children:
				[
					{path: 'parameter-client', component: ParameterClientFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: ParameterClientsComponent},
							{path: 'create', component: ParameterClientCreateComponent},
							{path: 'edit/:id', component: ParameterClientEditComponent},
							{path: 'show/:id', component: ParameterClientShowComponent},
							{path: 'delete/:id', component: ParameterClientDeleteComponent},
						]
					},
					{path: 'phone', component: PhoneFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: PhonesComponent},
							{path: 'create', component: PhoneCreateComponent},
							{path: 'edit/:id', component: PhoneEditComponent},
							{path: 'show/:id', component: PhoneShowComponent},
							{path: 'delete/:id', component: PhoneDeleteComponent},
						]
					},
					{path: 'user-role', component: UserRoleFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: UserRolesComponent},
							{path: 'create', component: UserRoleCreateComponent},
							{path: 'edit/:id', component: UserRoleEditComponent},
							{path: 'show/:id', component: UserRoleShowComponent},
							{path: 'delete/:id', component: UserRoleDeleteComponent},
						]
					},
					{path: 'function-role', component: FunctionRoleFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: FunctionRolesComponent},
							{path: 'create', component: FunctionRoleCreateComponent},
							{path: 'edit/:id', component: FunctionRoleEditComponent},
							{path: 'show/:id', component: FunctionRoleShowComponent},
							{path: 'delete/:id', component: FunctionRoleDeleteComponent},
						]
					},
				]
			},
		]
	},

	{path: 'block', component: BlockComponent},
	{path: '**', component: ErrorComponent},

];
*/
// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' });