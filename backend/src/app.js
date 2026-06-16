import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import tripsRoutes from "./routes/tripsRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import carbonRoutes from "./routes/carbonRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/trips", tripsRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/carbon", carbonRoutes);
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Urban Mobility Backend Running",
  });
});

export default app;