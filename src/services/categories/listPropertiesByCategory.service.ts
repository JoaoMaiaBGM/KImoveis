import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entities";
import { Property } from "../../entities/property.entities";
import AppError from "../../errors/appError";

const listPropertiesByCategoryService = async (
  categoryId: string
): Promise<Property[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const propertyRepository = AppDataSource.getRepository(Property);

  const listCategory = await categoryRepository.findOneBy({
    id: categoryId,
  });

  if (!listCategory) {
    throw new AppError(404, "Category not found");
  }

  const listPropertyByCategory = await propertyRepository.find({
    where: {
      category: {
        id: listCategory.id,
      },
    },
    relations: {
      category: true,
    },
  });

  return listPropertyByCategory;
};

export default listPropertiesByCategoryService;
