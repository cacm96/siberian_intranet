import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { RedirectAuthGuard } from './redirect-auth.guard';

import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

import { UserFatherComponent } from './components/masters/configure-user/user/user-father/user-father.component';
import { UsersComponent } from './components/masters/configure-user/user/users/users.component';
import { UserCreateComponent } from './components/masters/configure-user/user/user-create/user-create.component';
import { UserEditComponent } from './components/masters/configure-user/user/user-edit/user-edit.component';
import { UserShowComponent } from './components/masters/configure-user/user/user-show/user-show.component';
import { UserDeleteComponent } from './components/masters/configure-user/user/user-delete/user-delete.component';

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

import { IndexManagerComponent } from './components/dashboard/manager/index-manager/index-manager.component';
import { IndexAdminComponent } from './components/dashboard/admin/index-admin/index-admin.component';
import { IndexLenderComponent } from './components/dashboard/lender/index-lender/index-lender.component';
import { IndexClienteComponent } from './components/dashboard/client/index-cliente/index-cliente.component';

import { CategoryFatherComponent } from './components/masters/configure-catalogue/category-father/category-father.component';
import { CategorysComponent } from './components/masters/configure-catalogue/categorys/categorys.component';
import { CategoryCreateComponent } from './components/masters/configure-catalogue/category-create/category-create.component';
import { CategoryEditComponent } from './components/masters/configure-catalogue/category-edit/category-edit.component';
import { CategoryShowComponent } from './components/masters/configure-catalogue/category-show/category-show.component';
import { CategoryDeleteComponent } from './components/masters/configure-catalogue/category-delete/category-delete.component';

import { SubcategoryFatherComponent } from './components/masters/configure-catalogue/subcategory-father/subcategory-father.component';
import { SubcategorysComponent } from './components/masters/configure-catalogue/subcategorys/subcategorys.component';
import { SubcategoryCreateComponent } from './components/masters/configure-catalogue/subcategory-create/subcategory-create.component';
import { SubcategoryEditComponent } from './components/masters/configure-catalogue/subcategory-edit/subcategory-edit.component';
import { SubcategoryShowComponent } from './components/masters/configure-catalogue/subcategory-show/subcategory-show.component';
import { SubcategoryDeleteComponent } from './components/masters/configure-catalogue/subcategory-delete/subcategory-delete.component';

import { VarietyFatherComponent } from './components/masters/configure-catalogue/variety-father/variety-father.component';
import { VarietysComponent } from './components/masters/configure-catalogue/varietys/varietys.component';
import { VarietyCreateComponent } from './components/masters/configure-catalogue/variety-create/variety-create.component';
import { VarietyEditComponent } from './components/masters/configure-catalogue/variety-edit/variety-edit.component';
import { VarietyShowComponent } from './components/masters/configure-catalogue/variety-show/variety-show.component';
import { VarietyDeleteComponent } from './components/masters/configure-catalogue/variety-delete/variety-delete.component';

import { CatalogueFatherComponent } from './components/masters/configure-catalogue/catalogue-father/catalogue-father.component';
import { CataloguesComponent } from './components/masters/configure-catalogue/catalogues/catalogues.component';
import { CatalogueCreateComponent } from './components/masters/configure-catalogue/catalogue-create/catalogue-create.component';
import { CatalogueEditComponent } from './components/masters/configure-catalogue/catalogue-edit/catalogue-edit.component';
import { CatalogueShowComponent } from './components/masters/configure-catalogue/catalogue-show/catalogue-show.component';
import { CatalogueDeleteComponent } from './components/masters/configure-catalogue/catalogue-delete/catalogue-delete.component';

import { TypeVarietyFatherComponent } from './components/masters/configure-catalogue/type-variety-father/type-variety-father.component';
import { TypeVarietysComponent } from './components/masters/configure-catalogue/type-varietys/type-varietys.component';
import { TypeVarietyCreateComponent } from './components/masters/configure-catalogue/type-variety-create/type-variety-create.component';
import { TypeVarietyEditComponent } from './components/masters/configure-catalogue/type-variety-edit/type-variety-edit.component';
import { TypeVarietyShowComponent } from './components/masters/configure-catalogue/type-variety-show/type-variety-show.component';
import { TypeVarietyDeleteComponent } from './components/masters/configure-catalogue/type-variety-delete/type-variety-delete.component';

import { DetailVarietyFatherComponent } from './components/masters/configure-catalogue/detail-variety-father/detail-variety-father.component';
import { DetailVarietysComponent } from './components/masters/configure-catalogue/detail-varietys/detail-varietys.component';
import { DetailVarietyCreateComponent } from './components/masters/configure-catalogue/detail-variety-create/detail-variety-create.component';
import { DetailVarietyEditComponent } from './components/masters/configure-catalogue/detail-variety-edit/detail-variety-edit.component';
import { DetailVarietyShowComponent } from './components/masters/configure-catalogue/detail-variety-show/detail-variety-show.component';
import { DetailVarietyDeleteComponent } from './components/masters/configure-catalogue/detail-variety-delete/detail-variety-delete.component';

import { ApparatusInfrastructureFatherComponent } from './components/masters/configure-catalogue/apparatus-infrastructure-father/apparatus-infrastructure-father.component';
import { ApparatusInfrastructuresComponent } from './components/masters/configure-catalogue/apparatus-infrastructures/apparatus-infrastructures.component';
import { ApparatusInfrastructureCreateComponent } from './components/masters/configure-catalogue/apparatus-infrastructure-create/apparatus-infrastructure-create.component';
import { ApparatusInfrastructureEditComponent } from './components/masters/configure-catalogue/apparatus-infrastructure-edit/apparatus-infrastructure-edit.component';
import { ApparatusInfrastructureShowComponent } from './components/masters/configure-catalogue/apparatus-infrastructure-show/apparatus-infrastructure-show.component';
import { ApparatusInfrastructureDeleteComponent } from './components/masters/configure-catalogue/apparatus-infrastructure-delete/apparatus-infrastructure-delete.component';

import { TypeServiceFatherComponent } from './components/masters/configure-catalogue/type-service-father/type-service-father.component';
import { TypeServicesComponent } from './components/masters/configure-catalogue/type-services/type-services.component';
import { TypeServiceCreateComponent } from './components/masters/configure-catalogue/type-service-create/type-service-create.component';
import { TypeServiceEditComponent } from './components/masters/configure-catalogue/type-service-edit/type-service-edit.component';
import { TypeServiceShowComponent } from './components/masters/configure-catalogue/type-service-show/type-service-show.component';
import { TypeServiceDeleteComponent } from './components/masters/configure-catalogue/type-service-delete/type-service-delete.component';

// Array de rutas
const appRoutes: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [RedirectAuthGuard]},
	{path: 'login', component: LoginComponent, canActivate: [RedirectAuthGuard]},
	{path: 'logout', component: LogoutComponent},
	
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

	{path: 'dashboardClient', component: IndexClienteComponent, canActivate: [AuthGuard]},
	{path: 'dashboardLender', component: IndexLenderComponent, canActivate: [AuthGuard]},
	{path: 'dashboardManager', component: IndexManagerComponent, canActivate: [AuthGuard]},
	{path: 'dashboardAdmin', component: IndexAdminComponent, canActivate: [AuthGuard]},


	

	{path: 'block', component: BlockComponent},
	{path: '**', component: ErrorComponent},

];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled' });