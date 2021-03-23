import { body, ValidationChain } from "express-validator";

export default class DataValidation {
  passwordReset(): ValidationChain[] {
    return [
      body("userId", "userId doesn't exists").exists(),
      body("userId", "userId it's empty").notEmpty(),
      body("token", "token doesn't exists").exists(),
      body("token", "token it's empty").notEmpty(),
      body("password", "password doesn't exists").exists(),
      body("password", "password it's empty").notEmpty(),
      body("password", "must provide a strong password").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
      body(
        "password_confirmation",
        "password_confirmation doesn't exists"
      ).exists(),
      body(
        "password_confirmation",
        "password_confirmation it's empty"
      ).notEmpty(),
      body(
        "password_confirmation",
        "password_confirmation field must have the same value as the password field"
      ).custom((password_confirmation, { req }) => {
        return password_confirmation === req.body.password;
      }),
    ];
  }
  public requestPasswordReset(): ValidationChain[] {
    return [
      body("email", "email doesn't exists").exists(),
      body("email", "email it's empty").notEmpty(),
      body("email", "must be a valid email").isEmail(),
    ];
  }
  public signUp(): ValidationChain[] {
    return [
      body("email", "email doesn't exists").exists(),
      body("email", "email it's empty").notEmpty(),
      body("email", "must be a valid email").isEmail(),
      body("password", "password doesn't exists").exists(),
      body("password", "password it's empty").notEmpty(),
      body("password", "must provide a strong password").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
      body(
        "password_confirmation",
        "password_confirmation doesn't exists"
      ).exists(),
      body(
        "password_confirmation",
        "password_confirmation it's empty"
      ).notEmpty(),
      body(
        "password_confirmation",
        "password_confirmation field must have the same value as the password field"
      ).custom((password_confirmation, { req }) => {
        return password_confirmation === req.body.password;
      }),
    ];
  }
}
