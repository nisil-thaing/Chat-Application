import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/scan';

import { ChatService } from '../../services/chat/chat.service';
import { ChatRoom, ChatMessage } from '../../models';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  // get current user, temporary by local storage
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  chatRooms: Array<ChatRoom>;
  selectedRoom: any = {};
  joinRoomActionStream$: Subscription;
  isShowAddRoomInput: boolean;
  newRoomName: string;
  messages: any = {};

  @ViewChild('conversationContent') private conversationContent: any;

  constructor(
    private _route: ActivatedRoute,
    private _chatService: ChatService
  ) { }

  ngOnInit() {
    this._route.data.subscribe((data: { chatRooms: Array<ChatRoom> }) => {
      this.chatRooms = data.chatRooms;
    });

    this.joinRoomActionStream$ = this._chatService.messages.subscribe(res => {
      // temp - check message event
      if (this.currentUser._id && res.room && res.body) {
        this.updateChatMessages({ id: res.author._id, name: res.author.name}, res.room, res.body);
      }
    });
  }

  ngOnDestroy() {
    if (this.joinRoomActionStream$ && this.joinRoomActionStream$.unsubscribe) {
      this.joinRoomActionStream$.unsubscribe();
    }
  }

  assignInitRoomMessages(pastMessages: Array<ChatMessage>, roomId: string) {
    if (!roomId || !pastMessages || pastMessages.length === 0) {
      this.conversationContent.isLoadingData = false;
      return;
    }

    pastMessages.forEach(msg => {
      const userId = msg.author._id;

      if (this.messages[roomId] && this.messages[roomId].length > 0 && this.messages[roomId][0].user.id === userId) {
        this.messages[roomId][0].data.unshift(msg.body);
      } else {
        if (!this.messages[roomId]) {
          this.messages[roomId] = [];
        }

        this.messages[roomId].unshift({
          user: {
            id: userId,
            name: msg.author.name
          },
          data: [msg.body]
        });
      }
    });

    this.conversationContent.isLoadingData = false;
    this.scrollToConversationBottom();

    return;
  }

  onChatSubmit(e) {
    if (!e.message) {
      return;
    }

    this.updateChatMessages({ id: this.currentUser._id, name: this.currentUser.name }, this.selectedRoom._id, e.message);

    this._chatService.sendMsg({
      message: e.message,
      roomId: this.selectedRoom._id,
      user: this.currentUser._id
    });

    return;
  }

  onJoinRoom(e) {
    if (this.currentUser._id && e.room && e.room._id) {
      if (!this.messages[e.room._id]) {
        this.conversationContent.isLoadingData = true;

        const pastMessages$: Observable<Array<ChatMessage>> = this._chatService.fetchPastMessages({ roomId: e.room._id });

        pastMessages$.subscribe((pastMessages: Array<ChatMessage>) => {
          this.assignInitRoomMessages(pastMessages, e.room._id);
        });
      }

      this.selectedRoom = e.room;
      this._chatService.joinRoom({ user: this.currentUser._id, roomId: e.room._id });

      this.scrollToConversationBottom();
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

  updateChatMessages(user: { id: string, name: string }, roomId, message) {
    if (!this.messages[roomId]) {
      this.messages[roomId] = [];
    }

    const currentRoomMessagesLength = this.messages[roomId].length;

    if (currentRoomMessagesLength > 0 && this.messages[roomId][currentRoomMessagesLength - 1].user.id === user.id) {
      this.messages[roomId][currentRoomMessagesLength - 1].data.push(message);
    } else {
      this.messages[roomId].push({
        user: user,
        data: [message]
      });
    }

    this.scrollToConversationBottom();
  }

  scrollToConversationBottom() {
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

