import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { addressMiddleware, cardMiddleware } from "../middlewares/userInfoMiddleware.js";
import * as userInfoController from "../controllers/userInfoController.js";

const router = express.Router();

router.use(authMiddleware);
router.put("/user/address", addressMiddleware, userInfoController.addAddress);
router.put("/user/card", cardMiddleware, userInfoController.addCard);

export default router;