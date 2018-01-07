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
  chatRooms$: Observable<Array<ChatRoom>> = this._chatService.fetchRooms();

  @Input() selectedRoom: any;
  @Output() joinRoom: EventEmitter<any>;

  constructor(private _chatService: ChatService) {
    this.joinRoom = new EventEmitter();
  }
}
