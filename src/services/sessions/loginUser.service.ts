import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserLogin } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entities";
import AppError from "../../errors/appError";
import "dotenv/config";

const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.email === email);
  if (!account) {
    throw new AppError(403, "Wrong email/password");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(403, "Wrong email/password");
  }

  const token = jwt.sign(
    { email: email, isAdm: account.isAdm },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: account.id }
  );

  return token;
};

export default loginUserService;
