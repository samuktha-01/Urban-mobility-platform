import express from "express";
import { getCarbon } from "../controllers/carbonController.js";

const router = express.Router();
router.get("/", getCarbon);
export default router;