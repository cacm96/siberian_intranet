import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleComponent } from './user-role.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

@NgModule({
  declarations: [UserRoleComponent, UserRolesComponent],
  imports: [
    CommonModule
  ]
})
export class UserRoleModule { }
