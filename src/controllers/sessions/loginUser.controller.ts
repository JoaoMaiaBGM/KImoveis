import { IUserLogin } from "./../../interfaces/users/index";
import { Request, Response } from "express";
import loginUserService from "../../services/sessions/loginUser.service";

const loginUSerController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;

  const token = await loginUserService({ email, password });

  return res.status(200).json({ token });
};

export default loginUSerController;
