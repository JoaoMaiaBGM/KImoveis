import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const categoriesRouter = Router();

categoriesRouter.post("", verifyIsAdmMiddleware, createCategoryController);
categoriesRouter.get("");
categoriesRouter.get("/:id");

export default categoriesRouter;
