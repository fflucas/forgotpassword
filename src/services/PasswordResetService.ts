import * as bcrypt from "bcryptjs";
import { inject, injectable } from "tsyringe";
import ITokenPasswordResetRepository from "../repositories/resetPassword/ITokenPasswordResetRepository";
import IUserRepository from "../repositories/user/IUserRepository";
import sendMail from "../utils/email/mailTransport";
import AppError from "../utils/error";

interface IPasswordReset {
  userId: string;
  token: string;
  password: string;
}

@injectable()
export default class PasswordResetService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("TokenPasswordResetRepository")
    private tokenPasswordResetRepository: ITokenPasswordResetRepository
  ) {}

  public async run(data: IPasswordReset): Promise<boolean> {
    // compare with the user's token
    const passwordResetToken = await this.tokenPasswordResetRepository.findByUserId(
      parseInt(data.userId)
    );
    if (!passwordResetToken) {
      throw new AppError("Invalid or expired password reset token", 400);
    }

    const isValid = bcrypt.compareSync(data.token, passwordResetToken.token);
    if (!isValid) {
      throw new AppError("Invalid or expired password reset token", 400);
    }

    // update the user password
    const user = await this.userRepository.findById(parseInt(data.userId));
    Object.assign(user, {
      password: data.password,
    });
    await this.userRepository.save(user);

    sendMail(
      user.email,
      "Password Reset Successfully",
      {
        name: user.email,
      },
      "./template/resetPassword.handlebars"
    );

    // delete the token
    await this.tokenPasswordResetRepository.delete(passwordResetToken.id);

    return true;
  }
}
