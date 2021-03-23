import TokenPasswordReset from "../../models/TokenPasswordReset";
import ITokenPasswordResetDTO from "../../dto/ITokenPasswordResetDTO";

export default interface ITokenPasswordResetRepository {
  save(data: TokenPasswordReset): Promise<TokenPasswordReset>;
  create(data: ITokenPasswordResetDTO): Promise<TokenPasswordReset>;
  delete(id: number): Promise<void>;
  findByUserId(userId: number): Promise<TokenPasswordReset | undefined>;
}
