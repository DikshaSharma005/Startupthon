import { Router } from "express";
import {
  completersCreated,
  completersDataFetch,
  completersDelete,
} from "../controllers/Completers.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

router.route("/data-completer").get(completersDataFetch);
router.route("/add-completer").post(verifyJWT, completersCreated);
router.route("/delete-completer").delete(verifyJWT, completersDelete);

export default router;
