import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entities";
import AppError from "../../errors/appError";

const listSchedulesPropertyService = async (
  propertyId: string
): Promise<Property[]> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const listSchedulesProperties = propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!listSchedulesProperties) {
    throw new AppError(404, "Property not found");
  }

  const listedScheduleByProperty = await propertyRepository.find({
    where: {
      id: propertyId,
    },
    relations: {
      schedules: true,
    },
  });

  return listedScheduleByProperty;
};

export default listSchedulesPropertyService;
