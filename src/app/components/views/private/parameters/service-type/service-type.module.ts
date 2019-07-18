import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ServiceTypeRoutingModule } from './service-type-routing.module';
import { ServiceTypeComponent } from './service-type.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { ServiceTypeCreateComponent } from './service-type-create/service-type-create.component';
import { ServiceTypeEditComponent } from './service-type-edit/service-type-edit.component';
import { ServiceTypeShowComponent } from './service-type-show/service-type-show.component';
import { ServiceTypeDeleteComponent } from './service-type-delete/service-type-delete.component';

@NgModule({
  declarations: [
	ServiceTypeComponent,
	ServiceTypesComponent,
	ServiceTypeCreateComponent,
	ServiceTypeEditComponent,
	ServiceTypeShowComponent,
	ServiceTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ServiceTypeRoutingModule
  ]
})
export class ServiceTypeModule { }
