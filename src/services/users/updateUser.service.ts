import * as bcrypt from "bcryptjs";
import { IUserUpdate, IUser } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";

const updateUserService = async (id: string, user: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOneBy({
    id: id,
  });

  if (!account) {
    throw new AppError(404, "User not found");
  }
  const keys = Object.keys(user);
  if (
    keys.includes("isAdm") ||
    keys.includes("isActive") ||
    keys.includes("id")
  ) {
    throw new AppError(401, "User without permissions");
  }

  await userRepository.update(id, {
    name: user.name,
    email: user.email,
    password: user.password
      ? await bcrypt.hash(user.password, 10)
      : account.password,
  });

  const updatedUser = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  return { ...updatedUser, password: undefined };
};

export default updateUserService;
