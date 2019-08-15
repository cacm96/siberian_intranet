import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [

	{path: '', component: MasterComponent, canActivate: []},

	{path: 'calendar', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './calendar/calendar.module#CalendarModule',
			}
		]
	},
	
	{path: 'component', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './component/component.module#ComponentModule',
			}
		]
	},
	{path: 'event', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './event/event.module#EventModule',
			}
		]
	},
	{path: 'motive', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './motive/motive.module#MotiveModule',
			}
		]
	},
	{path: 'result', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './result/result.module#ResultModule',
			}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MasterRoutingModule { }
