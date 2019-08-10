import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { VarietyComponent } from './variety/variety.component';
import { VarietyDetailComponent } from './variety-detail/variety-detail.component';
import { VarietyDetailsComponent } from './variety-details/variety-details.component';
import { OthersComponent } from './others/others.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations:
  [
    CatalogComponent,
    CatalogsComponent,
    VarietyComponent,
    VarietyDetailComponent,
    VarietyDetailsComponent,
    OthersComponent,
    SubcategoriaComponent,
    CategoriaComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule
  ]
})
export class CatalogModule { }
