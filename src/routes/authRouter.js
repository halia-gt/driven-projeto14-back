import express from "express";
import { signUpValidation, signInValidation } from "../middlewares/signMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/sign-up", signUpValidation, authController.signUp);
router.post("/auth/sign-in", signInValidation, authController.singIn);
router.get("/auth/sign-in", authMiddleware, authController.getUser);
router.delete("/auth/sign-in", authMiddleware, authController.logout);

export default router;