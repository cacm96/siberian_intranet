import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [

	{path: '', component: AdminComponent, canActivate: []},
	
	{path: 'dashboard', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
			}
		]
	},
	{path: 'masters', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './masters/master.module#MasterModule',
			}
		]
	},

	{path: 'parameters', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './parameters/parameter.module#ParameterModule',
			}
		]
	},

	{path: 'configurations', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './configurations/configuration.module#ConfigurationModule',
			}
		]
	},

	{path: 'profile', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../admin/profile/profile.module#ProfileModule',
			}
		]
	},

	{path: 'transactions', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './transactions/transaction.module#TransactionModule',
			}
		]
	},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
