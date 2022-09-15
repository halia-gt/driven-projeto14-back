import cors from "cors";
import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

