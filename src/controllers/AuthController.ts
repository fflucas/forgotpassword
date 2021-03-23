import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { container } from "tsyringe";
import PasswordResetService from "../services/PasswordResetService";
import RequestPasswordResetService from "../services/RequestPasswordResetService";
import SignUpService from "../services/SignUpService";

export default class AuthController {
  public async passwordReset(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }

    const { userId, token, password } = req.body;
    const resetService = container.resolve(PasswordResetService);
    const resetSuccess = await resetService.run({ userId, token, password });
    return res.status(200).json(resetSuccess);
  }

  public async requestPasswordReset(
    req: Request,
    res: Response
  ): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }

    const { email } = req.body;
    const requestService = container.resolve(RequestPasswordResetService);
    const link = await requestService.run(email);
    return res.status(200).json({ link });
  }

  public async signUp(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }

    const { email, password } = req.body;
    const signUpService = await container.resolve(SignUpService);
    const user = await signUpService.run({ email, password });
    return res.status(200).json(user);
  }
}
