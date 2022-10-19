import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entities";

const listCategoriesService = async (): Promise<Category[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const listCategories = categoryRepository.find();

  return listCategories;
};

export default listCategoriesService;
