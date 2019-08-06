import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LenderComponent } from './lender.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [

	{path: '', component: LenderComponent, canActivate: []},
	{path: 'request', component: RequestComponent, canActivate: []},
	{path: 'service', component: ServiceComponent, canActivate: []},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class LenderRoutingModule { }
