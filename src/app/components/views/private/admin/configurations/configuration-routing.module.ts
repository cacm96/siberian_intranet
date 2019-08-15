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
                loadChildren: './catalog/catalog.module#CatalogModule',
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
	{path: 'equip-infras/', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './equip-infras/equip-infras/.module#EquipInfrasModule',
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
	{path: 'promotion', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './promotion/promotion.module#PromotionModule',
			}
		]
	},
	{path: 'service', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './service/service.module#ServiceModule',
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
	{path: 'user-role', canActivate: [],
		children:
		[
			{
				path: '',
                loadChildren: './user-role/user-role.module#UserRoleModule',
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
