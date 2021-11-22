import { ILoginDTO } from "../../models/ILoginDTO";
import { ILoginResponse } from "../../models/ILoginResponse";
import { IUserDTO } from "../../models/IUserDTO";
import { IUserRepository } from "../IUserRepository";
import { Db } from "mongodb";
import { MongoClient } from "../../../../shared/clients/MongoClient";
import { hash } from "bcrypt";
import { User } from "../../entities/User";

export class UserMongoRepository implements IUserRepository {
  db: Db;
  private static INSTANCE: UserMongoRepository;

  private constructor() {}

  async findByLogin(login: string): Promise<User> {
    const user = await this.db.collection<User>("user").findOne<User>({
      login,
    });

    return user;
  }

  public static async getInstance(): Promise<UserMongoRepository> {
    if (!UserMongoRepository.INSTANCE) {
      UserMongoRepository.INSTANCE = new UserMongoRepository();
      UserMongoRepository.INSTANCE.db = await MongoClient.getInstance().connect();
    }
    return UserMongoRepository.INSTANCE;
  }

  async create({ password, login, name }: IUserDTO): Promise<void> {
    const hashPassword = await hash(password, 8);

    await this.db.collection<User>("user").insertOne({
      password: hashPassword,
      login,
      name,
      favorites: [],
      refresh_token: "",
    });
  }

  login(data: ILoginDTO): Promise<ILoginResponse> {
    throw new Error("Method not implemented.");
  }
}
