import { Router } from "express";
import {
  createService,
  getAllServices,
  updateService,
  deleteService,
} from "../controllers/service.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.route("/").get(getAllServices).post(protect, createService);
router.route("/:id").put(protect, updateService).delete(protect, deleteService);

export default router;
