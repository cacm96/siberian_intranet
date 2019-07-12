import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyShowComponent } from './company-show/company-show.component';
import { CompanyDeleteComponent } from './company-delete/company-delete.component';

const routes: Routes = [

	{path: '', component: CompanyComponent, canActivate: [],
		children:
		[
			{path: '', component: CompaniesComponent},
			{path: 'create', component: CompanyCreateComponent},
			{path: 'edit/:id', component: CompanyEditComponent},
			{path: 'show/:id', component: CompanyShowComponent},
			{path: 'delete/:id', component: CompanyDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CompanyRoutingModule { }