import { Router } from "express";
import {
  createBlog,
  getApprovedBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  changeBlogStatus,
  getCategories
} from "../controllers/blog.controller";
import { protect } from "../middleware/auth.middleware";
import { adminOnly } from "../middleware/admin.middleware";

const router = Router();

// Public routes
router.get("/", getApprovedBlogs);
router.get("/categories", getCategories);
router.get("/:id", protect, getBlogById);

// Authenticated users
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

// Admin only
router.patch("/:id/status", protect, adminOnly, changeBlogStatus);

export default router;
