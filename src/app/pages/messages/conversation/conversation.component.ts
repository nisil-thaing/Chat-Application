import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';

import { debounce } from 'lodash';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  chatMessage: string;
  // chatActionStream$: Subscription;
  messages: any = [];
  /* userMessages: any = {
    id: '',
    data: []
  };
  parnerMessage: any = {
    id: '',
    data: []
  }; */

  onChangeMessage = debounce(() => {
    this._chatService.isTyping();
  }, 100);

  @Input() data: any = [];
  @Input() currentUser: any = {};
  @Input() selectedRoom: any = {};

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    // this.userMessages.id = this.currentUser._id;
  }

  onChatSubmit() {
    if (this.currentUser._id && this.selectedRoom._id && this.chatMessage) {

      if (this.data.length > 0 && this.data[this.data.length - 1].id === this.currentUser._id) {
        this.data[this.data.length - 1].data.push(this.chatMessage);
      } else {
        this.data.push({
          id: this.currentUser._id,
          data: [this.chatMessage]
        });
      }

      this._chatService.sendMsg({
        message: this.chatMessage,
        roomId: this.selectedRoom._id,
        user: this.currentUser._id
      });

      this.chatMessage = '';
    }
  }
}

