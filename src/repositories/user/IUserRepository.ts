import IUserDTO from "../../dto/IUserDTO";
import User from "../../models/User";

export default interface IUserRepository {
  findById(id: number): Promise<User>;
  save(user: User): Promise<User>;
  create(data: IUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
