import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/scheduleUsersProperties.entities";
import { Property } from "../../entities/property.entities";
import AppError from "../../errors/appError";

const listSchedulesPropertyService = async (
  propertyId: string
): Promise<Property[]> => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);
  const propertyRepository = AppDataSource.getRepository(Property);

  const listSchedulesProperty = await scheduleRepository.findOneBy({
    id: propertyId,
  });

  if (!listSchedulesProperty) {
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
