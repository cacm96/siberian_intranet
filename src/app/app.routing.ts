import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RedirectAuthGuard } from './redirect-auth.guard';

import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

import { LoginComponent } from './components/auth/login/login.component';
import { LoginWeitComponent } from './components/auth/login-weit/login-weit.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

import { IndexManagerComponent } from './components/dashboard/manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './components/dashboard/admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './components/dashboard/lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './components/dashboard/client/index-cliente/index-cliente.component';

import { ProfileFatherComponent } from './components/profile/profile-father/profile-father.component';
import { ProfilesComponent } from './components/profile/profiles/profiles.component';
import { ProfileCreateComponent } from './components/profile/profile-create/profile-create.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ProfileShowComponent } from './components/profile/profile-show/profile-show.component';
import { ProfileDeleteComponent } from './components/profile/profile-delete/profile-delete.component';

import { SystemFatherComponent } from './components/masters/configure-system/system/system-father/system-father.component';
import { SystemsComponent } from './components/masters/configure-system/system/systems/systems.component';
import { SystemCreateComponent } from './components/masters/configure-system/system/system-create/system-create.component';
import { SystemEditComponent } from './components/masters/configure-system/system/system-edit/system-edit.component';
import { SystemShowComponent } from './components/masters/configure-system/system/system-show/system-show.component';
import { SystemDeleteComponent } from './components/masters/configure-system/system/system-delete/system-delete.component';

import { FunctionFatherComponent } from './components/masters/configure-system/function/function-father/function-father.component';
import { FunctionsComponent } from './components/masters/configure-system/function/functions/functions.component';
import { FunctionCreateComponent } from './components/masters/configure-system/function/function-create/function-create.component';
import { FunctionEditComponent } from './components/masters/configure-system/function/function-edit/function-edit.component';
import { FunctionShowComponent } from './components/masters/configure-system/function/function-show/function-show.component';
import { FunctionDeleteComponent } from './components/masters/configure-system/function/function-delete/function-delete.component';

import { PermissionFatherComponent } from './components/masters/configure-system/permission/permission-father/permission-father.component';
import { PermissionsComponent } from './components/masters/configure-system/permission/permissions/permissions.component';
import { PermissionCreateComponent } from './components/masters/configure-system/permission/permission-create/permission-create.component';
import { PermissionEditComponent } from './components/masters/configure-system/permission/permission-edit/permission-edit.component';
import { PermissionShowComponent } from './components/masters/configure-system/permission/permission-show/permission-show.component';
import { PermissionDeleteComponent } from './components/masters/configure-system/permission/permission-delete/permission-delete.component';

import { RoleFatherComponent } from './components/masters/configure-system/role/role-father/role-father.component';
import { RolesComponent } from './components/masters/configure-system/role/roles/roles.component';
import { RoleCreateComponent } from './components/masters/configure-system/role/role-create/role-create.component';
import { RoleEditComponent } from './components/masters/configure-system/role/role-edit/role-edit.component';
import { RoleShowComponent } from './components/masters/configure-system/role/role-show/role-show.component';
import { RoleDeleteComponent } from './components/masters/configure-system/role/role-delete/role-delete.component';

import { AssignFunctionFatherComponent } from './components/masters/configure-system/assignFunction/assign-function-father/assign-function-father.component';
import { AssignFunctionsComponent } from './components/masters/configure-system/assignFunction/assign-functions/assign-functions.component';
import { AssignFunctionCreateComponent } from './components/masters/configure-system/assignFunction/assign-function-create/assign-function-create.component';
import { AssignFunctionEditComponent } from './components/masters/configure-system/assignFunction/assign-function-edit/assign-function-edit.component';
import { AssignFunctionShowComponent } from './components/masters/configure-system/assignFunction/assign-function-show/assign-function-show.component';
import { AssignFunctionDeleteComponent } from './components/masters/configure-system/assignFunction/assign-function-delete/assign-function-delete.component';

