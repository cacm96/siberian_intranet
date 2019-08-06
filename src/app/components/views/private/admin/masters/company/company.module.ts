import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyShowComponent } from './company-show/company-show.component';
import { CompanyDeleteComponent } from './company-delete/company-delete.component';

@NgModule({
  declarations: [
	CompanyComponent,
	CompaniesComponent,
	CompanyCreateComponent,
	CompanyEditComponent,
	CompanyShowComponent,
	CompanyDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
