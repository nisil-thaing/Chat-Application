import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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
  sendMsg(data: { user: string, roomId: string, message: string }) {
    this.messages.next({ event: 'message', data: data });
  }

  joinRoom(data: { roomId: string, user: string }) {
    this.messages.next({ event: 'join', data: data });
  }

  isTyping() {
    this.messages.next({ event: 'typping', data: {} });
  }

  fetchRooms(): Observable<Array<ChatRoom>> {
    return this._httpClient.get('/rooms', { observe: 'response' })
      .map((response: HttpResponse<Array<ChatRoom>>) => {
        if (response.status !== HTTP_STATUS.SUCCESS) {
          return [];
        }

        return response.body;
      });
  }

  saveNewRoom(params: { name: string }): Observable<ChatRoom> {
    return this._httpClient.post('/rooms', params, { observe: 'response' })
      .map((response: HttpResponse<ChatRoom>) => {
        if (response.status !== HTTP_STATUS.SUCCESS) {
          return null;
        }

        return response.body;
      });
  }
}
