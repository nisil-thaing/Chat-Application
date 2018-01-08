import { User } from './user';

export class ChatMessage {
  _id: string;
  updatedAt: string;
  createdAt: string;
  body: string;
  author: User;
  room: string;
}
