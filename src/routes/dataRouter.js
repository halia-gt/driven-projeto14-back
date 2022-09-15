import express from "express";
import { getAllProducts, insertData } from "../controllers/dataController.js";

const dataRouter = express.Router();

//Somente rodar uma vez para testar
dataRouter.get("/insertData", insertData);
dataRouter.get("/products/list", getAllProducts);

export default dataRouter;
