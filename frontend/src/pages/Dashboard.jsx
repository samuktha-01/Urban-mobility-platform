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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Wallet Balance</h3>
            <p className="text-3xl font-bold mt-2">
              ₹{dashboardData.walletBalance}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Monthly Expense</h3>
            <p className="text-3xl font-bold mt-2">Coming Soon</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Carbon Saved</h3>
            <p className="text-3xl font-bold mt-2">
              {dashboardData.carbonSaved} kg
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Trips This Month</h3>
            <p className="text-3xl font-bold mt-2">
              {dashboardData.totalTrips}
            </p>
          </div>
        </div>

        {/* Recent Trips */}
        <div className="bg-white p-6 rounded-xl shadow mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Recent Trips
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Source</th>
                  <th className="text-left p-3">Destination</th>
                  <th className="text-left p-3">Fare</th>
                  <th className="text-left p-3">Transport</th>
                </tr>
              </thead>

              <tbody>
                {trips.map((trip, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-3">{trip.source}</td>
                    <td className="p-3">{trip.destination}</td>
                    <td className="p-3">₹{trip.fare}</td>
                    <td className="p-3">
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