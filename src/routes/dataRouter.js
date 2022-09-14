import express from "express";
import { inserData } from "../controllers/dataController.js";

const dataRouter = express.Router();

dataRouter.get("/data", inserData);

export default dataRouter;
