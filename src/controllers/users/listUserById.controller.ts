import { Request, Response } from "express";
import listUserByIdService from "../../services/users/listUserById.service";

const listUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await listUserByIdService(id);

  return res.status(200).json(user);
};

export default listUserByIdController;
