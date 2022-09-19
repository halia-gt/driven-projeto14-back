import express from "express";
import * as dataController from "../controllers/dataController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//Somente rodar uma vez para testar
//dataRouter.get("/insertData", insertData);
router.use(authMiddleware);
router.get("/products/list", dataController.getAllProducts);
router.get("/products/:id", dataController.getProductById);
router.get("/category/:category", dataController.getProductByCategory);
export default router;
