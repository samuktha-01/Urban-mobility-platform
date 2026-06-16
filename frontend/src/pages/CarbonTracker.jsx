import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getCarbonData } from "../services/carbonService";

export default function CarbonTracker() {
  const [carbon, setCarbon] = useState(null);

  useEffect(() => {
    getCarbonData().then(setCarbon).catch(console.error);
  }, []);
  console.log("Carbon:", carbon);
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full min-h-screen bg-slate-100">
        <h1 className="text-4xl font-bold mb-8">
          Carbon Tracker
        </h1>

        {carbon ? (
          <>
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-8 rounded-3xl shadow-lg max-w-2xl">
              <p className="uppercase tracking-widest text-sm opacity-80">
                Carbon Saved
              </p>

              <h2 className="text-6xl font-bold mt-4">
                {carbon.carbon_saved} kg
              </h2>

              <p className="mt-4 opacity-80">
                Reduced emissions through sustainable travel
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Trees Equivalent
                </h3>

                <p className="text-3xl font-bold text-green-600 mt-2">
                  🌳 {Math.max(1, Math.round(carbon.carbon_saved / 21))}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Eco Score
                </h3>

                <p className="text-3xl font-bold text-emerald-600 mt-2">
                  92%
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Status
                </h3>

                <p className="text-3xl font-bold text-green-600 mt-2">
                  Excellent
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 mt-8">
              <h3 className="text-xl font-bold mb-3">
                Environmental Impact
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Your public transport usage and sustainable mobility choices
                have helped reduce approximately{" "}
                <span className="font-bold text-green-600">
                  {carbon.carbon_saved} kg
                </span>{" "}
                of carbon emissions compared to traditional commuting methods.
              </p>
            </div>
          </>
        ) : (
          <div className="text-gray-500">
            Loading Carbon Data...
          </div>
        )}
      </div>
    </div>
  );
}