import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: id,
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (user.isActive === false) {
    throw new AppError(400, "User is inactive");
  }

  await userRepository.update(user.id, { isActive: false });

  return user;
};

export default deleteUserService;
