import cors from "cors";
import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log("Magic happens on port " + process.env.PORT);
});
