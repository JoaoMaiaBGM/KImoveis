import AppDataSource from "../../data-source";
import { Property } from "../../entities/property.entities";
import AppError from "../../errors/appError";

const listSchedulesPropertyService = async (
  propertyId: string
): Promise<Property | null> => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const listProperty = await propertyRepository.findOneBy({
    id: propertyId,
  });

  if (!listProperty) {
    throw new AppError(404, "Property not found");
  }

  const listedScheduleByProperty = await propertyRepository.findOne({
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
