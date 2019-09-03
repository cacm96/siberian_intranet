import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogueService } from 'src/app/core/services/client/catalogue.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';


import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { VarietyComponent } from './variety/variety.component';
import { VarietyDetailsComponent } from './variety-details/variety-details.component';
import { OthersComponent } from './others/others.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EquipsinfrasComponent } from './equipsinfras/equipsinfras.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations:
  [
    CatalogComponent,
    CatalogsComponent,
    VarietyComponent,
    VarietyDetailsComponent,
    OthersComponent,
    SubcategoriaComponent,
    CategoriaComponent,
    EquipsinfrasComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers:
  [
    CatalogueService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
  ]
})
export class CatalogModule { }
