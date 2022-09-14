import express from "express";
import authRouter from "./authorization.routers.js";

const router = express.Router();
router.use(authRouter);

export default router;