import { ParameterFatherComponent } from './components/masters/configure-system/parameter/parameter-father/parameter-father.component';
import { ParametersComponent } from './components/masters/configure-system/parameter/parameters/parameters.component';
import { ParameterCreateComponent } from './components/masters/configure-system/parameter/parameter-create/parameter-create.component';
import { ParameterEditComponent } from './components/masters/configure-system/parameter/parameter-edit/parameter-edit.component';
import { ParameterShowComponent } from './components/masters/configure-system/parameter/parameter-show/parameter-show.component';
import { ParameterDeleteComponent } from './components/masters/configure-system/parameter/parameter-delete/parameter-delete.component';


import { UserFatherComponent } from './components/masters/configure-user/user/user-father/user-father.component';
import { UsersComponent } from './components/masters/configure-user/user/users/users.component';
import { UserCreateComponent } from './components/masters/configure-user/user/user-create/user-create.component';
import { UserEditComponent } from './components/masters/configure-user/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/masters/configure-user/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/masters/configure-user/user/user-delete/user-delete.component';


import { CategoryFatherComponent } from './components/masters/configure-catalogue/category/category-father/category-father.component';
import { CategorysComponent } from './components/masters/configure-catalogue/category/categorys/categorys.component';
import { CategoryCreateComponent } from './components/masters/configure-catalogue/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/masters/configure-catalogue/category/category-edit/category-edit.component';
import { CategoryShowComponent } from './components/masters/configure-catalogue/category/category-show/category-show.component';
import { CategoryDeleteComponent } from './components/masters/configure-catalogue/category/category-delete/category-delete.component';

import { SubcategoryFatherComponent } from './components/masters/configure-catalogue/subcategory/subcategory-father/subcategory-father.component';
import { SubcategorysComponent } from './components/masters/configure-catalogue/subcategory/subcategorys/subcategorys.component';
import { SubcategoryCreateComponent } from './components/masters/configure-catalogue/subcategory/subcategory-create/subcategory-create.component';
import { SubcategoryEditComponent } from './components/masters/configure-catalogue/subcategory/subcategory-edit/subcategory-edit.component';
import { SubcategoryShowComponent } from './components/masters/configure-catalogue/subcategory/subcategory-show/subcategory-show.component';
import { SubcategoryDeleteComponent } from './components/masters/configure-catalogue/subcategory/subcategory-delete/subcategory-delete.component';

import { TypeServiceFatherComponent } from './components/masters/configure-catalogue/typeservice/type-service-father/type-service-father.component';
import { TypeServicesComponent } from './components/masters/configure-catalogue/typeservice/type-services/type-services.component';
import { TypeServiceCreateComponent } from './components/masters/configure-catalogue/typeservice/type-service-create/type-service-create.component';
import { TypeServiceEditComponent } from './components/masters/configure-catalogue/typeservice/type-service-edit/type-service-edit.component';
import { TypeServiceShowComponent } from './components/masters/configure-catalogue/typeservice/type-service-show/type-service-show.component';
import { TypeServiceDeleteComponent } from './components/masters/configure-catalogue/typeservice/type-service-delete/type-service-delete.component';

import { TypeVarietyFatherComponent } from './components/masters/configure-catalogue/typevariety/type-variety-father/type-variety-father.component';
import { TypeVarietysComponent } from './components/masters/configure-catalogue/typevariety/type-varietys/type-varietys.component';
import { TypeVarietyCreateComponent } from './components/masters/configure-catalogue/typevariety/type-variety-create/type-variety-create.component';
import { TypeVarietyEditComponent } from './components/masters/configure-catalogue/typevariety/type-variety-edit/type-variety-edit.component';
import { TypeVarietyShowComponent } from './components/masters/configure-catalogue/typevariety/type-variety-show/type-variety-show.component';
import { TypeVarietyDeleteComponent } from './components/masters/configure-catalogue/typevariety/type-variety-delete/type-variety-delete.component';

