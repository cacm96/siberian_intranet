import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VarietyEquipinfrasComponent } from './variety-equipinfras.component';
import { VarietysEquipinfrasComponent } from './varietys-equipinfras/varietys-equipinfras.component';
import { VarietyEquipinfrasCreateComponent } from './variety-equipinfras-create/variety-equipinfras-create.component';
import { VarietyEquipinfrasEditComponent } from './variety-equipinfras-edit/variety-equipinfras-edit.component';
import { VarietyEquipinfrasShowComponent } from './variety-equipinfras-show/variety-equipinfras-show.component';
import { VarietyEquipinfrasDeleteComponent } from './variety-equipinfras-delete/variety-equipinfras-delete.component';

const routes: Routes = [

	{path: '', component: VarietyEquipinfrasComponent, canActivate: [],
		children:
		[
			{path: '', component: VarietysEquipinfrasComponent},
			{path: 'create', component: VarietyEquipinfrasCreateComponent},
			{path: 'edit/:id', component: VarietyEquipinfrasEditComponent},
			{path: 'show/:id', component: VarietyEquipinfrasShowComponent},
			{path: 'delete/:id', component: VarietyEquipinfrasDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class VarietyEquipinfrasRoutingModule { }
