export interface AuthenticateInput {
  email: string;
  password: string;
}

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
}

export class User {
  _id: string;
  email: string;
  name: string;
  token: string;
}
