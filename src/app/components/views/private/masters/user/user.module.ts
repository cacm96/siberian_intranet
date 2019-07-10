import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  declarations: [
	UserComponent,
	UsersComponent,
	UserCreateComponent,
	UserEditComponent,
	UserShowComponent,
	UserDeleteComponent
  ],
  imports: [
    MaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
