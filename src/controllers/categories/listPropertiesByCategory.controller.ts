import { Request, Response } from "express";
import listPropertiesByCategoryService from "../../services/categories/listPropertiesByCategory.service";

const listPropertiesByCategoryController = async (
  req: Request,
  res: Response
) => {
  const categoryId = req.params.id;

  const listPropertyByCategory = await listPropertiesByCategoryService(
    categoryId
  );

  return res.status(200).json(listPropertyByCategory);
};

export default listPropertiesByCategoryController;
