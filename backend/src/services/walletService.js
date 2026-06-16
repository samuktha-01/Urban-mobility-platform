import pool from "../config/db.js";

export const getWalletData = async () => {
  const result = await pool.query(
    "SELECT balance FROM wallet ORDER BY id DESC LIMIT 1"
  );
  return result.rows[0];
};