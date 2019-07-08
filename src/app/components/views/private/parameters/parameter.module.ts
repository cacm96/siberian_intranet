import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';
import { ParameterRoutingModule } from './parameter-routing.module';

import { ParameterFatherComponent } from './parameter/parameter-father/parameter-father.component';
import { ParametersComponent } from './parameter/parameters/parameters.component';
import { ParameterCreateComponent } from './parameter/parameter-create/parameter-create.component';
import { ParameterEditComponent } from './parameter/parameter-edit/parameter-edit.component';
import { ParameterShowComponent } from './parameter/parameter-show/parameter-show.component';
import { ParameterDeleteComponent } from './parameter/parameter-delete/parameter-delete.component';

import { PhoneTypeFatherComponent } from './phone-type/phone-type-father/phone-type-father.component';
import { PhoneTypesComponent } from './phone-type/phone-types/phone-types.component';
import { PhoneTypeCreateComponent } from './phone-type/phone-type-create/phone-type-create.component';
import { PhoneTypeEditComponent } from './phone-type/phone-type-edit/phone-type-edit.component';
import { PhoneTypeShowComponent } from './phone-type/phone-type-show/phone-type-show.component';
import { PhoneTypeDeleteComponent } from './phone-type/phone-type-delete/phone-type-delete.component';

import { GenderFatherComponent } from './gender/gender-father/gender-father.component';
import { GendersComponent } from './gender/genders/genders.component';
import { GenderCreateComponent } from './gender/gender-create/gender-create.component';
import { GenderEditComponent } from './gender/gender-edit/gender-edit.component';
import { GenderShowComponent } from './gender/gender-show/gender-show.component';
import { GenderDeleteComponent } from './gender/gender-delete/gender-delete.component';

import { DniTypeFatherComponent } from './dni-type/dni-type-father/dni-type-father.component';
import { DniTypesComponent } from './dni-type/dni-types/dni-types.component';
import { DniTypeCreateComponent } from './dni-type/dni-type-create/dni-type-create.component';
import { DniTypeEditComponent } from './dni-type/dni-type-edit/dni-type-edit.component';
import { DniTypeShowComponent } from './dni-type/dni-type-show/dni-type-show.component';
import { DniTypeDeleteComponent } from './dni-type/dni-type-delete/dni-type-delete.component';

import { WorkerTypeFatherComponent } from './worker-type/worker-type-father/worker-type-father.component';
import { WorkerTypesComponent } from './worker-type/worker-types/worker-types.component';
import { WorkerTypeCreateComponent } from './worker-type/worker-type-create/worker-type-create.component';
import { WorkerTypeEditComponent } from './worker-type/worker-type-edit/worker-type-edit.component';
import { WorkerTypeShowComponent } from './worker-type/worker-type-show/worker-type-show.component';
import { WorkerTypeDeleteComponent } from './worker-type/worker-type-delete/worker-type-delete.component';

import { ParameterComponent } from './parameter.component';


@NgModule({

  declarations: [
    ParameterComponent,

    ParametersComponent,
    ParameterFatherComponent,
    ParameterCreateComponent,
    ParameterEditComponent,
    ParameterShowComponent,
    ParameterDeleteComponent,

    PhoneTypeFatherComponent,
    PhoneTypesComponent,
    PhoneTypeCreateComponent,
    PhoneTypeEditComponent,
    PhoneTypeShowComponent,
    PhoneTypeDeleteComponent,

    GenderFatherComponent,
    GendersComponent,
    GenderCreateComponent,
    GenderEditComponent,
    GenderShowComponent,
    GenderDeleteComponent,

    DniTypeFatherComponent,
    DniTypesComponent,
    DniTypeCreateComponent,
    DniTypeEditComponent,
    DniTypeShowComponent,
    DniTypeDeleteComponent,

    WorkerTypeFatherComponent,
    WorkerTypesComponent,
    WorkerTypeCreateComponent,
    WorkerTypeEditComponent,
    WorkerTypeShowComponent,
    WorkerTypeDeleteComponent,
  ],
  imports:
  [
      MaterialModule,
      ParameterRoutingModule
  ],
})
export class ParameterModule { }
