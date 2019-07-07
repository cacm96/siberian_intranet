import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndexManagerComponent } from './manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './client/index-cliente/index-cliente.component';


const routes: Routes = [

	{path: '', component: DashboardComponent, canActivate: []},
    {path: 'client', component: IndexClienteComponent, canActivate: []},
	{path: 'lender', component: IndexLenderComponent, canActivate: []},
	{path: 'manager', component: IndexManagerComponent, canActivate: []},
	{path: 'admin', component: IndexAdminComponent, canActivate: []},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class DashboardRoutingModule { }
