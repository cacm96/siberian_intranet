import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginWeitComponent } from './login-weit/login-weit.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full', canActivate: []},
	{path: 'login', component: LoginComponent, canActivate: []},
	{path: 'loginWeit', component: LoginWeitComponent, canActivate: []},
	{path: 'logout', component: LogoutComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AuthRoutingModule { }