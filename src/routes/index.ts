import { Router } from "express";
import AuthController from "../controllers/AuthController";
import DataValidation from "../utils/middlewares/DataValidation";

const router = Router();
const authController = new AuthController();
const dataValidation = new DataValidation();

router.post("/auth/sign-up", dataValidation.signUp(), authController.signUp);

router.post(
  "/auth/request-password-reset",
  dataValidation.requestPasswordReset(),
  authController.requestPasswordReset
);

router.post(
  "/auth/password-reset",
  dataValidation.passwordReset(),
  authController.passwordReset
);

export { router };
