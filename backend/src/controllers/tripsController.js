import pool from "../config/db.js";

export const getRecentTrips = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT source, destination, fare, transport_type
      FROM trips
      WHERE user_id = 1
      ORDER BY id DESC
      LIMIT 5
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch trips",
    });
  }
};