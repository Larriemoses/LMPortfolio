import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/User";
import { Request } from "express"; // Re-import Request

// Define a type for the user data attached to the request
interface IUserPayload {
  _id: string;
  name: string;
  email: string;
  role: string;
  title?: string;
  bio?: string;
  profilePic?: string;
  isVerified: boolean;
}

// Extend the Request object to include the user property
export interface AuthRequest extends Request {
  user?: IUserPayload;
}

// Protect middleware: verifies JWT and attaches user to req.user
export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
      };

      // Get user from the database and remove the password
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      // Attach sanitized user to req with the new type definition
      req.user = {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        title: user.title,
        bio: user.bio,
        profilePic: user.profilePic,
        isVerified: user.isVerified,
      };

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    // Return unauthorized if no token is provided
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
