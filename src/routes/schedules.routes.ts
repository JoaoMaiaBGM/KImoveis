import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import listSchedulesPropertyController from "../controllers/schedules/listSchedules.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const scheduleRouter = Router();

scheduleRouter.post("", verifyAuthTokenMiddleware, createScheduleController);
scheduleRouter.get(
  "/properties/:id",
  verifyIsAdmMiddleware,
  listSchedulesPropertyController
);

export default scheduleRouter;
