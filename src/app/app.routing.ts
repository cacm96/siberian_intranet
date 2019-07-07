import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { RedirectAuthGuard } from './core/guards/redirect-auth.guard';

import { LoginComponent } from './components/views/public/auth/login/login.component';
import { LoginWeitComponent } from './components/views/public/auth/login-weit/login-weit.component';
import { LogoutComponent } from './components/views/public/auth/logout/logout.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { BlockComponent } from './components/shared/block/block.component';

import { IndexManagerComponent } from './components/views/private/dashboard/manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './components/views/private/dashboard/admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './components/views/private/dashboard/lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './components/views/private/dashboard/client/index-cliente/index-cliente.component';

import { HomeComponent } from './components/shared/home/home.component';

import { ParameterFatherComponent } from './components/views/private/parameters/parameter/parameter-father/parameter-father.component';
import { ParametersComponent } from './components/views/private/parameters/parameter/parameters/parameters.component';
import { ParameterCreateComponent } from './components/views/private/parameters/parameter/parameter-create/parameter-create.component';
import { ParameterEditComponent } from './components/views/private/parameters/parameter/parameter-edit/parameter-edit.component';
import { ParameterShowComponent } from './components/views/private/parameters/parameter/parameter-show/parameter-show.component';
import { ParameterDeleteComponent } from './components/views/private/parameters/parameter/parameter-delete/parameter-delete.component';

import { ParameterClientFatherComponent } from './components/views/private/configurations/parameter-client/parameter-client-father/parameter-client-father.component';
import { ParameterClientsComponent } from './components/views/private/configurations/parameter-client/parameter-clients/parameter-clients.component';
import { ParameterClientCreateComponent } from './components/views/private/configurations/parameter-client/parameter-client-create/parameter-client-create.component';
import { ParameterClientEditComponent } from './components/views/private/configurations/parameter-client/parameter-client-edit/parameter-client-edit.component';
import { ParameterClientShowComponent } from './components/views/private/configurations/parameter-client/parameter-client-show/parameter-client-show.component';
import { ParameterClientDeleteComponent } from './components/views/private/configurations/parameter-client/parameter-client-delete/parameter-client-delete.component';

import { ClientFatherComponent } from './components/views/private/masters/client/client-father/client-father.component';
import { ClientsComponent } from './components/views/private/masters/client/clients/clients.component';
import { ClientCreateComponent } from './components/views/private/masters/client/client-create/client-create.component';
import { ClientEditComponent } from './components/views/private/masters/client/client-edit/client-edit.component';
import { ClientShowComponent } from './components/views/private/masters/client/client-show/client-show.component';
import { ClientDeleteComponent } from './components/views/private/masters/client/client-delete/client-delete.component';

import { PhoneTypeFatherComponent } from './components/views/private/parameters/phone-type/phone-type-father/phone-type-father.component';
import { PhoneTypesComponent } from './components/views/private/parameters/phone-type/phone-types/phone-types.component';
import { PhoneTypeCreateComponent } from './components/views/private/parameters/phone-type/phone-type-create/phone-type-create.component';
import { PhoneTypeEditComponent } from './components/views/private/parameters/phone-type/phone-type-edit/phone-type-edit.component';
import { PhoneTypeShowComponent } from './components/views/private/parameters/phone-type/phone-type-show/phone-type-show.component';
import { PhoneTypeDeleteComponent } from './components/views/private/parameters/phone-type/phone-type-delete/phone-type-delete.component';

import { PhoneFatherComponent } from './components/views/private/configurations/phone/phone-father/phone-father.component';
import { PhonesComponent } from './components/views/private/configurations/phone/phones/phones.component';
import { PhoneCreateComponent } from './components/views/private/configurations/phone/phone-create/phone-create.component';
import { PhoneEditComponent } from './components/views/private/configurations/phone/phone-edit/phone-edit.component';
import { PhoneShowComponent } from './components/views/private/configurations/phone/phone-show/phone-show.component';
import { PhoneDeleteComponent } from './components/views/private/configurations/phone/phone-delete/phone-delete.component';

import { GenderFatherComponent } from './components/views/private/parameters/gender/gender-father/gender-father.component';
import { GendersComponent } from './components/views/private/parameters/gender/genders/genders.component';
import { GenderCreateComponent } from './components/views/private/parameters/gender/gender-create/gender-create.component';
import { GenderEditComponent } from './components/views/private/parameters/gender/gender-edit/gender-edit.component';
import { GenderShowComponent } from './components/views/private/parameters/gender/gender-show/gender-show.component';
import { GenderDeleteComponent } from './components/views/private/parameters/gender/gender-delete/gender-delete.component';

