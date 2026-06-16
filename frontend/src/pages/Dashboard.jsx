import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getDashboardData } from "../services/dashboardService";
import { getRecentTrips } from "../services/tripsService";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    walletBalance: 0,
    carbonSaved: 0,
    totalTrips: 0,
  });

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboard = await getDashboardData();
        setDashboardData(dashboard);

        const tripsData = await getRecentTrips();
        setTrips(tripsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full min-h-screen bg-slate-100">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Urban Mobility Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Sustainable travel insights and analytics
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl">💰</div>

            <h3 className="mt-4 opacity-90">
              Wallet Balance
            </h3>

            <p className="text-4xl font-bold mt-2">
              ₹{dashboardData.walletBalance}
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl">📈</div>

            <h3 className="mt-4 opacity-90">
              Monthly Expense
            </h3>

            <p className="text-4xl font-bold mt-2">
              ₹1,850
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl">🌱</div>

            <h3 className="mt-4 opacity-90">
              Carbon Saved
            </h3>

            <p className="text-4xl font-bold mt-2">
              {dashboardData.carbonSaved} kg
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl">🚌</div>

            <h3 className="mt-4 opacity-90">
              Trips Completed
            </h3>

            <p className="text-4xl font-bold mt-2">
              {dashboardData.totalTrips}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Recent Trips
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Source</th>
                  <th className="text-left p-4">Destination</th>
                  <th className="text-left p-4">Fare</th>
                  <th className="text-left p-4">Transport</th>
                </tr>
              </thead>

              <tbody>
                {trips.map((trip, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="p-4">{trip.source}</td>
                    <td className="p-4">{trip.destination}</td>
                    <td className="p-4">
                      ₹{trip.fare}
                    </td>
                    <td className="p-4">
                      {trip.transport_type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}