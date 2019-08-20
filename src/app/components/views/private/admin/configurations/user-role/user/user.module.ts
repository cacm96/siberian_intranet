import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserService } from 'src/app/core/services/admin/user.service';
import { RoleService } from 'src/app/core/services/admin/role.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

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
    CommonModule,
    MaterialModule,
    FormsModule,
    UserRoutingModule
  ],
  providers:
  [
    UserService,
    RoleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
    
   ],
})
export class UserModule { }
