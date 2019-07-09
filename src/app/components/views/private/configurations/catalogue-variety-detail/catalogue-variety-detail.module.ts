import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueVarietyDetailsComponent } from './catalogue-variety-details.component';
import { CatalogueVarietyDetailCreateComponent } from './catalogue-variety-detail-create/catalogue-variety-detail-create.component';
import { CatalogueVarietyDetailEditComponent } from './catalogue-variety-detail-edit/catalogue-variety-detail-edit.component';
import { CatalogueVarietyDetailShowComponent } from './catalogue-variety-detail-show/catalogue-variety-detail-show.component';
import { CatalogueVarietyDetailDeleteComponent } from './catalogue-variety-detail-delete/catalogue-variety-detail-delete.component';

@NgModule({
  declarations: [CatalogueVarietyDetailsComponent, CatalogueVarietyDetailCreateComponent, CatalogueVarietyDetailEditComponent, CatalogueVarietyDetailShowComponent, CatalogueVarietyDetailDeleteComponent],
  imports: [
    CommonModule
  ]
})
export class CatalogueVarietyDetailModule { }
