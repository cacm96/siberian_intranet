import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarCreateComponent } from './calendar-create/calendar-create.component';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import { CalendarShowComponent } from './calendar-show/calendar-show.component';
import { CalendarDeleteComponent } from './calendar-delete/calendar-delete.component';

const routes: Routes = [

	{path: '', component: CalendarComponent, canActivate: [],
		children:
		[
			{path: '', component: CalendarsComponent},
			{path: 'create', component: CalendarCreateComponent},
			{path: 'edit/:id', component: CalendarEditComponent},
			{path: 'show/:id', component: CalendarShowComponent},
			{path: 'delete/:id', component: CalendarDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class CalendarRoutingModule { }
