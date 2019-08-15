import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';


const routes: Routes = [

	{path: '', component: ConfigurationComponent, canActivate: []},
	{path: 'catalog', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/catalog/catalog.module#CatalogModule',
			}
		]
	},
	{path: 'company', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/company/company.module#CompanyModule',
			}
		]
	},
	{path: 'equip-infras/', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/equip-infras//equip-infras/.module#EquipInfrasModule',
			}
		]
	},
	{path: 'parameter', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/parameter/parameter.module#ParameterModule',
			}
		]
	},
	{path: 'promotion', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/promotion/promotion.module#PromotionModule',
			}
		]
	},
	{path: 'service', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/service/service.module#ServiceModule',
			}
		]
	},
	{path: 'skill', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/skill/skill.module#SkillModule',
			}
		]
	},
	{path: 'user-role', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: '../configurations/user-role/user-role.module#UserRoleModule',
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
	{path: 'promotion', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './promotion/promotion.module#PromotionModule',
			}
		]
	},
	{path: 'promotion-catalogue', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './promotion-catalogue/promotion-catalogue.module#PromotionCatalogueModule',
			}
		]
	},
	{path: 'promotion-catalogue-variety-detail', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './promotion-catalogue-variety-detail/promotion-catalogue-variety-detail.module#PromotionCatalogueVarietyDetailModule',
			}
		]
	},
	{path: 'promotion-target', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './promotion-target/promotion-target.module#PromotionTargetModule',
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
