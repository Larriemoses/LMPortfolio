// src/routers/blog.routers.ts

import { Router } from "express";
import {
  createBlog,
  getApprovedBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getCategories,
  incrementViews,
  toggleLike,
  addComment,
} from "../controllers/blog.controller";
import { protect } from "../middleware/auth.middleware";
import { adminOnly } from "../middleware/admin.middleware";

const router = Router();

// ✅ Public Routes
router.get("/", getApprovedBlogs);
router.get("/categories", getCategories);
router.get("/:id", getBlogById);

// ✅ Interactions (public for views, authenticated for likes/comments)
router.patch("/:id/views", incrementViews); // Public
router.patch("/:id/like", protect, toggleLike); // Logged in users
router.post("/:id/comment", protect, addComment); // Logged in users

// ✅ Admin Only Routes (protected by adminOnly middleware)
router.post("/", protect, adminOnly, createBlog);
router.put("/:id", protect, adminOnly, updateBlog);
router.delete("/:id", protect, adminOnly, deleteBlog);

export default router;
