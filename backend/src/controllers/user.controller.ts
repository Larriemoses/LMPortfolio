import { Request } from "../types/expressRequest";
import { Response } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "1hr",
  });
};

// Register user
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password });
  const token = generateToken(user._id.toString());

  res.status(201).json({ token, user: { name: user.name, email: user.email } });
};

// Login user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user._id.toString());

  res.json({ token, user: { name: user.name, email: user.email } });
};

// Get current user profile (protected)
export const getProfile = (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  res.json(req.user);
};
