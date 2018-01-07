import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// import * as Rx from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import { getApiUrl } from '../../config/http-client.config';

@Injectable()
export class WebsocketService {

  // Our socket connection
  private socket;

  constructor() { }

  connect(): Subject<MessageEvent> {
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    this.socket = io(getApiUrl());

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    const observable = new Observable(obs => {
      this.socket.on('newMessage', data => {
        console.log('Received message from Websocket Server');
        obs.next(data);
      });

      this.socket.on('join', data => {
        console.log('Someone join room');
        obs.next(data);
      });

      this.socket.on('typping', data => {
        console.log('Someone is typing...');
        obs.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });

    // We define our Observer which will listen to messages
    // from our other components and send messages back to our
    // socket server whenever the `next()` method is called.
    const observer = {
      next: (event: { event: string, data: Object }) => {
        this.socket.emit(event.event, event.data);
      },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Subject.create(observer, observable);
  }
}
