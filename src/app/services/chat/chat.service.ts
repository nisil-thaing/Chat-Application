import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { WebsocketService } from '../web-socket/web-socket.service';
import { Observable } from 'rxjs/Observable';
import { ChatRoom } from '../../models';
import { HTTP_STATUS } from '../../config/http-client.config';

@Injectable()
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(
    private _wsService: WebsocketService,
    private _httpClient: HttpClient
  ) {
    this.messages = <Subject<any>>_wsService
      .connect()
      .map((response: any): any => {
        return response;
      });
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

  fetchRooms(): Observable<Array<ChatRoom>> {
    return this._httpClient.get('/rooms', { observe: 'response' })
      .map((response: any) => {
        if (response.status !== HTTP_STATUS.SUCCESS) {
          return [];
        }

        return response.body;
      });
  }
}
