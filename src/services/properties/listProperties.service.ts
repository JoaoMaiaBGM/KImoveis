import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entities";
import AppError from "../../errors/appError";

const listPropertiesService = async (): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const listedProperties = propertyRepository.find();

  if (!listedProperties) {
    throw new AppError(404, "Property not found");
  }

  return listedProperties;
};

export default listPropertiesService;
