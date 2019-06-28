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
import { LoginWeitComponent } from './components/auth/login-weit/login-weit.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { BlockComponent } from './components/block/block.component';

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


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    LoginWeitComponent,
    LogoutComponent,

    NavbarComponent,
    SidebarComponent,
    FooterComponent,

    ErrorComponent,
    BlockComponent,

    SearchUserPipe,
    SearchFunctionPipe,

    ProfileFatherComponent,
    ProfilesComponent,
    ProfileCreateComponent,
    ProfileEditComponent,
    ProfileShowComponent,
    ProfileDeleteComponent,

    IndexManagerComponent,
    IndexAdminComponent,
    IndexLenderComponent,
    IndexClienteComponent,

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
    PermissionFatherComponent,
    PermissionsComponent,
    PermissionCreateComponent,
    PermissionEditComponent,
    PermissionShowComponent,
    PermissionDeleteComponent,
    RoleFatherComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleEditComponent,
    RoleShowComponent,
    RoleDeleteComponent,
    AssignFunctionFatherComponent,
    AssignFunctionsComponent,
    AssignFunctionCreateComponent,
    AssignFunctionEditComponent,
    AssignFunctionShowComponent,
    AssignFunctionDeleteComponent,
    ParameterFatherComponent,
    ParametersComponent,
    ParameterCreateComponent,
    ParameterEditComponent,
    ParameterShowComponent,
    ParameterDeleteComponent,

    UserFatherComponent,
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserShowComponent,
    UserDeleteComponent,

    CategoryFatherComponent,
    CategorysComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryShowComponent,
    CategoryDeleteComponent,
    SubcategoryFatherComponent,
    SubcategorysComponent,
    SubcategoryCreateComponent,
    SubcategoryEditComponent,
    SubcategoryShowComponent,
    SubcategoryDeleteComponent,
    TypeServiceFatherComponent,
    TypeServicesComponent,
    TypeServiceCreateComponent,
    TypeServiceEditComponent,
    TypeServiceShowComponent,
    TypeServiceDeleteComponent,
    TypeVarietyFatherComponent,
    TypeVarietysComponent,
    TypeVarietyCreateComponent,
    TypeVarietyEditComponent,
    TypeVarietyShowComponent,
    TypeVarietyDeleteComponent,
    VarietyFatherComponent,
    VarietysComponent,
    VarietyCreateComponent,
    VarietyEditComponent,
    VarietyShowComponent,
    VarietyDeleteComponent,
    DetailVarietyFatherComponent,
    DetailVarietysComponent,
    DetailVarietyCreateComponent,
    DetailVarietyEditComponent,
    DetailVarietyShowComponent,
    DetailVarietyDeleteComponent,
    ApparatusInfrastructureFatherComponent,
    ApparatusInfrastructuresComponent,
    ApparatusInfrastructureCreateComponent,
    ApparatusInfrastructureEditComponent,
    ApparatusInfrastructureShowComponent,
    ApparatusInfrastructureDeleteComponent,
    CatalogueFatherComponent,
    CataloguesComponent,
    CatalogueCreateComponent,
    CatalogueEditComponent,
    CatalogueShowComponent,
    CatalogueDeleteComponent,

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
