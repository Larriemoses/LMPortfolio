import { Router } from "express";
import {
  registerUser,
  loginUser,
  getProfile,
} from "../controllers/user.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getProfile); // Protected route

export default router;
