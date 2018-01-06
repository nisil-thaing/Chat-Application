import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ChatRoomsComponent } from './pages/messages/chat-rooms/chat-rooms.component';
import { ConversationComponent } from './pages/messages/conversation/conversation.component';

export const appRoutes = [
  {
    path: 'messages',
    component: MessagesComponent,
    data: {
      title: 'Messages'
    },
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/messages',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MessagesComponent,
    ChatRoomsComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
