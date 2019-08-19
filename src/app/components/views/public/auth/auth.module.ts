import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/core/ui/material.module';
import { AuthService } from '../../../../core/services/public/auth.service';
import { LoginComponent } from './login/login.component';
import { LoginWeitComponent } from './login-weit/login-weit.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/core/services/token-interceptor.service';

@NgModule({
  declarations:
  [
	LoginComponent,
	LoginWeitComponent,
	LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  providers:
  [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
    
   ],
})
export class AuthModule { }
