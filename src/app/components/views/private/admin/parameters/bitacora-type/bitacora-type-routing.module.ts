import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BitacoraTypeComponent } from './bitacora-type.component';
import { BitacoraTypesComponent } from './bitacora-types/bitacora-types.component';
import { BitacoraTypeCreateComponent } from './bitacora-type-create/bitacora-type-create.component';
import { BitacoraTypeEditComponent } from './bitacora-type-edit/bitacora-type-edit.component';
import { BitacoraTypeShowComponent } from './bitacora-type-show/bitacora-type-show.component';
import { BitacoraTypeDeleteComponent } from './bitacora-type-delete/bitacora-type-delete.component';

const routes: Routes = [

	{path: '', component: BitacoraTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: BitacoraTypesComponent},
			{path: 'create', component: BitacoraTypeCreateComponent},
			{path: 'edit/:id', component: BitacoraTypeEditComponent},
			{path: 'show/:id', component: BitacoraTypeShowComponent},
			{path: 'delete/:id', component: BitacoraTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class BitacoraTypeRoutingModule { }
