import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import { RequestShowComponent } from './request-show/request-show.component';
import { RequestDeleteComponent } from './request-delete/request-delete.component';

@NgModule({
  declarations: [
	RequestComponent,
	RequestsComponent,
	RequestCreateComponent,
	RequestEditComponent,
	RequestShowComponent,
	RequestDeleteComponent
  ],
  imports: [
    MaterialModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
