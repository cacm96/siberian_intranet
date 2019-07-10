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
	{path: 'category', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './category/category.module#CategoryModule',
			}
		]
	},
	{path: 'client', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './client/client.module#ClientModule',
			}
		]
	},
	{path: 'company', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './company/company.module#CompanyModule',
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
	{path: 'function', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './function/function.module#FunctionModule',
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
	{path: 'sub-category', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './sub-category/sub-category.module#SubCategoryModule',
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
	{path: 'worker', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './worker/worker.module#WorkerModule',
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