import { DniTypeFatherComponent } from './components/views/private/parameters/dni-type/dni-type-father/dni-type-father.component';
import { DniTypesComponent } from './components/views/private/parameters/dni-type/dni-types/dni-types.component';
import { DniTypeCreateComponent } from './components/views/private/parameters/dni-type/dni-type-create/dni-type-create.component';
import { DniTypeEditComponent } from './components/views/private/parameters/dni-type/dni-type-edit/dni-type-edit.component';
import { DniTypeShowComponent } from './components/views/private/parameters/dni-type/dni-type-show/dni-type-show.component';
import { DniTypeDeleteComponent } from './components/views/private/parameters/dni-type/dni-type-delete/dni-type-delete.component';

import { UserFatherComponent } from './components/views/private/masters/user/user-father/user-father.component';
import { UsersComponent } from './components/views/private/masters/user/users/users.component';
import { UserCreateComponent } from './components/views/private/masters/user/user-create/user-create.component';
import { UserEditComponent } from './components/views/private/masters/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/views/private/masters/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/views/private/masters/user/user-delete/user-delete.component';

import { RoleFatherComponent } from './components/views/private/masters/role/role-father/role-father.component';
import { RolesComponent } from './components/views/private/masters/role/roles/roles.component';
import { RoleCreateComponent } from './components/views/private/masters/role/role-create/role-create.component';
import { RoleEditComponent } from './components/views/private/masters/role/role-edit/role-edit.component';
import { RoleShowComponent } from './components/views/private/masters/role/role-show/role-show.component';
import { RoleDeleteComponent } from './components/views/private/masters/role/role-delete/role-delete.component';

import { UserRoleFatherComponent } from './components/views/private/configurations/user-role/user-role-father/user-role-father.component';
import { UserRolesComponent } from './components/views/private/configurations/user-role/user-roles/user-roles.component';
import { UserRoleCreateComponent } from './components/views/private/configurations/user-role/user-role-create/user-role-create.component';
import { UserRoleEditComponent } from './components/views/private/configurations/user-role/user-role-edit/user-role-edit.component';
import { UserRoleShowComponent } from './components/views/private/configurations/user-role/user-role-show/user-role-show.component';
import { UserRoleDeleteComponent } from './components/views/private/configurations/user-role/user-role-delete/user-role-delete.component';

import { FunctionFatherComponent } from './components/views/private/masters/function/function-father/function-father.component';
import { FunctionsComponent } from './components/views/private/masters/function/functions/functions.component';
import { FunctionCreateComponent } from './components/views/private/masters/function/function-create/function-create.component';
import { FunctionEditComponent } from './components/views/private/masters/function/function-edit/function-edit.component';
import { FunctionShowComponent } from './components/views/private/masters/function/function-show/function-show.component';
import { FunctionDeleteComponent } from './components/views/private/masters/function/function-delete/function-delete.component';

import { FunctionRoleFatherComponent } from './components/views/private/configurations/function-role/function-role-father/function-role-father.component';
import { FunctionRolesComponent } from './components/views/private/configurations/function-role/function-roles/function-roles.component';
import { FunctionRoleCreateComponent } from './components/views/private/configurations/function-role/function-role-create/function-role-create.component';
import { FunctionRoleEditComponent } from './components/views/private/configurations/function-role/function-role-edit/function-role-edit.component';
import { FunctionRoleShowComponent } from './components/views/private/configurations/function-role/function-role-show/function-role-show.component';
import { FunctionRoleDeleteComponent } from './components/views/private/configurations/function-role/function-role-delete/function-role-delete.component';

import { WorkerTypeFatherComponent } from './components/views/private/parameters/worker-type/worker-type-father/worker-type-father.component';
import { WorkerTypesComponent } from './components/views/private/parameters/worker-type/worker-types/worker-types.component';
import { WorkerTypeCreateComponent } from './components/views/private/parameters/worker-type/worker-type-create/worker-type-create.component';
import { WorkerTypeEditComponent } from './components/views/private/parameters/worker-type/worker-type-edit/worker-type-edit.component';
import { WorkerTypeShowComponent } from './components/views/private/parameters/worker-type/worker-type-show/worker-type-show.component';
import { WorkerTypeDeleteComponent } from './components/views/private/parameters/worker-type/worker-type-delete/worker-type-delete.component';

