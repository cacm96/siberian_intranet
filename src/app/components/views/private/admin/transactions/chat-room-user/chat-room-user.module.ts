import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../../core/ui/material.module';
import { ChatRoomUserRoutingModule } from './chat-room-user-routing.module';
import { ChatRoomUserComponent } from './chat-room-user.component';
import { ChatRoomUsersComponent } from './chat-room-users/chat-room-users.component';
import { ChatRoomUserCreateComponent } from './chat-room-user-create/chat-room-user-create.component';
import { ChatRoomUserEditComponent } from './chat-room-user-edit/chat-room-user-edit.component';
import { ChatRoomUserShowComponent } from './chat-room-user-show/chat-room-user-show.component';
import { ChatRoomUserDeleteComponent } from './chat-room-user-delete/chat-room-user-delete.component';

@NgModule({
  declarations: [
	ChatRoomUserComponent,
	ChatRoomUsersComponent,
	ChatRoomUserCreateComponent,
	ChatRoomUserEditComponent,
	ChatRoomUserShowComponent,
	ChatRoomUserDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChatRoomUserRoutingModule
  ]
})
export class ChatRoomUserModule { }
