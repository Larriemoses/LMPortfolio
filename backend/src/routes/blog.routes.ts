// src/routers/blog.routers.ts

import { Router } from "express";
import {
  createBlog,
  getApprovedBlogs,
  getBlogBySlug, // Renamed controller function
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
router.get("/:slug", getBlogBySlug); // Changed from /:id to /:slug

// ✅ Interactions (public for views, authenticated for likes/comments)
router.patch("/:slug/views", incrementViews); // Changed from /:id to /:slug
router.patch("/:slug/like", protect, toggleLike); // Changed from /:id to /:slug
router.post("/:slug/comment", protect, addComment); // Changed from /:id to /:slug

// ✅ Admin Only Routes (protected by adminOnly middleware)
router.post("/", protect, adminOnly, createBlog);
router.put("/:slug", protect, adminOnly, updateBlog); // Changed from /:id to /:slug
router.delete("/:slug", protect, adminOnly, deleteBlog); // Changed from /:id to /:slug

export default router;
