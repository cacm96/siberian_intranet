import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../../core/ui/material.module';
import { ServiceDetailRoutingModule } from './service-detail-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { ComponentService } from 'src/app/core/services/admin/component.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

import { ServiceDetailComponent } from './service-detail.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceDetailCreateComponent } from './service-detail-create/service-detail-create.component';
import { ServiceDetailEditComponent } from './service-detail-edit/service-detail-edit.component';
import { ServiceDetailShowComponent } from './service-detail-show/service-detail-show.component';
import { ServiceDetailDeleteComponent } from './service-detail-delete/service-detail-delete.component';

@NgModule({
  declarations: [
	ServiceDetailComponent,
	ServiceDetailsComponent,
	ServiceDetailCreateComponent,
	ServiceDetailEditComponent,
	ServiceDetailShowComponent,
	ServiceDetailDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ServiceDetailRoutingModule
  ],
  providers:
  [
    ServiceDetailService,
    ComponentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
  ],
})
export class ServiceDetailModule { }
