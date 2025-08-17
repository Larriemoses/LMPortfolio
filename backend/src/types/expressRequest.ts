import { Request as ExpressRequest } from "express";
import { Types } from "mongoose";
import { IUser } from "../models/User";

// Shape of user object in req.user
export interface IUserPayload extends Omit<IUser, "password"> {
  _id: Types.ObjectId;
}

// Extend Express Request
export interface AuthRequest extends ExpressRequest {
  user?: IUserPayload;
  file?: Express.Multer.File;
  files?:
    | Express.Multer.File[]
    | { [fieldname: string]: Express.Multer.File[] }; // ✅ aligned with Express typing
}

export type Request = AuthRequest;
