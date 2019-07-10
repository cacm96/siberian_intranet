import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhoneComponent } from './phone.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneCreateComponent } from './phone-create/phone-create.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { PhoneShowComponent } from './phone-show/phone-show.component';
import { PhoneDeleteComponent } from './phone-delete/phone-delete.component';

const routes: Routes = [

	{path: '', component: PhoneComponent, canActivate: [],
		children:
		[
			{path: '', component: PhonesComponent},
			{path: 'create', component: PhoneCreateComponent},
			{path: 'edit/:id', component: PhoneEditComponent},
			{path: 'show/:id', component: PhoneShowComponent},
			{path: 'delete/:id', component: PhoneDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PhoneRoutingModule { }
