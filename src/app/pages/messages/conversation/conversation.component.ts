import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    this._chatService.messages.subscribe(msg => {
      console.log(msg);
    });
  }

  onChatSubmit() {
    this._chatService.sendMsg('Something');
  }
}

