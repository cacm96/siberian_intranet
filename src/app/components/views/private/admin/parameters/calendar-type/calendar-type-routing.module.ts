import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarTypeComponent } from './calendar-type.component';
import { CalendarTypesComponent } from './calendar-types/calendar-types.component';
import { CalendarTypeCreateComponent } from './calendar-type-create/calendar-type-create.component';
import { CalendarTypeEditComponent } from './calendar-type-edit/calendar-type-edit.component';
import { CalendarTypeShowComponent } from './calendar-type-show/calendar-type-show.component';
import { CalendarTypeDeleteComponent } from './calendar-type-delete/calendar-type-delete.component';

const routes: Routes = [

	{path: '', component: CalendarTypeComponent, canActivate: [],
		children:
		[
			{path: '', component: CalendarTypesComponent},
			{path: 'create', component: CalendarTypeCreateComponent},
			{path: 'edit/:id', component: CalendarTypeEditComponent},
			{path: 'show/:id', component: CalendarTypeShowComponent},
			{path: 'delete/:id', component: CalendarTypeDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CalendarTypeRoutingModule { }
