import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ResourceTypeRoutingModule } from './resource-type-routing.module';
import { ResourceTypeComponent } from './resource-type.component';
import { ResourceTypesComponent } from './resource-types/resource-types.component';
import { ResourceTypeCreateComponent } from './resource-type-create/resource-type-create.component';
import { ResourceTypeEditComponent } from './resource-type-edit/resource-type-edit.component';
import { ResourceTypeShowComponent } from './resource-type-show/resource-type-show.component';
import { ResourceTypeDeleteComponent } from './resource-type-delete/resource-type-delete.component';

@NgModule({
  declarations: [
	ResourceTypeComponent,
	ResourceTypesComponent,
	ResourceTypeCreateComponent,
	ResourceTypeEditComponent,
	ResourceTypeShowComponent,
	ResourceTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ResourceTypeRoutingModule
  ]
})
export class ResourceTypeModule { }
