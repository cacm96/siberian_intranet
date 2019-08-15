import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EquipinfrasComponent } from './equipinfras.component';

const routes: Routes = [

	{path: '', component: EquipinfrasComponent, canActivate: [],
		children:
		[
			{path: 'equip-infras', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './equip-infras/equip-infras.module#EquipInfrasModule',
					}
				]
			},
			{path: 'variety', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './variety/variety.module#CatalogueVarietyDetailModule',
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
			{path: 'variety-equipinfras', canActivate: [],
				children:
				[
					{
						path: '',
		                loadChildren: './variety-equipinfras/variety-equipinfras.module#VarietyEquipinfrasModule',
					}
				]
			},
			
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class EquipinfrasRoutingModule { }
