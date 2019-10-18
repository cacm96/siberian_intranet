import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RevisionService } from 'src/app/core/services/client/revision.service';
import { ServiceOrderService } from 'src/app/core/services/client/serviceOrder.service';
import { EquipinfrasService } from '../../../../core/services/admin/equipinfras.service';
import { UserService } from '../../../../core/services/admin/user.service';
import { LocationService } from '../../../../core/services/admin/location.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClaimComponent } from './claim/claim.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { SuggestionComponent } from './suggestion/suggestion.component';

@NgModule({
  declarations:
  [
  	ClientComponent,
  	ClaimComponent,
  	DashboardComponent,
  	ServiceComponent,
  	SuggestionComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers:
  [
    RevisionService,
    EquipinfrasService,
    ServiceOrderService,
    UserService,
    LocationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
  ]
})
export class ClientModule { }
