import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PromotionOriginComponent } from './promotion-origin.component';
import { PromotionsOriginsComponent } from './promotions-origins/promotions-origins.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionCatalogueComponent } from './promotion-catalogue/promotion-catalogue.component';
import { PromotionTargetComponent } from './promotion-target/promotion-target.component';

const routes: Routes = [

	{path: '', component: PromotionOriginComponent, canActivate: [],
		children:
		[
			{path: '', component: PromotionsOriginsComponent},
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
			
		]
	},	

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PromotionOriginRoutingModule { }
