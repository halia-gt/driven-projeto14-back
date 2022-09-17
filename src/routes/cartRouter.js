import express from "express";
import * as cartController from "../controllers/cartController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { productValidation, productIdValidation } from "../middlewares/cartMiddleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/cart", productValidation, cartController.addToCart);
router.get("/cart", cartController.getUserCart);
router.delete("/cart/:productId", productIdValidation, cartController.removeItemCart);

export default router;