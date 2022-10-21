import { Request, Response } from "express";
import listCategoryByIdService from "../../services/categories/listCategoryById.service";

const listCategoryByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const listCategoryId = await listCategoryByIdService(id);

  return res.status(200).json(listCategoryId);
};

export default listCategoryByIdController;
