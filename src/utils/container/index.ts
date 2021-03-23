import { container } from "tsyringe";

import TokenPasswordResetRepositoryImpl from "../../repositories/resetPassword/Impl/TokenPasswordResetRepositoryImpl";
import ITokenPasswordResetRepository from "../../repositories/resetPassword/ITokenPasswordResetRepository";

import UserRepositoryImpl from "../../repositories/user/Impl/UserRepositoryImpl";
import IUserRepository from "../../repositories/user/IUserRepository";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepositoryImpl
);

container.registerSingleton<ITokenPasswordResetRepository>(
  "TokenPasswordResetRepository",
  TokenPasswordResetRepositoryImpl
);
