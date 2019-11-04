import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PromotionOriginComponent } from './promotion-origin.component';
import { PromotionsOriginsComponent } from './promotions-origins/promotions-origins.component';
import { PromotionComponent } from './promotion/promotion.component';
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PromotionOriginRoutingModule { }
