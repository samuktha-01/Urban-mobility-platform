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
            className="mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold"
          >
            Find Route
          </button>
        </div>

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

            <div className="mt-6 bg-blue-50 border border-blue-100 p-5 rounded-2xl">
              <h3 className="font-bold text-lg">
                Suggested Transport
              </h3>

              <p className="mt-2 text-gray-700">
                {route.transport}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}