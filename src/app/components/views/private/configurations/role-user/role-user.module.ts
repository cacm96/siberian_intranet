import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { RoleUserRoutingModule } from './role-user-routing.module';
import { RoleUserComponent } from './role-user.component';
import { RoleUsersComponent } from './role-users/role-users.component';
import { RoleUserCreateComponent } from './role-user-create/role-user-create.component';
import { RoleUserEditComponent } from './role-user-edit/role-user-edit.component';
import { RoleUserShowComponent } from './role-user-show/role-user-show.component';
import { RoleUserDeleteComponent } from './role-user-delete/role-user-delete.component';

@NgModule({
  declarations: [
	RoleUserComponent,
	RoleUsersComponent,
	RoleUserCreateComponent,
	RoleUserEditComponent,
	RoleUserShowComponent,
	RoleUserDeleteComponent
  ],
  imports: [
    MaterialModule,
    RoleUserRoutingModule
  ]
})
export class RoleUserModule { }
