import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import pool from "./config/db.js";
console.log(typeof process.env.DB_PASSWORD);
console.log(process.env.DB_PASSWORD);

pool.query("SELECT NOW()")
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});