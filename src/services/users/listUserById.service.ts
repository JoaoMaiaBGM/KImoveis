import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";

const listUserByIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOneBy({
    id: id,
  });

  if (!user) {
    throw new AppError(400, "User not found");
  }

  return user;
};

export default listUserByIdService;
