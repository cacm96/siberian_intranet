import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ParameterClientRoutingModule } from './parameter-client-routing.module';
import { ParameterClientComponent } from './parameter-client.component';
import { ParameterClientsComponent } from './parameter-clients/parameter-clients.component';
import { ParameterClientCreateComponent } from './parameter-client-create/parameter-client-create.component';
import { ParameterClientEditComponent } from './parameter-client-edit/parameter-client-edit.component';
import { ParameterClientShowComponent } from './parameter-client-show/parameter-client-show.component';
import { ParameterClientDeleteComponent } from './parameter-client-delete/parameter-client-delete.component';

@NgModule({
  declarations: [
	ParameterClientComponent,
	ParameterClientsComponent,
	ParameterClientCreateComponent,
	ParameterClientEditComponent,
	ParameterClientShowComponent,
	ParameterClientDeleteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ParameterClientRoutingModule
  ]
})
export class ParameterClientModule { }
