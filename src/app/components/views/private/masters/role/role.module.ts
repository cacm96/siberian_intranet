import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleShowComponent } from './role-show/role-show.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component';

@NgModule({
  declarations: [
	RoleComponent,
	RolesComponent,
	RoleCreateComponent,
	RoleEditComponent,
	RoleShowComponent,
	RoleDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
