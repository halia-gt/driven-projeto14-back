import express from "express";
import authRouter from "./authorization.routers.js";
import dataRouter from "./dataRouter.js";

const router = express.Router();
router.use(authRouter);
router.use(dataRouter);

export default router;
