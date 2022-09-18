import express from "express";
import {
  getAllProducts,
  getProductByCategory,
  getProductById,
  insertData,
} from "../controllers/dataController.js";

const dataRouter = express.Router();

//Somente rodar uma vez para testar
//dataRouter.get("/insertData", insertData);
dataRouter.get("/products/list", getAllProducts);
dataRouter.get("/products/:id", getProductById);
dataRouter.get("/category/:category", getProductByCategory);
export default dataRouter;
