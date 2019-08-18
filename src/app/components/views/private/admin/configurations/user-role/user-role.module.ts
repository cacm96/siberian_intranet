import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { UserRoleRoutingModule } from './user-role-routing.module';
import { UserRoleComponent } from './user-role.component';
import { UserRolesComponent } from './user-roles/user-roles.component';


@NgModule({
  declarations:
  [
  	UserRoleComponent,
  	UserRolesComponent,
  ],
  imports: [
    CommonModule,
    UserRoleRoutingModule,
    MaterialModule
  ]
})

export class UserRoleModule { }
