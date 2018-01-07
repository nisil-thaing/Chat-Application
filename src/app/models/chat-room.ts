import { User } from './user';

export class ChatRoom {
  _id: string;
  name: string;
  admin: User;
  status: number;
  users: Array<User>;
}
