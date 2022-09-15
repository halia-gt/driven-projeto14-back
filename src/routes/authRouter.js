import express from "express";
import { signUpValidation, signInValidation } from "../middlewares/authMiddleware.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/sign-up", signUpValidation, authController.signUp);
router.post("/auth/sign-in", signInValidation, authController.singIn);

export default router;