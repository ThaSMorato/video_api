import { User } from "../entities/User";

export interface ILoginResponse {
  user: User;
  jwt_token: string;
  refresh_token: string;
}
