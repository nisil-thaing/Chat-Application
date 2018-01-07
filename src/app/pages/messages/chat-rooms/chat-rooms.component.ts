import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatService } from '../../../services/chat/chat.service';
import { ChatRoom } from '../../../models';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.scss']
})
export class ChatRoomsComponent {
  @Input() selectedRoom: any;
  @Input() chatRooms: Array<ChatRoom>;
  @Output() joinRoom: EventEmitter<any>;
  @Output() addNewRoom: EventEmitter<any>;

  constructor(private _chatService: ChatService) {
    this.joinRoom = new EventEmitter();
    this.addNewRoom = new EventEmitter();
  }

  onAddNewRoom(e) {
    e.stopPropagation();

    this.addNewRoom.emit({ event: e });
  }
}
