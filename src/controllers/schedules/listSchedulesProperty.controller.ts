import { Request, Response } from "express";
import listSchedulesService from "../../services/schedules/listSchedulesProperty.service";

const listSchedulesPropertyController = async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  const listedSchedules = await listSchedulesService(propertyId);

  return res.status(200).send(listedSchedules);
};

export default listSchedulesPropertyController;
