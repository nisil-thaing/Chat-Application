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

  @Input() selectedRoom: any = {};

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
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
    if (this.selectedRoom._id && this.chatMessage) {
      this._chatService.sendMsg({
        message: this.chatMessage,
        roomId: this.selectedRoom._id
      });
      console.log(this.chatMessage);
      this.chatMessage = '';
    }
  }
}

