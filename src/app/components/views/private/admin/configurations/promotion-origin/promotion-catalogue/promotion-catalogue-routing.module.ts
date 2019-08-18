import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PromotionCatalogueComponent } from './promotion-catalogue.component';
import { PromotionCatalogsComponent } from './promotion-catalogs/promotion-catalogs.component';
import { PromotionCatalogueCreateComponent } from './promotion-catalogue-create/promotion-catalogue-create.component';
import { PromotionCatalogueEditComponent } from './promotion-catalogue-edit/promotion-catalogue-edit.component';
import { PromotionCatalogueShowComponent } from './promotion-catalogue-show/promotion-catalogue-show.component';
import { PromotionCatalogueDeleteComponent } from './promotion-catalogue-delete/promotion-catalogue-delete.component';

const routes: Routes = [

	{path: '', component: PromotionCatalogueComponent, canActivate: [],
		children:
		[
			{path: '', component: PromotionCatalogsComponent},
			{path: 'create', component: PromotionCatalogueCreateComponent},
			{path: 'edit/:id', component: PromotionCatalogueEditComponent},
			{path: 'show/:id', component: PromotionCatalogueShowComponent},
			{path: 'delete/:id', component: PromotionCatalogueDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PromotionCatalogueRoutingModule { }
