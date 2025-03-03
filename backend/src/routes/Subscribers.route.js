import { Router } from "express";
import {
  addEmail,
  deleteEmailByAdmin,
  fetchAllEmail,
} from "../controllers/Subscribers.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

router.route("/add-email").post(addEmail);
router.route("/fetch-email").get(verifyJWT, fetchAllEmail);
router.route("/delete-email").delete(verifyJWT, deleteEmailByAdmin);

export default router;
