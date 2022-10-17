import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization token",
    });
  }

  const { isAdm } = jwt.decode(token) as { isAdm: boolean };

  if (!isAdm) {
    return res.status(403).json({
      message: "Not admin user",
    });
  }

  next();
};

export default verifyIsAdmMiddleware;
