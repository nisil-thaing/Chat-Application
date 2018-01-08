import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
  messages: any = {};

  @ViewChild('conversationContent') private conversationContent: any;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this.joinRoomActionStream$ = this._chatService.messages.subscribe(res => {
      // temp - check message event
      if (this.currentUser._id && res.room && res.body) {
        this.updateChatMessages(res.author._id, res.room, res.body);
      }
    });

    this.chatRooms$.subscribe(res => this.chatRooms = res);
  }

  ngOnDestroy() {
    if (this.joinRoomActionStream$ && this.joinRoomActionStream$.unsubscribe) {
      this.joinRoomActionStream$.unsubscribe();
    }
  }

  onChatSubmit(e) {
    if (!e.message) {
      return;
    }

    this.updateChatMessages(this.currentUser._id, this.selectedRoom._id, e.message);

    this._chatService.sendMsg({
      message: e.message,
      roomId: this.selectedRoom._id,
      user: this.currentUser._id
    });

    return;
  }

  onJoinRoom(e) {
    if (this.currentUser._id && e.room && e.room._id) {
      this.selectedRoom = e.room;
      this._chatService.joinRoom({ user: this.currentUser._id, roomId: e.room._id });

      if (!this.messages[this.selectedRoom._id]) {
        this.messages[this.selectedRoom._id] = [];
      }
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

  updateChatMessages(userId, roomId, message) {
    if (!this.messages[roomId]) {
      this.messages[roomId] = [];
    }

    const currentRoomMessagesLength = this.messages[roomId].length;

    if (currentRoomMessagesLength > 0 && this.messages[roomId][currentRoomMessagesLength - 1].id === userId) {
      this.messages[roomId][currentRoomMessagesLength - 1].data.push(message);
    } else {
      this.messages[roomId].push({
        id: userId,
        data: [message]
      });
    }

    setTimeout(() => {
      if (this.conversationContent
        && this.conversationContent._elRef
        && this.conversationContent._elRef.nativeElement
        && this.conversationContent._elRef.nativeElement.querySelector) {
        const conversationContent = this.conversationContent._elRef.nativeElement.querySelector('#conversation-content');

        if (conversationContent) {
          conversationContent.scrollTo(0, conversationContent.scrollHeight);
        }
      }
    });
  }
}

