import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhoneTypeComponent } from './phone-type.component';
import { PhoneTypesComponent } from './phone-types/phone-types.component';
import { PhoneTypeCreateComponent } from './phone-type-create/phone-type-create.component';
import { PhoneTypeEditComponent } from './phone-type-edit/phone-type-edit.component';
import { PhoneTypeShowComponent } from './phone-type-show/phone-type-show.component';
import { PhoneTypeDeleteComponent } from './phone-type-delete/phone-type-delete.component';

const routes: Routes = [

	{path: '', component: PhoneTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: PhoneTypesComponent},
			{path: 'create', component: PhoneTypeCreateComponent},
			{path: 'edit/:id', component: PhoneTypeEditComponent},
			{path: 'show/:id', component: PhoneTypeShowComponent},
			{path: 'delete/:id', component: PhoneTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PhoneTypeRoutingModule { }
