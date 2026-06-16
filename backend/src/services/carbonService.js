import pool from "../config/db.js";

export const getCarbonData = async () => {
  const result = await pool.query(
    "SELECT carbon_saved FROM carbon_tracker ORDER BY id DESC LIMIT 1"
  );
  return result.rows[0];
};