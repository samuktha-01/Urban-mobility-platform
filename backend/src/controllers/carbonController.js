import { getCarbonData } from "../services/carbonService.js";

export const getCarbon = async (req, res) => {
  try {
    const data = await getCarbonData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};