import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionCreateComponent } from './promotion-create/promotion-create.component';
import { PromotionEditComponent } from './promotion-edit/promotion-edit.component';
import { PromotionShowComponent } from './promotion-show/promotion-show.component';
import { PromotionDeleteComponent } from './promotion-delete/promotion-delete.component';

@NgModule({
  declarations: [
	PromotionComponent,
	PromotionsComponent,
	PromotionCreateComponent,
	PromotionEditComponent,
	PromotionShowComponent,
	PromotionDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PromotionRoutingModule
  ]
})
export class PromotionModule { }
