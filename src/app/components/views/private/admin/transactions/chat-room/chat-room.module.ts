import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ChatRoomRoutingModule } from './chat-room-routing.module';
import { ChatRoomComponent } from './chat-room.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { ChatRoomCreateComponent } from './chat-room-create/chat-room-create.component';
import { ChatRoomEditComponent } from './chat-room-edit/chat-room-edit.component';
import { ChatRoomShowComponent } from './chat-room-show/chat-room-show.component';
import { ChatRoomDeleteComponent } from './chat-room-delete/chat-room-delete.component';

@NgModule({
  declarations: [
	ChatRoomComponent,
	ChatRoomsComponent,
	ChatRoomCreateComponent,
	ChatRoomEditComponent,
	ChatRoomShowComponent,
	ChatRoomDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChatRoomRoutingModule
  ]
})
export class ChatRoomModule { }
