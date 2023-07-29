import express from "express";
import clientController from "./controllers/client.js";
import adminController from "./controllers/admin.js";
import cors from "cors";

const PORT = 8000;
const HOST = '0.0.0.0'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/admin", adminController);
app.use("/client", clientController);


app.listen(PORT, HOST);