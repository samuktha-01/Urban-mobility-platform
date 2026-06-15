import pool from "../config/db.js";

export const getDashboard = async (req, res) => {
  try {
    const wallet = await pool.query(
      "SELECT balance FROM wallet WHERE user_id = 1"
    );

    const carbon = await pool.query(
      "SELECT carbon_saved FROM carbon_tracker WHERE user_id = 1"
    );

    const trips = await pool.query(
      "SELECT COUNT(*) FROM trips WHERE user_id = 1"
    );

    res.json({
      walletBalance: wallet.rows[0].balance,
      carbonSaved: carbon.rows[0].carbon_saved,
      totalTrips: trips.rows[0].count,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};