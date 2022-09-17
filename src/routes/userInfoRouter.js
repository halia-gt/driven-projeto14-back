import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { addressMiddleware } from "../middlewares/userInfoMiddleware.js";
import * as userInfoController from "../controllers/userInfoController.js";

const router = express.Router();

router.use(authMiddleware);
router.put("/user/address", addressMiddleware, userInfoController.addAddress);

export default router;