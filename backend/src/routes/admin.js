import express from "express";
import { getAdmin, postLogin } from "../controllers/admin.js";

const router = express.Router();

router.get("/", getAdmin);
router.post("/", postLogin);



export default router