import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyAuthTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Missing authorization token",
      });
    }

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (error: any, decoded: any) => {
        req.user = {
          isAdm: decoded.isAdm,
          id: decoded.sub,
        };
        next();
      }
    );
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default verifyAuthTokenMiddleware;