import { WorkerFatherComponent } from './components/views/private/masters/worker/worker-father/worker-father.component';
import { WorkersComponent } from './components/views/private/masters/worker/workers/workers.component';
import { WorkerCreateComponent } from './components/views/private/masters/worker/worker-create/worker-create.component';
import { WorkerEditComponent } from './components/views/private/masters/worker/worker-edit/worker-edit.component';
import { WorkerShowComponent } from './components/views/private/masters/worker/worker-show/worker-show.component';
import { WorkerDeleteComponent } from './components/views/private/masters/worker/worker-delete/worker-delete.component';

import { CompanyFatherComponent } from './components/views/private/masters/company/company-father/company-father.component';
import { CompaniesComponent } from './components/views/private/masters/company/companies/companies.component';
import { CompanyCreateComponent } from './components/views/private/masters/company/company-create/company-create.component';
import { CompanyEditComponent } from './components/views/private/masters/company/company-edit/company-edit.component';
import { CompanyShowComponent } from './components/views/private/masters/company/company-show/company-show.component';
import { CompanyDeleteComponent } from './components/views/private/masters/company/company-delete/company-delete.component';

import { SkillFatherComponent } from './components/views/private/masters/skill/skill-father/skill-father.component';
import { SkillsComponent } from './components/views/private/masters/skill/skills/skills.component';
import { SkillCreateComponent } from './components/views/private/masters/skill/skill-create/skill-create.component';
import { SkillEditComponent } from './components/views/private/masters/skill/skill-edit/skill-edit.component';
import { SkillShowComponent } from './components/views/private/masters/skill/skill-show/skill-show.component';
import { SkillDeleteComponent } from './components/views/private/masters/skill/skill-delete/skill-delete.component';

import { SkillWorkerFatherComponent } from './components/views/private/configurations/skill-worker/skill-worker-father/skill-worker-father.component';
import { SkillWorkersComponent } from './components/views/private/configurations/skill-worker/skill-workers/skill-workers.component';
import { SkillWorkerCreateComponent } from './components/views/private/configurations/skill-worker/skill-worker-create/skill-worker-create.component';
import { SkillWorkerEditComponent } from './components/views/private/configurations/skill-worker/skill-worker-edit/skill-worker-edit.component';
import { SkillWorkerShowComponent } from './components/views/private/configurations/skill-worker/skill-worker-show/skill-worker-show.component';
import { SkillWorkerDeleteComponent } from './components/views/private/configurations/skill-worker/skill-worker-delete/skill-worker-delete.component';


// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full', canActivate: []},
	{path: 'login', component: LoginComponent, canActivate: []},
	{path: 'loginWeit', component: LoginWeitComponent, canActivate: []},
	{path: 'logout', component: LogoutComponent},

	{path: 'app', component: HomeComponent, canActivate: [],
		children:
		[
			{path: 'dashboardClient', component: IndexClienteComponent, canActivate: []},
			{path: 'dashboardLender', component: IndexLenderComponent, canActivate: []},
			{path: 'dashboardManager', component: IndexManagerComponent, canActivate: []},
			{path: 'dashboardAdmin', component: IndexAdminComponent, canActivate: []},
	
			{path: 'parameters', component: HomeComponent, canActivate: [],
				children:
				[
					{path: 'parameter', component: ParameterFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: ParametersComponent},
							{path: 'create', component: ParameterCreateComponent},
							{path: 'edit/:id', component: ParameterEditComponent},
							{path: 'show/:id', component: ParameterShowComponent},
							{path: 'delete/:id', component: ParameterDeleteComponent},
						]
					},
					{path: 'phone-type', component: PhoneTypeFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: PhoneTypesComponent},
							{path: 'create', component: PhoneTypeCreateComponent},
							{path: 'edit/:id', component: PhoneTypeEditComponent},
							{path: 'show/:id', component: PhoneTypeShowComponent},
							{path: 'delete/:id', component: PhoneTypeDeleteComponent},
						]
					},
					{path: 'phone', component: PhoneFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: PhonesComponent},
							{path: 'create', component: PhoneCreateComponent},
							{path: 'edit/:id', component: PhoneEditComponent},
							{path: 'show/:id', component: PhoneShowComponent},
							{path: 'delete/:id', component: PhoneDeleteComponent},
						]
					},
					{path: 'gender', component: GenderFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: GendersComponent},
							{path: 'create', component: GenderCreateComponent},
							{path: 'edit/:id', component: GenderEditComponent},
							{path: 'show/:id', component: GenderShowComponent},
							{path: 'delete/:id', component: GenderDeleteComponent},
						]
					},
					{path: 'dni-type', component: DniTypeFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: DniTypesComponent},
							{path: 'create', component: DniTypeCreateComponent},
							{path: 'edit/:id', component: DniTypeEditComponent},
							{path: 'show/:id', component: DniTypeShowComponent},
							{path: 'delete/:id', component: DniTypeDeleteComponent},
						]
					},
					{path: 'worker-type', component: WorkerTypeFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: WorkerTypesComponent},
							{path: 'create', component: WorkerTypeCreateComponent},
							{path: 'edit/:id', component: WorkerTypeEditComponent},
							{path: 'show/:id', component: WorkerTypeShowComponent},
							{path: 'delete/:id', component: WorkerTypeDeleteComponent},
						]
					},
				]
			},

			{path: 'masters', component: HomeComponent, canActivate: [],
				children:
				[
					{path: 'client', component: ClientFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: ClientsComponent},
							{path: 'create', component: ClientCreateComponent},
							{path: 'edit/:id', component: ClientEditComponent},
							{path: 'show/:id', component: ClientShowComponent},
							{path: 'delete/:id', component: ClientDeleteComponent},
						]
					},

					{path: 'user', component: UserFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: UsersComponent},
							{path: 'create', component: UserCreateComponent},
							{path: 'edit/:id', component: UserEditComponent},
							{path: 'show/:id', component: UserShowComponent},
							{path: 'delete/:id', component: UserDeleteComponent},
						]
					},

					{path: 'function', component: FunctionFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: FunctionsComponent},
							{path: 'create', component: FunctionCreateComponent},
							{path: 'edit/:id', component: FunctionEditComponent},
							{path: 'show/:id', component: FunctionShowComponent},
							{path: 'delete/:id', component: FunctionDeleteComponent},
						]
					},
					{path: 'role', component: RoleFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: RolesComponent},
							{path: 'create', component: RoleCreateComponent},
							{path: 'edit/:id', component: RoleEditComponent},
							{path: 'show/:id', component: RoleShowComponent},
							{path: 'delete/:id', component: RoleDeleteComponent},
						]
					},
					{path: 'worker', component: WorkerFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: WorkersComponent},
							{path: 'create', component: WorkerCreateComponent},
							{path: 'edit/:id', component: WorkerEditComponent},
							{path: 'show/:id', component: WorkerShowComponent},
							{path: 'delete/:id', component: WorkerDeleteComponent},
						]
					},
					{path: 'skill', component: SkillFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: SkillsComponent},
							{path: 'create', component: SkillCreateComponent},
							{path: 'edit/:id', component: SkillEditComponent},
							{path: 'show/:id', component: SkillShowComponent},
							{path: 'delete/:id', component: SkillDeleteComponent},
						]
					},
					{path: 'skill-worker', component: SkillWorkerFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: SkillWorkersComponent},
							{path: 'create', component: SkillWorkerCreateComponent},
							{path: 'edit/:id', component: SkillWorkerEditComponent},
							{path: 'show/:id', component: SkillWorkerShowComponent},
							{path: 'delete/:id', component: SkillWorkerDeleteComponent},
						]
					},
				]
			},

			{path: 'configurations', component: HomeComponent, canActivate: [],
				children:
				[
					{path: 'parameter-client', component: ParameterClientFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: ParameterClientsComponent},
							{path: 'create', component: ParameterClientCreateComponent},
							{path: 'edit/:id', component: ParameterClientEditComponent},
							{path: 'show/:id', component: ParameterClientShowComponent},
							{path: 'delete/:id', component: ParameterClientDeleteComponent},
						]
					},
					{path: 'phone', component: PhoneFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: PhonesComponent},
							{path: 'create', component: PhoneCreateComponent},
							{path: 'edit/:id', component: PhoneEditComponent},
							{path: 'show/:id', component: PhoneShowComponent},
							{path: 'delete/:id', component: PhoneDeleteComponent},
						]
					},
					{path: 'user-role', component: UserRoleFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: UserRolesComponent},
							{path: 'create', component: UserRoleCreateComponent},
							{path: 'edit/:id', component: UserRoleEditComponent},
							{path: 'show/:id', component: UserRoleShowComponent},
							{path: 'delete/:id', component: UserRoleDeleteComponent},
						]
					},
					{path: 'function-role', component: FunctionRoleFatherComponent, canActivate: [],
						children:
						[
							{path: '', component: FunctionRolesComponent},
							{path: 'create', component: FunctionRoleCreateComponent},
							{path: 'edit/:id', component: FunctionRoleEditComponent},
							{path: 'show/:id', component: FunctionRoleShowComponent},
							{path: 'delete/:id', component: FunctionRoleDeleteComponent},
						]
					},
				]
			},
		]
	},


	


	

	{path: 'block', component: BlockComponent},
	{path: '**', component: ErrorComponent},

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled' });