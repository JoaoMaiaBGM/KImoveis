import { IUserUpdate } from "./../../interfaces/users/index";
import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const user: IUserUpdate = req.body;
  const id = req.params.id;

  const updatedUser = await updateUserService(id, user);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
