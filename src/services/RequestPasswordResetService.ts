import * as bcrypt from "bcryptjs";
import * as crypto from "crypto";
import { inject, injectable } from "tsyringe";
import ITokenPasswordResetRepository from "../repositories/resetPassword/ITokenPasswordResetRepository";
import IUserRepository from "../repositories/user/IUserRepository";
import sendMail from "../utils/email/mailTransport";
import AppError from "../utils/error";

@injectable()
export default class RequestPasswordResetService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("TokenPasswordResetRepository")
    private tokenPasswordResetRepository: ITokenPasswordResetRepository
  ) {}

  public async run(email: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError(`User with email ${email} does not exists`, 400);
    }

    const token = await this.tokenPasswordResetRepository.findByUserId(user.id);
    if (token) {
      await this.tokenPasswordResetRepository.delete(token.id);
    }

    // generate a random token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hash = bcrypt.hashSync(resetToken);

    const resetPasswordToken = await this.tokenPasswordResetRepository.create({
      user_id: user.id,
      token: hash,
    });
    await this.tokenPasswordResetRepository.save(resetPasswordToken);

    const link = `${process.env.APP_URL}/auth/password-reset?token=${resetToken}&id=${user.id}`;

    sendMail(
      user.email,
      "Password Reset Request",
      {
        name: user.email,
        link: link,
      },
      "./template/requestResetPassword.handlebars"
    );

    return link;
  }
}
