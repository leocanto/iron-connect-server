import express from "express";
import clientController from "./controllers/clientController.js";
import adminController from "./controllers/adminController.js";
import mealController from "./controllers/mealController.js";
import trainingController from "./controllers/trainingController.js";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT
const HOST = '0.0.0.0'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/client", clientController);
app.use("/admin", adminController);
app.use("/meal", mealController);
app.use("/training", trainingController);


app.listen(PORT, HOST);