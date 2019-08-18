import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PromotionCatalogueVarietyDetailComponent } from './promotion-catalogue-variety-detail.component';
import { PromotionCatalogueVarietyDetailsComponent } from './promotion-catalogue-variety-details/promotion-catalogue-variety-details.component';
import { PromotionCatalogueVarietyDetailCreateComponent } from './promotion-catalogue-variety-detail-create/promotion-catalogue-variety-detail-create.component';
import { PromotionCatalogueVarietyDetailEditComponent } from './promotion-catalogue-variety-detail-edit/promotion-catalogue-variety-detail-edit.component';
import { PromotionCatalogueVarietyDetailShowComponent } from './promotion-catalogue-variety-detail-show/promotion-catalogue-variety-detail-show.component';
import { PromotionCatalogueVarietyDetailDeleteComponent } from './promotion-catalogue-variety-detail-delete/promotion-catalogue-variety-detail-delete.component';

const routes: Routes = [

	{path: '', component: PromotionCatalogueVarietyDetailComponent, canActivate: [],
		children:
		[
			{path: '', component: PromotionCatalogueVarietyDetailsComponent},
			{path: 'create', component: PromotionCatalogueVarietyDetailCreateComponent},
			{path: 'edit/:id', component: PromotionCatalogueVarietyDetailEditComponent},
			{path: 'show/:id', component: PromotionCatalogueVarietyDetailShowComponent},
			{path: 'delete/:id', component: PromotionCatalogueVarietyDetailDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PromotionCatalogueVarietyDetailRoutingModule { }
