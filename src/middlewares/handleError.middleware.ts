import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

const handleErrorMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    message: "Internal server error",
  });
};

export default handleErrorMiddleware;
