import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ChatRoomsComponent } from './pages/messages/chat-rooms/chat-rooms.component';
import { ConversationComponent } from './pages/messages/conversation/conversation.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AuthenticationService, UserService } from './services';
import { JWTInterceptor } from './helpers/jwt-interceptor';
import { ChatService } from './services/chat/chat.service';
import { WebsocketService } from './services/web-socket/web-socket.service';
import { AuthGuard } from './helpers/auth.guard';
import { ChatRoomsResolver } from './resolvers/messages/chat-rooms.resolver';

export const appRoutes = [
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
    resolve: {
      chatRooms: ChatRoomsResolver
    },
    data: {
      title: 'Messages'
    },
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    },
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegistrationComponent,
    data: {
      title: 'Registration'
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
    ConversationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthenticationService,
    UserService,
    WebsocketService,
    ChatService,
    AuthGuard,
    ChatRoomsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
