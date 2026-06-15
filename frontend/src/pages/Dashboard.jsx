import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getDashboardData } from "../services/dashboardService";
export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    walletBalance: 0,
    carbonSaved: 0,
    totalTrips: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold">Dashboard</h1>

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
      </div>
    </div>
  );
}