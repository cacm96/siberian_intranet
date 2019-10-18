import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';

import { UserService } from '../../../../../core/services/admin/user.service'
import { LocationService } from '../../../../../core/services/admin/location.service'
import { RevisionService } from 'src/app/core/services/client/revision.service';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { EquipinfrasService } from 'src/app/core/services/admin/equipinfras.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestsComponent } from './requests/requests.component';
import { SheetComponent } from './sheet/sheet.component';
import { StepperComponent } from './stepper/stepper.component';
import { MessageComponent } from './message/message.component';

import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';


@NgModule({
  declarations:
  [
  	RequestComponent,
    RequestDetailComponent,
  	RequestsComponent,
    SheetComponent,
    StepperComponent,
    MessageComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers:
  [
    RevisionService,
    ServiceDetailService,
    EquipinfrasService,
    UserService,
    LocationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
  ]
})

export class RequestModule { }
