import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRouter from "./routes/user.routes";
import loginRouter from "./routes/session.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import categoiesRouter from "./routes/categories.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoiesRouter);

app.use(handleErrorMiddleware);

export default app;
