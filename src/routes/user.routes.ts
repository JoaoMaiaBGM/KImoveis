import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUserByIdController from "../controllers/users/listUserById.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
userRouter.get("/:id", verifyAuthTokenMiddleware, listUserByIdController);
userRouter.patch("/:id", verifyAuthTokenMiddleware, updateUserController);
userRouter.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);

export default userRouter;
