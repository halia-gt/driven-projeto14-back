import express from "express";
import authRouter from "./authRouter.js";
import dataRouter from "./dataRouter.js";
import userInfoRouter from "./userInfoRouter.js";

const router = express.Router();
router.use(authRouter);
router.use(dataRouter);
router.use(userInfoRouter);

export default router;
