import { Router } from "express";
import createScheduleController from "../controllers/schedules/createSchedule.controller";
import listSchedulesController from "../controllers/schedules/listSchedules.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const scheduleRouter = Router();

scheduleRouter.post("", verifyAuthTokenMiddleware, createScheduleController);
scheduleRouter.get("", verifyIsAdmMiddleware, listSchedulesController);

export default scheduleRouter;
