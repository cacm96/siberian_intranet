import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ClaimComponent } from './claim/claim.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations:
  [
  	ClientComponent,
  	RequestComponent,
  	ServiceComponent,
  	CatalogueComponent,
  	SuggestionComponent,
  	ClaimComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ]
})
export class ClientModule { }
