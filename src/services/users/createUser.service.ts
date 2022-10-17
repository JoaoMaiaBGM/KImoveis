import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import bcrypt from "bcryptjs";
import { IUser, IUserRequest } from "../../interfaces/users";
import AppError from "../../errors/appError";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailIsExists = users.find((user) => user.email === email);
  if (emailIsExists) {
    throw new AppError(400, "User already exists");
  }

  const createdUser = userRepository.create({
    name,
    email,
    isAdm,
    password: bcrypt.hashSync(password, 10),
    isActive: true,
  });

  await userRepository.save(createdUser);

  return createdUser;
};

export default createUserService;
