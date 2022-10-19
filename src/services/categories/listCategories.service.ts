import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entities";
import AppError from "../../errors/appError";

const listCategoriesService = async (): Promise<Category[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const listCategories = categoryRepository.find();

  if (!listCategories) {
    throw new AppError(404, "Category not found");
  }

  return listCategories;
};

export default listCategoriesService;
