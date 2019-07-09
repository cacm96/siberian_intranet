import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleFunctionComponent } from './role-function.component';
import { RoleFunctionsComponent } from './role-functions/role-functions.component';
import { RoleFunctionCreateComponent } from './role-function-create/role-function-create.component';
import { RoleFunctionEditComponent } from './role-function-edit/role-function-edit.component';
import { RoleFunctionShowComponent } from './role-function-show/role-function-show.component';
import { RoleFunctionDeleteComponent } from './role-function-delete/role-function-delete.component';

@NgModule({
  declarations: [RoleFunctionComponent, RoleFunctionsComponent, RoleFunctionCreateComponent, RoleFunctionEditComponent, RoleFunctionShowComponent, RoleFunctionDeleteComponent],
  imports: [
    CommonModule
  ]
})
export class RoleFunctionModule { }
