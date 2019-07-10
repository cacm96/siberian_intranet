import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientShowComponent } from './client-show/client-show.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';

@NgModule({
  declarations: [
	ClientComponent,
	ClientsComponent,
	ClientCreateComponent,
	ClientEditComponent,
	ClientShowComponent,
	ClientDeleteComponent
  ],
  imports: [
    MaterialModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
