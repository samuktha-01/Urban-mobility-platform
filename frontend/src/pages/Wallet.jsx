import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getWalletData } from "../services/walletService";

export default function Wallet() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    getWalletData().then(setWallet).catch(console.error);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Wallet</h1>

        {wallet ? (
          <div className="bg-white p-8 rounded-2xl shadow max-w-sm">
            <p className="text-gray-500 text-sm uppercase tracking-wide">Current Balance</p>
            <p className="text-6xl font-bold text-green-600 mt-2">
              ₹{Number(wallet.balance).toLocaleString("en-IN")}
            </p>
            <p className="text-gray-400 mt-4 text-sm">Updated live from database</p>
          </div>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
}