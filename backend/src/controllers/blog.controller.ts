import { Response } from "express";
import { AuthRequest } from "../types/expressRequest";
import { Blog } from "../models/Blog";

// @desc Create a new blog (default: pending unless admin)
export const createBlog = async (req: AuthRequest, res: Response) => {
  try {
    const isAdmin = req.user?.role === "admin";
    const blog = await Blog.create({
      ...req.body,
      author: req.user?.name,
      authorId: req.user?._id,
      status: isAdmin ? "approved" : "pending",
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog", error });
  }
};

// @desc Get all approved blogs (public)
export const getApprovedBlogs = async (_req: AuthRequest, res: Response) => {
  try {
    const blogs = await Blog.find({ status: "approved" }).sort({
      createdAt: -1,
    });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
};

// @desc Get blog by ID (only if approved or owner/admin)
export const getBlogById = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (
      blog.status !== "approved" &&
      blog.authorId.toString() !== req.user?._id.toString() &&
      req.user?.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this blog" });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog", error });
  }
};

// @desc Update blog (admin or owner)
export const updateBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (
      req.user?.role !== "admin" &&
      blog.authorId.toString() !== req.user?._id.toString()
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    Object.assign(blog, req.body);
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog", error });
  }
};

// @desc Delete blog (admin or owner)
export const deleteBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (
      req.user?.role !== "admin" &&
      blog.authorId.toString() !== req.user?._id.toString()
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error });
  }
};

// @desc Approve or reject blog (admin only)
export const changeBlogStatus = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user?.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    const { status } = req.body;
    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to change blog status", error });
  }
};

// @desc Get categories from approved blogs
export const getCategories = async (_req: AuthRequest, res: Response) => {
  try {
    const categories = await Blog.distinct("category", { status: "approved" });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories", error });
  }
};
