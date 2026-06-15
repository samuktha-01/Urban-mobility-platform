import express from "express";
import { getRecentTrips } from "../controllers/tripsController.js";

const router = express.Router();

router.get("/", getRecentTrips);

export default router;