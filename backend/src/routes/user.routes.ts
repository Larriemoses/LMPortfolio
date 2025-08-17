import { Router } from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../controllers/user.controller";
import { protect } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getProfile);
router.put("/me", protect, upload.single("profilePic"), updateProfile);

export default router;
