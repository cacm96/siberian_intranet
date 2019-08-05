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

			{path: 'profile', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/profile/profile.module#ProfileModule',
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

			{path: 'client', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './components/views/private/client/client.module#ClientModule',
					}
				]
			},
		]
	},

	{path: '**', component: ErrorComponent},
    {path: 'block', component: BlockComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' });