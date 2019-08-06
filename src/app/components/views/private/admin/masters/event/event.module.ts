import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventShowComponent } from './event-show/event-show.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';

@NgModule({
  declarations: [
	EventComponent,
	EventsComponent,
	EventCreateComponent,
	EventEditComponent,
	EventShowComponent,
	EventDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EventRoutingModule
  ]
})
export class EventModule { }
