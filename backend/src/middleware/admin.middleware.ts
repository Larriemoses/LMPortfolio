import { Response, NextFunction } from "express";
import { Request } from "../types/expressRequest";

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({ message: "Admin access only" });
};
