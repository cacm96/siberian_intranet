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
	/*{path: 'catalogue-variety-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/catalogue-variety-detail/catalogue-variety-detail.module#CatalogueVarietyDetailModule',
			}
		]
	},
	{path: 'function-role', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/function-role/function-role.module#FunctionRoleModule',
			}
		]
	},*/
	{path: 'location', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './location/location.module#LocationModule',
			}
		]
	},
	/*
	{path: 'parameter-client', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/parameter-client/parameter-client.module#ParameterClientModule',
			}
		]
	},
	{path: 'phone', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/phone/phone.module#PhoneModule',
			}
		]
	},
	{path: 'service-detail-activity', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/service-detail-activity/service-detail-activity.module#ServiceDetailActivityModule',
			}
		]
	},
	{path: 'service-detail-catalogue-variety-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/service-detail-catalogue-variety-detail/service-detail-catalogue-variety-detail.module#ServiceDetailCatalogueVarietyDetailModule',
			}
		]
	},
	{path: 'service-detail-politic', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/service-detail-politic/service-detail-politic.module#ServiceDetailPoliticModule',
			}
		]
	},
	{path: 'service-detail-resource', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/service-detail-resource/service-detail-resource.module#ServiceDetailResourceModule',
			}
		]
	},
	{path: 'skill-service-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/skill-service-detail/skill-service-detail.module#SkillServiceDetailModule',
			}
		]
	},
	{path: 'skill-worker', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/skill-worker/skill-worker.module#SkillWorkerModule',
			}
		]
	},
	{path: 'user-role', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './components/views/private/user-role/user-role.module#UserRoleModule',
			}
		]
	},*/

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class ConfigurationRoutingModule { }
