import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnDestroy {
  chatMessage: string;
  chatActionStream$: Subscription;
  messages: any = [];
  userMessages: any = {
    id: '',
    data: []
  };
  parnerMessage: any = {
    id: '',
    data: []
  };

  @Input() currentUser: any = {};
  @Input() selectedRoom: any = {};

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    this.userMessages.id = this.currentUser._id;

    this.chatActionStream$ = this._chatService.messages.subscribe(msg => {
      console.log(msg);
    });
  }

  ngOnDestroy() {
    if (this.chatActionStream$ && this.chatActionStream$.unsubscribe) {
      this.chatActionStream$.unsubscribe();
    }
  }

  onChatSubmit() {
    if (this.currentUser._id && this.selectedRoom._id && this.chatMessage) {

      if (this.messages.length > 0 && this.messages[this.messages.length - 1].id === this.currentUser._id) {
        this.messages[this.messages.length - 1].data.push(this.chatMessage);
      } else {
        this.messages.push({
          id: this.currentUser._id,
          data: [this.chatMessage]
        });
      }

      this._chatService.sendMsg({
        message: this.chatMessage,
        roomId: this.selectedRoom._id,
        userId: this.currentUser._id
      });

      this.chatMessage = '';
    }
  }
}