import { VarietyFatherComponent } from './components/masters/configure-catalogue/variety/variety-father/variety-father.component';
import { VarietysComponent } from './components/masters/configure-catalogue/variety/varietys/varietys.component';
import { VarietyCreateComponent } from './components/masters/configure-catalogue/variety/variety-create/variety-create.component';
import { VarietyEditComponent } from './components/masters/configure-catalogue/variety/variety-edit/variety-edit.component';
import { VarietyShowComponent } from './components/masters/configure-catalogue/variety/variety-show/variety-show.component';
import { VarietyDeleteComponent } from './components/masters/configure-catalogue/variety/variety-delete/variety-delete.component';

import { DetailVarietyFatherComponent } from './components/masters/configure-catalogue/detailvariety/detail-variety-father/detail-variety-father.component';
import { DetailVarietysComponent } from './components/masters/configure-catalogue/detailvariety/detail-varietys/detail-varietys.component';
import { DetailVarietyCreateComponent } from './components/masters/configure-catalogue/detailvariety/detail-variety-create/detail-variety-create.component';
import { DetailVarietyEditComponent } from './components/masters/configure-catalogue/detailvariety/detail-variety-edit/detail-variety-edit.component';
import { DetailVarietyShowComponent } from './components/masters/configure-catalogue/detailvariety/detail-variety-show/detail-variety-show.component';
import { DetailVarietyDeleteComponent } from './components/masters/configure-catalogue/detailvariety/detail-variety-delete/detail-variety-delete.component';

import { ApparatusInfrastructureFatherComponent } from './components/masters/configure-catalogue/apparatusinfrastructure/apparatus-infrastructure-father/apparatus-infrastructure-father.component';
import { ApparatusInfrastructuresComponent } from './components/masters/configure-catalogue/apparatusinfrastructure/apparatus-infrastructures/apparatus-infrastructures.component';
import { ApparatusInfrastructureCreateComponent } from './components/masters/configure-catalogue/apparatusinfrastructure/apparatus-infrastructure-create/apparatus-infrastructure-create.component';
import { ApparatusInfrastructureEditComponent } from './components/masters/configure-catalogue/apparatusinfrastructure/apparatus-infrastructure-edit/apparatus-infrastructure-edit.component';
import { ApparatusInfrastructureShowComponent } from './components/masters/configure-catalogue/apparatusinfrastructure/apparatus-infrastructure-show/apparatus-infrastructure-show.component';
import { ApparatusInfrastructureDeleteComponent } from './components/masters/configure-catalogue/apparatusinfrastructure/apparatus-infrastructure-delete/apparatus-infrastructure-delete.component';

import { CatalogueFatherComponent } from './components/masters/configure-catalogue/catalogue/catalogue-father/catalogue-father.component';
import { CataloguesComponent } from './components/masters/configure-catalogue/catalogue/catalogues/catalogues.component';
import { CatalogueCreateComponent } from './components/masters/configure-catalogue/catalogue/catalogue-create/catalogue-create.component';
import { CatalogueEditComponent } from './components/masters/configure-catalogue/catalogue/catalogue-edit/catalogue-edit.component';
import { CatalogueShowComponent } from './components/masters/configure-catalogue/catalogue/catalogue-show/catalogue-show.component';
import { CatalogueDeleteComponent } from './components/masters/configure-catalogue/catalogue/catalogue-delete/catalogue-delete.component';

import { IncidenceCreateComponent } from './components/masters/configure-incidence/incidence/incidence-create/incidence-create.component';
import { IncidenceShowComponent } from './components/masters/configure-incidence/incidence/incidence-show/incidence-show.component';
import { IncidenceEditComponent } from './components/masters/configure-incidence/incidence/incidence-edit/incidence-edit.component';
import { IncidenceDeleteComponent } from './components/masters/configure-incidence/incidence/incidence-delete/incidence-delete.component';
import { IncidenceFatherComponent } from './components/masters/configure-incidence/incidence/incidence-father/incidence-father.component';
import { IncidencesComponent } from './components/masters/configure-incidence/incidence/incidences/incidences.component';

