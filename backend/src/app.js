import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import tripsRoutes from "./routes/tripsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/trips", tripsRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Urban Mobility Backend Running",
  });
});

export default app;