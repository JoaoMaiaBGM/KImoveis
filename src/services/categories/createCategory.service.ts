import { ICategoryRequest } from "./../../interfaces/categories/index";
import AppDataSource from "../../data-source";
import { Category } from "./../../entities/category.entities";
import AppError from "../../errors/appError";

const createCategoryService = async (
  name: string
): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categories = await categoryRepository.find();

  const nameExists = categories.find((category) => category.name === name);
  if (nameExists) {
    throw new AppError(400, "Category already exists");
  }

  const createdCategory = categoryRepository.create({
    name,
  });

  await categoryRepository.save(createdCategory);

  return createdCategory;
};

export default createCategoryService;
