import { Router } from "express";
import {
  founderCreated,
  founderDataFetch,
  founderDelete,
} from "../controllers/Founder.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

router.route("/data-founder").get(founderDataFetch);
router.route("/add-founder").post(verifyJWT, founderCreated);
router.route("/delete-founder").delete(verifyJWT, founderDelete);

export default router;
