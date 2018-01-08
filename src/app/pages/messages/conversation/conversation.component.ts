import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';

import { debounce } from 'lodash';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  chatMessage: string;
  messages: any = [];
  isLoadingData: boolean;

  onChangeMessage = debounce(() => {
    this._chatService.isTyping();
  }, 100);

  @Input() data: any = [];
  @Input() currentUser: any = {};
  @Input() selectedRoom: any = {};
  @Output() chatSubmit: EventEmitter<any>;

  constructor(
    private _elRef: ElementRef,
    private _chatService: ChatService
  ) {
    this.chatSubmit = new EventEmitter();
  }

  onChatSubmit() {
    if (this.currentUser._id && this.selectedRoom._id && this.chatMessage) {
      this.chatSubmit.emit({ message: this.chatMessage });

      this.chatMessage = '';
    }
  }
}

