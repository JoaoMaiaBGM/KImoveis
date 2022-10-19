import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entities";
import AppError from "../../errors/appError";

const listCategoryByIdService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const listCategoryId = await categoryRepository.findOneBy({
    id: id,
  });

  if (!listCategoryId) {
    throw new AppError(400, "Category not found");
  }

  return listCategoryId;
};

export default listCategoryByIdService;
