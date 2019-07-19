import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';
import { ProfileLenderComponent } from './profile-lender/profile-lender.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';


const routes: Routes = [

	{path: '', component: ProfileComponent, canActivate: []},
    {path: 'client', component: ProfileClientComponent, canActivate: []},
	{path: 'lender', component: ProfileLenderComponent, canActivate: []},
	{path: 'manager', component: ProfileManagerComponent, canActivate: []},
	{path: 'admin', component: ProfileAdminComponent, canActivate: []},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ProfileRoutingModule { }
