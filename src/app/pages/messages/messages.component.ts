import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  // get current user, temporary by local storage
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  selectedRoom: any = {};

  onJoinRoom(e) {
    if (e.room && e.room._id) {
      this.selectedRoom = e.room;
    }
  }
}

