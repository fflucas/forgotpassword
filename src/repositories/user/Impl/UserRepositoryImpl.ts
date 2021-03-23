import { getRepository, Repository } from "typeorm";
import IUserDTO from "../../../dto/IUserDTO";
import User from "../../../models/User";
import IUserRepository from "../IUserRepository";

export default class UserRepositoryImpl implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  public async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    return user;
  }
  public async save(data: User): Promise<User> {
    const user = await this.userRepository.save(data);
    return user;
  }

  public async create(data: IUserDTO): Promise<User> {
    const user = this.userRepository.create(data);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
