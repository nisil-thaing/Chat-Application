import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  // get current user, temporary by local storage
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  selectedRoom: any = {};
  joinRoomActionStream$: Subscription;

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    this.joinRoomActionStream$ = this._chatService.messages.subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    if (this.joinRoomActionStream$ && this.joinRoomActionStream$.unsubscribe) {
      this.joinRoomActionStream$.unsubscribe();
    }
  }

  onJoinRoom(e) {
    if (this.currentUser._id && e.room && e.room._id) {
      this.selectedRoom = e.room;
      this._chatService.joinRoom({ user: this.currentUser._id, roomId: e.room._id });
    }
  }
}

