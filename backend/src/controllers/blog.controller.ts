// src/controllers/blog.controller.ts

import { Request, Response } from "express";
import { Blog } from "../models/Blog";
import { AuthRequest } from "../middleware/auth.middleware";
import { Types } from "mongoose";

// ✅ Public Routes

// Get all approved blogs for public viewing
export const getApprovedBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find({ status: "approved" });
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching approved blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
};

// Get a single blog by ID
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get list of unique categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Blog.distinct("category");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Optimized and corrected function to increment views
export const incrementViews = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } }, // Use $inc to atomically increment views by 1
      { new: true } // Return the updated document
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // We can now send back a success message or the updated blog
    res
      .status(200)
      .json({ message: "View count updated", newViews: blog.views });
  } catch (error) {
    console.error("Error incrementing view:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// --- Authenticated & Admin Routes ---

// Create a new blog post
export const createBlog = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized. Admin access required." });
    }
    const { title, content, tags, category, image } = req.body;
    // ✅ Corrected type assertion: first to 'unknown', then to 'ObjectId'
    const authorId = req.user._id as unknown as Types.ObjectId;
    const author = req.user.name;

    const newBlog = await Blog.create({
      title,
      content,
      author,
      authorId,
      tags,
      category,
      image,
      status: "approved",
    });

    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Failed to create blog post:", error);
    res.status(500).json({ message: "Failed to create blog post", error });
  }
};

// Update a blog post (admin only)
export const updateBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (!req.user || req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized to update this blog" });
    }
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a blog post (admin only)
export const deleteBlog = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (!req.user || req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this blog" });
    }
    await blog.deleteOne();
    res.json({ message: "Blog removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Toggle like
export const toggleLike = async (req: AuthRequest, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    // ✅ Corrected type assertion
    const userId = req.user._id as unknown as Types.ObjectId;

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const isLiked = blog.likes.some((likeId: Types.ObjectId) =>
      likeId.equals(userId)
    );

    if (isLiked) {
      blog.likes = blog.likes.filter(
        (likeId: Types.ObjectId) => !likeId.equals(userId)
      );
    } else {
      blog.likes.push(userId);
    }
    await blog.save();
    res.json({ likes: blog.likes.length, isLiked: !isLiked });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Add comment
export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const { text } = req.body;
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    // ✅ Corrected type assertion
    const userId = req.user._id as unknown as Types.ObjectId;

    if (!text) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const newComment = { user: userId, text, createdAt: new Date() };

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: newComment } },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(201).json(blog.comments[blog.comments.length - 1]);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
