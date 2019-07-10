import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';


const routes: Routes = [

	{path: '', component: ConfigurationComponent, canActivate: []},
	{path: 'catalogue', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './catalogue/catalogue.module#CatalogueModule',
			}
		]
	},
	{path: 'catalogue-variety-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './catalogue-variety-detail/catalogue-variety-detail.module#CatalogueVarietyDetailModule',
			}
		]
	},
	{path: 'location', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './location/location.module#LocationModule',
			}
		]
	},
	{path: 'parameter-client', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './parameter-client/parameter-client.module#ParameterClientModule',
			}
		]
	},
	{path: 'phone', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './phone/phone.module#PhoneModule',
			}
		]
	},
	{path: 'role-function', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './role-function/role-function.module#RoleFunctionModule',
			}
		]
	},
	{path: 'role-user', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './role-user/role-user.module#RoleUserModule',
			}
		]
	},
	{path: 'service-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-detail/service-detail.module#ServiceDetailModule',
			}
		]
	},
	{path: 'service-detail-activity', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-detail-activity/service-detail-activity.module#ServiceDetailActivityModule',
			}
		]
	},
	{path: 'service-detail-catalogue-variety-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-detail-catalogue-variety-detail/service-detail-catalogue-variety-detail.module#ServiceDetailCatalogueVarietyDetailModule',
			}
		]
	},
	{path: 'service-detail-politic', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-detail-politic/service-detail-politic.module#ServiceDetailPoliticModule',
			}
		]
	},
	{path: 'service-detail-resource', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-detail-resource/service-detail-resource.module#ServiceDetailResourceModule',
			}
		]
	},
	{path: 'service-detail-skill', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service-detail-skill/service-detail-skill.module#ServiceDetailSkillModule',
			}
		]
	},
	{path: 'skill-worker', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './skill-worker/skill-worker.module#SkillWorkerModule',
			}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ConfigurationRoutingModule { }
