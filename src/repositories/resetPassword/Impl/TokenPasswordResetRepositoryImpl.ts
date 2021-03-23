import { getRepository, Repository } from "typeorm";
import ITokenPasswordResetDTO from "../../../dto/ITokenPasswordResetDTO";
import TokenPasswordReset from "../../../models/TokenPasswordReset";
import ITokenPasswordResetRepository from "../ITokenPasswordResetRepository";

export default class TokenPasswordResetRepositoryImpl
  implements ITokenPasswordResetRepository {
  private tokenPasswordResetRepository: Repository<TokenPasswordReset>;

  constructor() {
    this.tokenPasswordResetRepository = getRepository(TokenPasswordReset);
  }

  public async save(data: TokenPasswordReset): Promise<TokenPasswordReset> {
    const token = await this.tokenPasswordResetRepository.save(data);
    return token;
  }

  public async create(
    data: ITokenPasswordResetDTO
  ): Promise<TokenPasswordReset> {
    const token = this.tokenPasswordResetRepository.create(data);
    return token;
  }

  public async delete(id: number): Promise<void> {
    await this.tokenPasswordResetRepository.delete(id);
  }

  public async findByUserId(
    userId: number
  ): Promise<TokenPasswordReset | undefined> {
    const request = await this.tokenPasswordResetRepository.findOne({
      where: { user_id: userId },
    });
    return request;
  }
}
