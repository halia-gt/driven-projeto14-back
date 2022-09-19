import express from "express";
import authRouter from "./authRouter.js";
import dataRouter from "./dataRouter.js";
import userInfoRouter from "./userInfoRouter.js";
import cartRouter from "./cartRouter.js";
import ordersRouter from "./ordersRouter.js";

const router = express.Router();
router.use(authRouter);
router.use(dataRouter);
router.use(userInfoRouter);
router.use(cartRouter);
router.use(ordersRouter);

export default router;
