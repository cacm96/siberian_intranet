import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { CalendarCreateComponent } from './calendar-create/calendar-create.component';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import { CalendarShowComponent } from './calendar-show/calendar-show.component';
import { CalendarDeleteComponent } from './calendar-delete/calendar-delete.component';

@NgModule({
  declarations: [
	CalendarComponent,
	CalendarsComponent,
	CalendarCreateComponent,
	CalendarEditComponent,
	CalendarShowComponent,
	CalendarDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
