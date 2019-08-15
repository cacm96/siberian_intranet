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
	{path: 'equipinfras', canActivate: [],
		children:
		[
			{
				path:'',
                loadChildren: './equipinfras/equipinfras.module#EquipinfrasModule',
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
                loadChildren: './promotion-origin/promotion-origin.module#PromotionOriginModule',
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
                loadChildren: '../configurations/skill/skill.module#SkillModule',
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
