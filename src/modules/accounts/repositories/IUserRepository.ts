import { User } from "../entities/User";
import { ILoginDTO } from "../models/ILoginDTO";
import { ILoginResponse } from "../models/ILoginResponse";
import { IUserDTO } from "../models/IUserDTO";

export interface IUserRepository {
  create(data: IUserDTO): Promise<void>;
  login(data: ILoginDTO): Promise<ILoginResponse>;
  findByLogin(login: string): Promise<User>;
}
