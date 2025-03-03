import { Router } from "express";
import { loginSystem, signupSystem } from "../controllers/User.controller.js";

const router = Router();

router.route("/signup").post(signupSystem);
router.route("/login").post(loginSystem);

export default router;
