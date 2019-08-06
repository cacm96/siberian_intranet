import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { MessageShowComponent } from './message-show/message-show.component';
import { MessageDeleteComponent } from './message-delete/message-delete.component';

const routes: Routes = [

	{path: '', component: MessageComponent, canActivate: [],
		children:
		[
			{path: '', component: MessagesComponent},
			{path: 'create', component: MessageCreateComponent},
			{path: 'edit/:id', component: MessageEditComponent},
			{path: 'show/:id', component: MessageShowComponent},
			{path: 'delete/:id', component: MessageDeleteComponent}
		]
	},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MessageRoutingModule { }
