import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IndexManagerComponent } from './manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './lender/index-lender/index-lender.component';
import { IndexClientComponent } from './client/index-client/index-client.component';
import { EquipComponent } from './service/equip/equip.component';

@NgModule({
  declarations:
  [
	  IndexManagerComponent,
    IndexAdminComponent,
    IndexLenderComponent,
    IndexClientComponent,
    DashboardComponent,
    EquipComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
