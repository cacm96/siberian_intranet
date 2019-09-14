import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './core/ui/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorService } from './core/services/token-interceptor.service';

import { AuthService } from './core/services/public/auth.service';
import { UserService } from './core/services/admin/user.service';

import { SearchUserPipe } from './core/pipes/searchUser.pipe';
import { SearchFunctionPipe } from './core/pipes/searchFunction.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/views/public/auth/login/login.component';
import { LoginWeitComponent } from './components/views/public/auth/login-weit/login-weit.component';
import { RegisterComponent } from './components/views/public/auth/register/register.component';
import { LogoutComponent } from './components/views/public/auth/logout/logout.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { BlockComponent } from './components/shared/block/block.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';
import { SnackBarDeleteComponent } from './components/shared/snack-bar-delete/snack-bar-delete.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AddLocationDialogComponent } from './components/shared/add-location-dialog/add-location-dialog.component';
import { EditLocationDialogComponent } from './components/shared/edit-location-dialog/edit-location-dialog.component';
import { AddPhoneDialogComponent } from './components/shared/add-phone-dialog/add-phone-dialog.component';
import { EditPhoneDialogComponent } from './components/shared/edit-phone-dialog/edit-phone-dialog.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginWeitComponent,
    RegisterComponent,
    LogoutComponent,
    FooterComponent,
    ToolbarComponent,
    SidenavComponent,
    ErrorComponent,
    BlockComponent,
    SearchUserPipe,
    SearchFunctionPipe,
    HomeComponent,
    ConfirmDialogComponent,
    SnackBarDeleteComponent,
    AddLocationDialogComponent,
    EditLocationDialogComponent,
    EditPhoneDialogComponent,
    AddPhoneDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers:
  [
    appRoutingProviders,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000}}
    
   ],
  bootstrap: [AppComponent],
  entryComponents:[
    ConfirmDialogComponent,
    SnackBarDeleteComponent,
    AddLocationDialogComponent,
    EditLocationDialogComponent,
    AddPhoneDialogComponent,
    EditPhoneDialogComponent
  ]
})
export class AppModule { }
