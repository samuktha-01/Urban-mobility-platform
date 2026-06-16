import Sidebar from "../layout/Sidebar";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const tripData = [
  { month: "Jan", trips: 12 },
  { month: "Feb", trips: 18 },
  { month: "Mar", trips: 25 },
  { month: "Apr", trips: 30 },
  { month: "May", trips: 38 },
  { month: "Jun", trips: 42 },
];

const carbonData = [
  { month: "Jan", carbon: 2 },
  { month: "Feb", carbon: 4 },
  { month: "Mar", carbon: 7 },
  { month: "Apr", carbon: 10 },
  { month: "May", carbon: 14 },
  { month: "Jun", carbon: 18 },
];

export default function Analytics() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full min-h-screen bg-slate-100">
        <h1 className="text-4xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">Total Trips</h3>
            <p className="text-4xl font-bold mt-2">42</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">Carbon Saved</h3>
            <p className="text-4xl font-bold mt-2">18.4 kg</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">Eco Score</h3>
            <p className="text-4xl font-bold mt-2">92%</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">
              Monthly Trips
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tripData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="trips" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">
              Carbon Savings Trend
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={carbonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="carbon"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}