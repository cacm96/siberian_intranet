import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParameterComponent } from './parameter.component';


const routes: Routes = [

	{path: '', component: ParameterComponent, canActivate: []},
	{path: 'bitacora-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './bitacora-type/bitacora-type.module#BitacoraTypeModule',
			}
		]
	},
	{path: 'calendar-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './calendar-type/calendar-type.module#CalendarTypeModule',
			}
		]
	},
	{path: 'motive-incidence', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './motive-incidence/motive-incidence.module#MotiveIncidenceModule',
			}
		]
	},
	{path: 'notification-type', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './notification-type/notification-type.module#NotificationTypeModule',
			}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ParameterRoutingModule { }
