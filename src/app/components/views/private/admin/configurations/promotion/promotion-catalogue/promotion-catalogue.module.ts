import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { PromotionCatalogueRoutingModule } from './promotion-catalogue-routing.module';
import { PromotionCatalogueComponent } from './promotion-catalogue.component';
import { PromotionCatalogsComponent } from './promotion-catalogs/promotion-catalogs.component';
import { PromotionCatalogueCreateComponent } from './promotion-catalogue-create/promotion-catalogue-create.component';
import { PromotionCatalogueEditComponent } from './promotion-catalogue-edit/promotion-catalogue-edit.component';
import { PromotionCatalogueShowComponent } from './promotion-catalogue-show/promotion-catalogue-show.component';
import { PromotionCatalogueDeleteComponent } from './promotion-catalogue-delete/promotion-catalogue-delete.component';

@NgModule({
  declarations: [
	PromotionCatalogueComponent,
	PromotionCatalogsComponent,
	PromotionCatalogueCreateComponent,
	PromotionCatalogueEditComponent,
	PromotionCatalogueShowComponent,
	PromotionCatalogueDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PromotionCatalogueRoutingModule
  ]
})
export class PromotionCatalogueModule { }
