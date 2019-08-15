import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

const routes: Routes = [

	{path: '', component: MasterComponent, canActivate: []},
	{path: 'activity', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './activity/activity.module#ActivityModule',
			}
		]
	},
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
	{path: 'equip-infras', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './equip-infras/equip-infras.module#EquipInfrasModule',
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
	{path: 'function', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './function/function.module#FunctionModule',
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
	{path: 'parameter', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './parameter/parameter.module#ParameterModule',
			}
		]
	},
	{path: 'politic', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './politic/politic.module#PoliticModule',
			}
		]
	},
	{path: 'resource', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './resource/resource.module#ResourceModule',
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
	{path: 'role', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './role/role.module#RoleModule',
			}
		]
	},
	{path: 'skill', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './skill/skill.module#SkillModule',
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
	{path: 'variety', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './variety/variety.module#VarietyModule',
			}
		]
	},
	{path: 'variety-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './variety-detail/variety-detail.module#VarietyDetailModule',
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
