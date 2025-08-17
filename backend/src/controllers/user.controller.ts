import { Request } from "../types/expressRequest";
import { Response } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "1h", // corrected from "1hr" to "1h"
  });
};

// @desc Register new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      token: generateToken(user._id.toString()),
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

// @desc Login user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      token: generateToken(user._id.toString()),
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};

// @desc Get current user profile (protected)
export const getProfile = (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.json({
    _id: req.user._id.toString(),
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
  });
};

export const updateProfile = async (req: Request, res: Response) => {
  if (!req.user) return res.status(401).json({ message: "Not authenticated" });

  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.title = req.body.title || user.title;
    user.bio = req.body.bio || user.bio;
    user.profilePic = req.body.profilePic || user.profilePic;

    if (req.body.password) user.password = req.body.password;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id.toString(),
      name: updatedUser.name,
      email: updatedUser.email,
      title: updatedUser.title,
      bio: updatedUser.bio,
      profilePic: updatedUser.profilePic,
      isVerified: updatedUser.isVerified,
      role: updatedUser.role,
      token: generateToken(updatedUser._id.toString()),
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile", error });
  }
};
