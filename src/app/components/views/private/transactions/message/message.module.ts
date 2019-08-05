import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../core/ui/material.module';
import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { MessageShowComponent } from './message-show/message-show.component';
import { MessageDeleteComponent } from './message-delete/message-delete.component';

@NgModule({
  declarations: [
	MessageComponent,
	MessagesComponent,
	MessageCreateComponent,
	MessageEditComponent,
	MessageShowComponent,
	MessageDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
