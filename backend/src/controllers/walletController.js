import { getWalletData } from "../services/walletService.js";

export const getWallet = async (req, res) => {
  try {
    const data = await getWalletData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};