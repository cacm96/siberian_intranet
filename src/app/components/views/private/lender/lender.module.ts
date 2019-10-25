import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { LenderRoutingModule } from './lender-routing.module';
import { LenderComponent } from './lender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestComponent } from './request/request.component';
import { ServiceComponent } from './service/service.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BudgetComponent } from './budget/budget.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

import { UserService } from 'src/app/core/services/admin/user.service';
import { LocationService } from 'src/app/core/services/admin/location.service';
import { RevisionService } from 'src/app/core/services/client/revision.service';
import { ServiceOrderService } from 'src/app/core/services/client/serviceOrder.service';
import { ServiceDetailService } from 'src/app/core/services/admin/serviceDetail.service';
import { EquipinfrasService } from 'src/app/core/services/admin/equipinfras.service';
import { RequestDetailComponent } from './request-detail/request-detail.component';

@NgModule({
  declarations:
  [
    LenderComponent,
  	DashboardComponent,
  	RequestComponent,
  	ServiceComponent,
  	DiagnosisComponent,
  	BudgetComponent,
  	RequestDetailComponent,
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers:
  [
    RevisionService,
    ServiceOrderService,
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
export class LenderModule { }
