import { Router } from "express";
import {
  addChallenges,
  deleteChallenges,
  fetchAllChallenges,
  fetchPublicChallenges,
  toggleChallenges,
} from "../controllers/Challenges.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

router.route("/add-challenge").post(verifyJWT, addChallenges);
router.route("/all-data-challenge").get(verifyJWT, fetchAllChallenges);
router.route("/data-challenge").get(fetchPublicChallenges);
router.route("/toggle-challenge").put(verifyJWT, toggleChallenges);
router.route("/delete-challenge").delete(verifyJWT, deleteChallenges);

export default router;
