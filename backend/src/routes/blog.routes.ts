import { Router } from "express";
import {
  createBlog,
  getApprovedBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  changeBlogStatus,
  getCategories,
  incrementViews,
  toggleLike,
  addComment,
} from "../controllers/blog.controller";
import { protect } from "../middleware/auth.middleware";
import { adminOnly } from "../middleware/admin.middleware";

const router = Router();

// ✅ Public
router.get("/", getApprovedBlogs);
router.get("/categories", getCategories);
router.get("/:id", protect, getBlogById);

// ✅ Authenticated
router.post("/", protect, createBlog);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

// ✅ Interactions
router.patch("/:id/views", incrementViews); // Public (anyone reading)
router.patch("/:id/like", protect, toggleLike); // Logged in users
router.post("/:id/comment", protect, addComment); // Logged in users

// ✅ Admin only
router.patch("/:id/status", protect, adminOnly, changeBlogStatus);

export default router;
