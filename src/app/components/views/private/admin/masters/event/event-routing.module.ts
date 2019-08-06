import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event.component';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventShowComponent } from './event-show/event-show.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';

const routes: Routes = [

	{path: '', component: EventComponent, canActivate: [],
		children:
		[
			{path: '', component: EventsComponent},
			{path: 'create', component: EventCreateComponent},
			{path: 'edit/:id', component: EventEditComponent},
			{path: 'show/:id', component: EventShowComponent},
			{path: 'delete/:id', component: EventDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class EventRoutingModule { }
