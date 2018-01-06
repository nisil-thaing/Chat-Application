export interface AuthenticateInput {
  email: string;
  password: string;
}

export class User {
  _id: string;
  email: string;
  name: string;
  token: string;
}
