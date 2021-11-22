import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, login, password } = request.body;

    const createUserUseCase = await CreateUserUseCase.getInstance();

    await createUserUseCase.execute({ name, login, password });
    return response.status(201).send();
  }
}
