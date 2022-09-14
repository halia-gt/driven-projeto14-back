import express from "express";
import { authValidation } from "../middlewares/authorization.middleware.js";
import * as authController from "../controllers/authorization.controllers.js";

const router = express.Router();

router.post("/auth/sign-up", authValidation, authController.signUp);

export default router;