import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getCarbonData } from "../services/carbonService";

export default function CarbonTracker() {
  const [carbon, setCarbon] = useState(null);

  useEffect(() => {
    getCarbonData().then(setCarbon).catch(console.error);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Carbon Tracker</h1>

        {carbon ? (
          <div className="bg-white p-8 rounded-2xl shadow max-w-sm">
            <p className="text-gray-500 text-sm uppercase tracking-wide">CO₂ Saved</p>
            <p className="text-6xl font-bold text-emerald-500 mt-2">
              {carbon.carbon_saved} kg
            </p>
            <div className="mt-4 bg-emerald-50 rounded-xl p-4">
              <p className="text-emerald-700 text-sm font-medium">
                🌱 Equivalent to planting {Math.round(carbon.carbon_saved / 21)} trees
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
}