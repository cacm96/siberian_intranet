import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { CatalogueVarietyDetailRoutingModule } from './catalogue-variety-detail-routing.module';
import { CatalogueVarietyDetailComponent } from './catalogue-variety-detail.component';
import { CatalogueVarietyDetailsComponent } from './catalogue-variety-details/catalogue-variety-details.component';
import { CatalogueVarietyDetailCreateComponent } from './catalogue-variety-detail-create/catalogue-variety-detail-create.component';
import { CatalogueVarietyDetailEditComponent } from './catalogue-variety-detail-edit/catalogue-variety-detail-edit.component';
import { CatalogueVarietyDetailShowComponent } from './catalogue-variety-detail-show/catalogue-variety-detail-show.component';
import { CatalogueVarietyDetailDeleteComponent } from './catalogue-variety-detail-delete/catalogue-variety-detail-delete.component';

@NgModule({
  declarations: [
  	CatalogueVarietyDetailComponent,
  	CatalogueVarietyDetailsComponent,
  	CatalogueVarietyDetailCreateComponent,
  	CatalogueVarietyDetailEditComponent,
  	CatalogueVarietyDetailShowComponent,
  	CatalogueVarietyDetailDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CatalogueVarietyDetailRoutingModule
  ]
})
export class CatalogueVarietyDetailModule { }
