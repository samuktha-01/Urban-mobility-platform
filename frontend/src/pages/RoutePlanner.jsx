import { useState } from "react";
import Sidebar from "../layout/Sidebar";

export default function RoutePlanner() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [route, setRoute] = useState(null);

  const handleSearch = () => {
    if (!source || !destination) return;

    setRoute({
      distance: "12 km",
      duration: "22 mins",
      transport: "Metro + Bus",
      carbonSaved: "2.4 kg CO₂",
      fare: "₹45",
    });
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full min-h-screen bg-slate-100">
        <h1 className="text-4xl font-bold mb-8">
          Route Planner
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border rounded-xl p-4"
            />
          </div>

          <button
            onClick={handleSearch}
            className="mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Find Route
          </button>
        </div>

        {/* Route Result */}
        {route && (
          <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Recommended Route
            </h2>

            <div className="grid grid-cols-4 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-gray-500">Distance</p>
                <p className="text-2xl font-bold">
                  {route.distance}
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-gray-500">Duration</p>
                <p className="text-2xl font-bold">
                  {route.duration}
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-gray-500">Fare</p>
                <p className="text-2xl font-bold">
                  {route.fare}
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl">
                <p className="text-gray-500">Carbon Saved</p>
                <p className="text-2xl font-bold text-green-600">
                  {route.carbonSaved}
                </p>
              </div>
            </div>

            {/* Suggested Transport */}
            <div className="mt-6 bg-blue-50 border border-blue-100 p-5 rounded-2xl">
              <h3 className="font-bold text-lg">
                Suggested Transport
              </h3>

              <p className="mt-2 text-gray-700 text-lg font-semibold">
                🚇 {route.transport}
              </p>

              {/* Smart Recommendation */}
              <div className="mt-6 bg-white rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-lg text-blue-700 mb-3">
                  🤖 Smart Recommendation
                </h4>

                <p className="text-gray-700">
                  Metro + Bus is the most sustainable route for this journey.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">
                      Cost Saved
                    </p>
                    <p className="font-bold text-green-600">
                      ₹80
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">
                      CO₂ Reduced
                    </p>
                    <p className="font-bold text-emerald-600">
                      2.4 kg
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">
                      Time Saved
                    </p>
                    <p className="font-bold text-blue-600">
                      12 mins
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-green-100 text-green-700 px-4 py-3 rounded-lg font-medium">
                  🌱 Eco Friendly Route — equivalent to reducing emissions from a short car trip.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}