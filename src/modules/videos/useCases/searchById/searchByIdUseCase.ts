import { inject, injectable } from "tsyringe";
import { OMDBData } from "../../entities/OMDbData";
import { IOMDbDataApiRepository } from "../../repositories/IOMDbDataApiRepository";

@injectable()
export class SearchByIdUseCase {
  constructor(
    @inject("OMDbDataApiRepository")
    private oMDbDataApiRepository: IOMDbDataApiRepository
  ) {}

  async execute(id: string): Promise<OMDBData> {
    const data = await this.oMDbDataApiRepository.findById(id);

    return data;
  }
}
