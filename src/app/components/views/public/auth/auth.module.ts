import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/core/ui/material.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginComponent } from './login/login.component';
import { LoginWeitComponent } from './login-weit/login-weit.component';
import { LogoutComponent } from './logout/logout.component';

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
  ]
})
export class AuthModule { }
