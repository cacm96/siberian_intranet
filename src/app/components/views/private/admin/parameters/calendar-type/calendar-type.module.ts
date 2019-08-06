import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { CalendarTypeRoutingModule } from './calendar-type-routing.module';
import { CalendarTypeComponent } from './calendar-type.component';
import { CalendarTypesComponent } from './calendar-types/calendar-types.component';
import { CalendarTypeCreateComponent } from './calendar-type-create/calendar-type-create.component';
import { CalendarTypeEditComponent } from './calendar-type-edit/calendar-type-edit.component';
import { CalendarTypeShowComponent } from './calendar-type-show/calendar-type-show.component';
import { CalendarTypeDeleteComponent } from './calendar-type-delete/calendar-type-delete.component';

@NgModule({
  declarations: [
	CalendarTypeComponent,
	CalendarTypesComponent,
	CalendarTypeCreateComponent,
	CalendarTypeEditComponent,
	CalendarTypeShowComponent,
	CalendarTypeDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalendarTypeRoutingModule
  ]
})
export class CalendarTypeModule { }
