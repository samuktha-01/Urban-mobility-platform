import axios from "axios";

export const getCarbonData = async () => {
  const res = await axios.get("http://localhost:5000/api/carbon");
  return res.data;
};