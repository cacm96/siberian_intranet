import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ClaimComponent } from './claim/claim.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';
import { SuggestionComponent } from './suggestion/suggestion.component';


const routes: Routes = [

	{path: '', component: ClientComponent, canActivate: []},
    {path: 'catalogue', component: CatalogueComponent, canActivate: []},
	{path: 'claim', component: ClaimComponent, canActivate: []},
	{path: 'request', component: RequestComponent, canActivate: []},
	{path: 'service', component: ServiceComponent, canActivate: []},
	{path: 'suggestion', component: SuggestionComponent, canActivate: []},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ClientRoutingModule { }
