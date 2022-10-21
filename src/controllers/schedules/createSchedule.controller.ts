import { Request, Response } from "express";
import createScheduleService from "../../services/schedules/createSchedules.service";

const createScheduleController = async (req: Request, res: Response) => {
  const { propertyId, date, hour } = req.body;
  const userId = req.params.id;
  console.log(userId);

  const createdSchedule = await createScheduleService({
    userId,
    propertyId,
    date,
    hour,
  });

  return res.status(201).json({
    message: "Schedule created",
  });
};

export default createScheduleController;
