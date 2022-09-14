import express from "express";
import dataRouter from "./dataRouter.js";

const router = express.Router();
router.use(dataRouter);
export default router;
