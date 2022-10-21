import { IScheduleRequest } from "./../../interfaces/schedules/index";
import AppDataSource from "../../data-source";
import { Schedules } from "../../entities/scheduleUsersProperties.entities";
import { User } from "../../entities/user.entities";
import { Property } from "../../entities/property.entities";
import AppError from "../../errors/appError";

const createScheduleService = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest): Promise<Schedules> => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Property);

  const userExists = await userRepository.findOneBy({
    id: userId,
  });
  if (!userExists) {
    throw new AppError(404, "User not found");
  }

  const propertyExists = await propertyRepository.findOneBy({
    id: propertyId,
  });
  if (!propertyExists) {
    throw new AppError(404, "Property not found");
  }

  const scheduleExists = await scheduleRepository.findOneBy({
    date: date,
    hour: hour,
  });

  if (!!scheduleExists) {
    throw new AppError(400, "Schedule not available");
  }

  const getHour = Number(hour.split(":")[0]);
  if (getHour < 8 || getHour >= 18) {
    throw new AppError(400, "Invalid hour");
  }

  const workingDays = new Date(date);
  if (!(workingDays.getDay() > 0 && workingDays.getDay() < 6)) {
    throw new AppError(400, "Invalid date");
  }

  const createdSchedule = scheduleRepository.create({
    user: userExists,
    property: propertyExists,
    date,
    hour,
  });

  await scheduleRepository.save(createdSchedule);

  return createdSchedule;
};

export default createScheduleService;
