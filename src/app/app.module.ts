import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthService } from './services/auth.service';
import { FunctionService } from './services/function.service';
import { UserService } from './services/user.service';

import { SearchUserPipe } from './pipes/searchUser.pipe';
import { SearchFunctionPipe } from './pipes/searchFunction.pipe';

import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { BlockComponent } from './components/block/block.component';

import { UserFatherComponent } from './components/user/user-father/user-father.component';
import { UsersComponent } from './components/user/users/users.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';

import { ProfileFatherComponent } from './components/profile/profile-father/profile-father.component';
import { ProfilesComponent } from './components/profile/profiles/profiles.component';
import { ProfileCreateComponent } from './components/profile/profile-create/profile-create.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileShowComponent } from './components/profile/profile-show/profile-show.component';
import { ProfileDeleteComponent } from './components/profile/profile-delete/profile-delete.component';

import { SystemFatherComponent } from './components/system/system-father/system-father.component';
import { SystemsComponent } from './components/system/systems/systems.component';
import { SystemCreateComponent } from './components/system/system-create/system-create.component';
import { SystemEditComponent } from './components/system/system-edit/system-edit.component';
import { SystemShowComponent } from './components/system/system-show/system-show.component';
import { SystemDeleteComponent } from './components/system/system-delete/system-delete.component';

import { FunctionFatherComponent } from './components/function/function-father/function-father.component';
import { FunctionsComponent } from './components/function/functions/functions.component';
import { FunctionCreateComponent } from './components/function/function-create/function-create.component';
import { FunctionEditComponent } from './components/function/function-edit/function-edit.component';
import { FunctionShowComponent } from './components/function/function-show/function-show.component';
import { FunctionDeleteComponent } from './components/function/function-delete/function-delete.component';

import { IndexManagerComponent } from './components/dashboard/manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './components/dashboard/admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './components/dashboard/lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './components/dashboard/client/index-cliente/index-cliente.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ErrorComponent,
    BlockComponent,
    SearchUserPipe,
    SearchFunctionPipe,
    UserFatherComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserShowComponent,
    UserDeleteComponent,
    ProfileFatherComponent,
    ProfilesComponent,
    ProfileCreateComponent,
    ProfileEditComponent,
    ProfileShowComponent,
    ProfileDeleteComponent,
    SystemFatherComponent,
    SystemsComponent,
    SystemCreateComponent,
    SystemEditComponent,
    SystemShowComponent,
    SystemDeleteComponent,
    FunctionFatherComponent,
    FunctionsComponent,
    FunctionCreateComponent,
    FunctionEditComponent,
    FunctionShowComponent,
    FunctionDeleteComponent,
    IndexManagerComponent,
    IndexAdminComponent,
    IndexLenderComponent,
    IndexClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:
  [
    appRoutingProviders,
    AuthService,
    UserService,
    FunctionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    },
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
