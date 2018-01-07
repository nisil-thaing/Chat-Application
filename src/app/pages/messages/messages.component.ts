import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  selectedRoom: any = {};

  onJoinRoom(e) {
    if (e.room && e.room._id) {
      this.selectedRoom = e.room;
    }
  }
}

