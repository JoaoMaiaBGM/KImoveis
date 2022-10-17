import { Router } from "express";
import loginUSerController from "../controllers/sessions/loginUser.controller";

const loginRouter = Router();

loginRouter.post("", loginUSerController);

export default loginRouter;
