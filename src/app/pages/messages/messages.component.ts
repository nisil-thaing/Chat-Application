import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/scan';

import { ChatService } from '../../services/chat/chat.service';
import { ChatRoom } from '../../models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  // get current user, temporary by local storage
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  chatRooms$: Observable<Array<ChatRoom>> = this._chatService.fetchRooms();
  chatRooms: Array<ChatRoom>;
  selectedRoom: any = {};
  joinRoomActionStream$: Subscription;
  isShowAddRoomInput: boolean;
  newRoomName: string;
  messages: any = [];

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    this.joinRoomActionStream$ = this._chatService.messages.subscribe(res => console.log(res));
    this.chatRooms$.subscribe(res => this.chatRooms = res);
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

  onAddNewRoom(e) {
    this.isShowAddRoomInput = true;
  }

  onSaveNewRoom() {
    if (this.newRoomName) {
      this._chatService.saveNewRoom({ name: this.newRoomName })
        .subscribe((res: ChatRoom) => {
          this.chatRooms.push(res);
          this.selectedRoom = res;
          this.newRoomName = '';
          this.isShowAddRoomInput = false;
        });
    }
  }
}

