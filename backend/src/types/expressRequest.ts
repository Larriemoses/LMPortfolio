import { Request as ExpressRequest } from "express";
import { IUser } from "../models/User";

export interface AuthRequest extends ExpressRequest {
  user?: IUser;
}

export type Request = AuthRequest;
