import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { ProfileLenderComponent } from './profile-lender/profile-lender.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';

@NgModule({
  declarations:
  [
  	ProfileComponent,
  	ProfileClientComponent,
  	ProfileLenderComponent,
  	ProfileAdminComponent,
  	ProfileManagerComponent
  ],
  imports:
  [
    CommonModule,
    MaterialModule,
	  ProfileRoutingModule
  ]
})
export class ProfileModule { }