import { TypeIncidenceCreateComponent } from './components/masters/configure-incidence/typeIncidence/type-incidence-create/type-incidence-create.component';
import { TypeIncidenceShowComponent } from './components/masters/configure-incidence/typeIncidence/type-incidence-show/type-incidence-show.component';
import { TypeIncidenceEditComponent } from './components/masters/configure-incidence/typeIncidence/type-incidence-edit/type-incidence-edit.component';
import { TypeIncidenceDeleteComponent } from './components/masters/configure-incidence/typeIncidence/type-incidence-delete/type-incidence-delete.component';
import { TypeIncidencesComponent } from './components/masters/configure-incidence/typeIncidence/type-incidences/type-incidences.component';
import { TypeIncidenceFatherComponent } from './components/masters/configure-incidence/typeIncidence/type-incidence-father/type-incidence-father.component';


// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [RedirectAuthGuard]},
	{path: 'login', component: LoginComponent, canActivate: [RedirectAuthGuard]},
	{path: 'loginWeit', component: LoginWeitComponent, canActivate: []},
	{path: 'logout', component: LogoutComponent},

	{path: 'dashboardClient', component: IndexClienteComponent, canActivate: [AuthGuard]},
	{path: 'dashboardLender', component: IndexLenderComponent, canActivate: [AuthGuard]},
	{path: 'dashboardManager', component: IndexManagerComponent, canActivate: [AuthGuard]},
	{path: 'dashboardAdmin', component: IndexAdminComponent, canActivate: [AuthGuard]},
	
	

	{path: 'profile', component: ProfileFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: ProfilesComponent},
			{path: 'create', component: ProfileCreateComponent},
			{path: 'edit/:id', component: ProfileEditComponent},
			{path: 'show/:id', component: ProfileShowComponent},
			{path: 'delete/:id', component: ProfileDeleteComponent},
		]
	},

	{path: 'system', component: SystemFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: SystemsComponent},
			{path: 'create', component: SystemCreateComponent},
			{path: 'edit/:id', component: SystemEditComponent},
			{path: 'show/:id', component: SystemShowComponent},
			{path: 'delete/:id', component: SystemDeleteComponent},
		]
	},

	{path: 'function', component: FunctionFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: FunctionsComponent},
			{path: 'create', component: FunctionCreateComponent},
			{path: 'edit/:id', component: FunctionEditComponent},
			{path: 'show/:id', component: FunctionShowComponent},
			{path: 'delete/:id', component: FunctionDeleteComponent},
		]
	},

	{path: 'permission', component: PermissionFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: PermissionsComponent},
			{path: 'create', component: PermissionCreateComponent},
			{path: 'edit/:id', component: PermissionEditComponent},
			{path: 'show/:id', component: PermissionShowComponent},
			{path: 'delete/:id', component: PermissionDeleteComponent},
		]
	},

	{path: 'role', component: RoleFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: RolesComponent},
			{path: 'create', component: RoleCreateComponent},
			{path: 'edit/:id', component: RoleEditComponent},
			{path: 'show/:id', component: RoleShowComponent},
			{path: 'delete/:id', component: RoleDeleteComponent},
		]
	},

	{path: 'assignFunction', component: AssignFunctionFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: AssignFunctionsComponent},
			{path: 'create', component: AssignFunctionCreateComponent},
			{path: 'edit/:id', component: AssignFunctionEditComponent},
			{path: 'show/:id', component: AssignFunctionShowComponent},
			{path: 'delete/:id', component: AssignFunctionDeleteComponent},
		]
	},

	{path: 'parameter', component: ParameterFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: ParametersComponent},
			{path: 'create', component: ParameterCreateComponent},
			{path: 'edit/:id', component: ParameterEditComponent},
			{path: 'show/:id', component: ParameterShowComponent},
			{path: 'delete/:id', component: ParameterDeleteComponent},
		]
	},

	{path: 'user', component: UserFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: UsersComponent},
			{path: 'create', component: UserCreateComponent},
			{path: 'edit/:id', component: UserEditComponent},
			{path: 'show/:id', component: UserShowComponent},
			{path: 'delete/:id', component: UserDeleteComponent},
		]
	},
	
	{path: 'category', component: CategoryFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: CategorysComponent},
			{path: 'create', component: CategoryCreateComponent},
			{path: 'edit/:id', component: CategoryEditComponent},
			{path: 'show/:id', component: CategoryShowComponent},
			{path: 'delete/:id', component: CategoryDeleteComponent},
		]
	},

	{path: 'subcategory', component: SubcategoryFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: SubcategorysComponent},
			{path: 'create', component: SubcategoryCreateComponent},
			{path: 'edit/:id', component: SubcategoryEditComponent},
			{path: 'show/:id', component: SubcategoryShowComponent},
			{path: 'delete/:id', component: SubcategoryDeleteComponent},
		]
	},

	{path: 'typeService', component: TypeServiceFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: TypeServicesComponent},
			{path: 'create', component: TypeServiceCreateComponent},
			{path: 'edit/:id', component: TypeServiceEditComponent},
			{path: 'show/:id', component: TypeServiceShowComponent},
			{path: 'delete/:id', component: TypeServiceDeleteComponent},
		]
    },

    {path: 'typeVariety', component: TypeVarietyFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: TypeVarietysComponent},
			{path: 'create', component: TypeVarietyCreateComponent},
			{path: 'edit/:id', component: TypeVarietyEditComponent},
			{path: 'show/:id', component: TypeVarietyShowComponent},
			{path: 'delete/:id', component: TypeVarietyDeleteComponent},
		]
	},

	{path: 'variety', component: VarietyFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: VarietysComponent},
			{path: 'create', component: VarietyCreateComponent},
			{path: 'edit/:id', component: VarietyEditComponent},
			{path: 'show/:id', component: VarietyShowComponent},
			{path: 'delete/:id', component: VarietyDeleteComponent},
		]
	},

	{path: 'detailVariety', component: DetailVarietyFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: DetailVarietysComponent},
			{path: 'create', component: DetailVarietyCreateComponent},
			{path: 'edit/:id', component: DetailVarietyEditComponent},
			{path: 'show/:id', component: DetailVarietyShowComponent},
			{path: 'delete/:id', component: DetailVarietyDeleteComponent},
		]
    },
	 
   {path: 'apparatusInfrastructure', component: ApparatusInfrastructureFatherComponent, canActivate: [AuthGuard],
	   children:
	    [
		    {path: '', component: ApparatusInfrastructuresComponent},
	        {path: 'create', component: ApparatusInfrastructureCreateComponent},
		    {path: 'edit/:id', component: ApparatusInfrastructureEditComponent},
		    {path: 'show/:id', component: ApparatusInfrastructureShowComponent},
		    {path: 'delete/:id', component: ApparatusInfrastructureDeleteComponent},
	    ]
	},

	{path: 'catalogue', component: CatalogueFatherComponent, canActivate: [AuthGuard],
		children:
		[
			{path: '', component: CataloguesComponent},
			{path: 'create', component: CatalogueCreateComponent},
			{path: 'edit/:id', component: CatalogueEditComponent},
			{path: 'show/:id', component: CatalogueShowComponent},
			{path: 'delete/:id', component: CatalogueDeleteComponent},
		]
	},
	
	{path: 'incidence', component: IncidenceFatherComponent, canActivate: [AuthGuard],
	children:
	[
		{path: '', component: IncidencesComponent},
		{path: 'create', component: IncidenceCreateComponent},
		{path: 'edit/:id', component: IncidenceEditComponent},
		{path: 'show/:id', component: IncidenceShowComponent},
		{path: 'delete/:id', component: IncidenceDeleteComponent},
	]
},

{path: 'typeIncidence', component: TypeIncidenceFatherComponent, canActivate: [AuthGuard],
children:
[
	{path: '', component: TypeIncidencesComponent},
	{path: 'create', component:TypeIncidenceCreateComponent},
	{path: 'edit/:id', component: TypeIncidenceEditComponent},
	{path: 'show/:id', component: TypeIncidenceShowComponent},
	{path: 'delete/:id', component: TypeIncidenceDeleteComponent},
]
},

	{path: 'block', component: BlockComponent},
	{path: '**', component: ErrorComponent},

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled' });