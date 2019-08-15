import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { CatalogueCreateComponent } from './catalogue-create/catalogue-create.component';
import { CatalogueEditComponent } from './catalogue-edit/catalogue-edit.component';
import { CatalogueShowComponent } from './catalogue-show/catalogue-show.component';
import { CatalogueDeleteComponent } from './catalogue-delete/catalogue-delete.component';

@NgModule({
  declarations: [
    CatalogueComponent,
    CatalogsComponent,
    CatalogueCreateComponent,
    CatalogueEditComponent,
    CatalogueShowComponent,
    CatalogueDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
