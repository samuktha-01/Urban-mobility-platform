import { getProfileData } from "../services/profileService.js";

export const getProfile = async (req, res) => {
  try {
    const data = await getProfileData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};