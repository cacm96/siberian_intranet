import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueVarietyDetailComponent } from './catalogue-variety-detail/catalogue-variety-detail.component';
import { CategoryComponent } from './category/category.component';
import { ServiceDetailCatalogueVarietyDetailComponent } from './service-detail-catalogue-variety-detail/service-detail-catalogue-variety-detail.component';

@NgModule({
  declarations:
  [
  	CatalogComponent,
  	CatalogsComponent,
    CatalogueComponent,
  	CatalogueVarietyDetailComponent,
    CategoryComponent,
    ServiceDetailCatalogueVarietyDetailComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule
  ]
})

export class CatalogModule { }
