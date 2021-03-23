import { inject, injectable } from "tsyringe";
import IUserDTO from "../dto/IUserDTO";
import User from "../models/User";
import IUserRepository from "../repositories/user/IUserRepository";
import AppError from "../utils/error";

@injectable()
export default class SignUpService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  public async run(data: IUserDTO): Promise<User> {
    const emailExists = await this.userRepository.findByEmail(data.email);
    if (emailExists) {
      throw new AppError(`User with email ${data.email} already exists`, 400);
    }

    const user = await this.userRepository.create(data);
    await this.userRepository.save(user);
    return user;
  }
}
