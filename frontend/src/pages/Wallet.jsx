import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getWalletData } from "../services/walletService";

export default function Wallet() {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    getWalletData().then(setWallet).catch(console.error);
  }, []);
  console.log("Wallet:", wallet);
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full min-h-screen bg-slate-100">
        <h1 className="text-4xl font-bold mb-8">
          Wallet
        </h1>

        {wallet ? (
          <>
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-8 rounded-3xl shadow-lg max-w-2xl">
              <p className="uppercase tracking-widest text-sm opacity-80">
                Available Balance
              </p>

              <h2 className="text-6xl font-bold mt-4">
                ₹{Number(wallet.balance).toLocaleString("en-IN")}
              </h2>

              <p className="mt-4 opacity-80">
                Synced with PostgreSQL database
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Wallet Status
                </h3>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  Active
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Last Sync
                </h3>

                <p className="text-2xl font-bold mt-2">
                  Live
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Currency
                </h3>

                <p className="text-2xl font-bold mt-2">
                  INR
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-500">
            Loading Wallet...
          </div>
        )}
      </div>
    </div>
  );
}