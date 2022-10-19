import { Request, Response } from "express";
import listCategoriesService from "../../services/categories/listCategories.service";

const listCategoriesController = async (req: Request, res: Response) => {
  const listCategories = await listCategoriesService();

  return res.status(200).json(listCategories);
};

export default listCategoriesController;
