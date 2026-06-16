import axios from "axios";

export const getProfileData = async () => {
  const res = await axios.get("http://localhost:5000/api/profile");
  return res.data;
};