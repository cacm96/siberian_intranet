import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { MasterRoutingModule } from './master-routing.module';

import { ClientFatherComponent } from './client/client-father/client-father.component';
import { ClientsComponent } from './client/clients/clients.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientShowComponent } from './client/client-show/client-show.component';
import { ClientDeleteComponent } from './client/client-delete/client-delete.component';

import { UserFatherComponent } from './user/user-father/user-father.component';
import { UsersComponent } from './user/users/users.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';

import { RoleFatherComponent } from './role/role-father/role-father.component';
import { RolesComponent } from './role/roles/roles.component';
import { RoleCreateComponent } from './role/role-create/role-create.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';
import { RoleShowComponent } from './role/role-show/role-show.component';
import { RoleDeleteComponent } from './role/role-delete/role-delete.component';

import { FunctionFatherComponent } from './function/function-father/function-father.component';
import { FunctionsComponent } from './function/functions/functions.component';
import { FunctionCreateComponent } from './function/function-create/function-create.component';
import { FunctionEditComponent } from './function/function-edit/function-edit.component';
import { FunctionShowComponent } from './function/function-show/function-show.component';
import { FunctionDeleteComponent } from './function/function-delete/function-delete.component';

import { WorkerFatherComponent } from './worker/worker-father/worker-father.component';
import { WorkersComponent } from './worker/workers/workers.component';
import { WorkerCreateComponent } from './worker/worker-create/worker-create.component';
import { WorkerEditComponent } from './worker/worker-edit/worker-edit.component';
import { WorkerShowComponent } from './worker/worker-show/worker-show.component';
import { WorkerDeleteComponent } from './worker/worker-delete/worker-delete.component';

import { CompanyFatherComponent } from './company/company-father/company-father.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyShowComponent } from './company/company-show/company-show.component';
import { CompanyDeleteComponent } from './company/company-delete/company-delete.component';

import { SkillFatherComponent } from './skill/skill-father/skill-father.component';
import { SkillsComponent } from './skill/skills/skills.component';
import { SkillCreateComponent } from './skill/skill-create/skill-create.component';
import { SkillEditComponent } from './skill/skill-edit/skill-edit.component';
import { SkillShowComponent } from './skill/skill-show/skill-show.component';
import { SkillDeleteComponent } from './skill/skill-delete/skill-delete.component';

import { MasterComponent } from './master.component';

@NgModule({

  declarations: [
    MasterComponent,

	ClientFatherComponent,
    ClientsComponent,
    ClientCreateComponent,
    ClientEditComponent,
    ClientShowComponent,
    ClientDeleteComponent,
    
    UserFatherComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserShowComponent,
    UserDeleteComponent,

    RoleFatherComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleEditComponent,
    RoleShowComponent,
    RoleDeleteComponent,

    FunctionFatherComponent,
    FunctionsComponent,
    FunctionCreateComponent,
    FunctionEditComponent,
    FunctionShowComponent,
    FunctionDeleteComponent,

    WorkerFatherComponent,
    WorkersComponent,
    WorkerCreateComponent,
    WorkerEditComponent,
    WorkerShowComponent,
    WorkerDeleteComponent,

    CompanyFatherComponent,
    CompaniesComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyShowComponent,
    CompanyDeleteComponent,

    SkillFatherComponent,
    SkillsComponent,
    SkillCreateComponent,
    SkillEditComponent,
    SkillShowComponent,
    SkillDeleteComponent,
    
  ],
  imports:
  [
      MaterialModule,
      MasterRoutingModule
  ],
})
export class MasterModule { }
