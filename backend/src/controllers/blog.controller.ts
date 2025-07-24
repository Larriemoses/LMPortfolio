import { Request, Response } from "express";
import { Blog } from "../models/Blog";

// @desc Create a new blog
export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog", error });
  }
};

// @desc Get all blogs
export const getAllBlogs = async (_req: Request, res: Response) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

// @desc Get single blog by ID
export const getBlogById = async (req: Request, res: Response) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

// @desc Update blog
export const updateBlog = async (req: Request, res: Response) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

// @desc Delete blog
export const deleteBlog = async (req: Request, res: Response) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json({ message: "Blog deleted" });
};
