import bcrypt from "bcryptjs";
import { IUserUpdate, IUser } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";

const updateUserService = async (
  id: string,
  user: IUserUpdate
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const account = await userRepository.findOneBy({
    id: id,
  });

  if (!account) {
    throw new AppError(400, "User not found");
  }
  const keys = Object.keys(user);
  if (
    keys.includes("isAdm") ||
    keys.includes("isActive") ||
    keys.includes("id")
  ) {
    throw new AppError(401, "User without permissions");
  }

  if (user.password) {
    user.password = bcrypt.hashSync(user.password, 10);
  }

  await userRepository.update(id, user);

  const updatedUser = await userRepository.findOneBy({
    id: id,
  });

  return updatedUser!;
};

export default updateUserService;
