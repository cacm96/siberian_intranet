import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';

import { ParameterClientFatherComponent } from './parameter-client/parameter-client-father/parameter-client-father.component';
import { ParameterClientsComponent } from './parameter-client/parameter-clients/parameter-clients.component';
import { ParameterClientCreateComponent } from './parameter-client/parameter-client-create/parameter-client-create.component';
import { ParameterClientEditComponent } from './parameter-client/parameter-client-edit/parameter-client-edit.component';
import { ParameterClientShowComponent } from './parameter-client/parameter-client-show/parameter-client-show.component';
import { ParameterClientDeleteComponent } from './parameter-client/parameter-client-delete/parameter-client-delete.component';

import { PhoneFatherComponent } from './phone/phone-father/phone-father.component';
import { PhonesComponent } from './phone/phones/phones.component';
import { PhoneCreateComponent } from './phone/phone-create/phone-create.component';
import { PhoneEditComponent } from './phone/phone-edit/phone-edit.component';
import { PhoneShowComponent } from './phone/phone-show/phone-show.component';
import { PhoneDeleteComponent } from './phone/phone-delete/phone-delete.component';

import { UserRoleFatherComponent } from './user-role/user-role-father/user-role-father.component';
import { UserRolesComponent } from './user-role/user-roles/user-roles.component';
import { UserRoleCreateComponent } from './user-role/user-role-create/user-role-create.component';
import { UserRoleEditComponent } from './user-role/user-role-edit/user-role-edit.component';
import { UserRoleShowComponent } from './user-role/user-role-show/user-role-show.component';
import { UserRoleDeleteComponent } from './user-role/user-role-delete/user-role-delete.component';

import { FunctionRoleFatherComponent } from './function-role/function-role-father/function-role-father.component';
import { FunctionRolesComponent } from './function-role/function-roles/function-roles.component';
import { FunctionRoleCreateComponent } from './function-role/function-role-create/function-role-create.component';
import { FunctionRoleEditComponent } from './function-role/function-role-edit/function-role-edit.component';
import { FunctionRoleShowComponent } from './function-role/function-role-show/function-role-show.component';
import { FunctionRoleDeleteComponent } from './function-role/function-role-delete/function-role-delete.component';

import { SkillWorkerFatherComponent } from './skill-worker/skill-worker-father/skill-worker-father.component';
import { SkillWorkersComponent } from './skill-worker/skill-workers/skill-workers.component';
import { SkillWorkerCreateComponent } from './skill-worker/skill-worker-create/skill-worker-create.component';
import { SkillWorkerEditComponent } from './skill-worker/skill-worker-edit/skill-worker-edit.component';
import { SkillWorkerShowComponent } from './skill-worker/skill-worker-show/skill-worker-show.component';
import { SkillWorkerDeleteComponent } from './skill-worker/skill-worker-delete/skill-worker-delete.component';

import { CatalogueVarietyDetailComponent } from './catalogue-variety-detail/catalogue-variety-detail.component';

@NgModule({
  declarations: [
    ConfigurationComponent,

    ParameterClientFatherComponent,
    ParameterClientsComponent,
    ParameterClientCreateComponent,
    ParameterClientEditComponent,
    ParameterClientShowComponent,
    ParameterClientDeleteComponent,

    PhoneFatherComponent,
    PhonesComponent,
    PhoneCreateComponent,
    PhoneEditComponent,
    PhoneShowComponent,
    PhoneDeleteComponent,

    UserRoleFatherComponent,
    UserRolesComponent,
    UserRoleCreateComponent,
    UserRoleEditComponent,
    UserRoleShowComponent,
    UserRoleDeleteComponent,

    FunctionRoleFatherComponent,
    FunctionRolesComponent,
    FunctionRoleCreateComponent,
    FunctionRoleEditComponent,
    FunctionRoleShowComponent,
    FunctionRoleDeleteComponent,
    
    SkillWorkerFatherComponent,
    SkillWorkersComponent,
    SkillWorkerCreateComponent,
    SkillWorkerEditComponent,
    SkillWorkerShowComponent,
    SkillWorkerDeleteComponent,
    
    CatalogueVarietyDetailComponent,
  ],
  imports:
  [
      MaterialModule,
      ConfigurationRoutingModule
  ],
})
export class ConfigurationModule { }
