import { Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { AuthRequest } from "../types/expressRequest";

// Protect middleware: verifies JWT and attaches user to req.user
export const protect: RequestHandler = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // attach sanitized user to req
    req.user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      title: user.title,
      bio: user.bio,
      profilePic: user.profilePic,
      isVerified: user.isVerified,
    } as any; // minimal cast (still recommended to refine IUserPayload later)

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
