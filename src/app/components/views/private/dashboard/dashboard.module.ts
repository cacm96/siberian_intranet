import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IndexManagerComponent } from './manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './client/index-cliente/index-cliente.component';

@NgModule({
  declarations:
  [
	IndexManagerComponent,
    IndexAdminComponent,
    IndexLenderComponent,
    IndexClienteComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
