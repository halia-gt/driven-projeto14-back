import express from "express";
import * as ordersController from "../controllers/ordersController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/order", ordersController.addOrder);

export default router;