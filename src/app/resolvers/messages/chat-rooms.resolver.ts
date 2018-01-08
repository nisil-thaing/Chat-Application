import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ChatService } from '../../services/chat/chat.service';
import { ChatRoom } from '../../models';

@Injectable()
export class ChatRoomsResolver implements Resolve<any> {
  constructor(private _chatService: ChatService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<ChatRoom>> {
    return this._chatService.fetchRooms();
  }
}
