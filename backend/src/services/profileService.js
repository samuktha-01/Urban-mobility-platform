import pool from "../config/db.js";

export const getProfileData = async () => {
  const result = await pool.query(
    "SELECT full_name, email FROM users ORDER BY id DESC LIMIT 1"
  );

  return result.rows[0];
};