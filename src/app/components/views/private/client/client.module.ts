import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../core/ui/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RevisionService } from 'src/app/core/services/admin/revision.service';
import { EquipinfrasService } from '../../../../core/services/admin/equipinfras.service';
import { UserService } from '../../../../core/services/admin/user.service';
import { LocationService } from '../../../../core/services/admin/location.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

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
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ],
  providers:
  [
    RevisionService,
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
export class ClientModule { }
