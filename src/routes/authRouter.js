import express from "express";
import { authValidation } from "../middlewares/authMiddleware.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/sign-up", authValidation, authController.signUp);

export default router;