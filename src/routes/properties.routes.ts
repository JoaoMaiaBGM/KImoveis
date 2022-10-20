import { Router } from "express";
import createPropertyController from "../controllers/properties/createProperty.controller";
import listPropertiesController from "../controllers/properties/listProperties.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const propertiesRouter = Router();

propertiesRouter.post("", verifyIsAdmMiddleware, createPropertyController);
propertiesRouter.get("", listPropertiesController);

export default propertiesRouter;
