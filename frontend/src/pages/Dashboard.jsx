import Sidebar from "../layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Wallet Balance</h3>
            <p className="text-3xl font-bold mt-2">₹2,500</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Monthly Expense</h3>
            <p className="text-3xl font-bold mt-2">₹1,850</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Carbon Saved</h3>
            <p className="text-3xl font-bold mt-2">18.4 kg</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Trips This Month</h3>
            <p className="text-3xl font-bold mt-2">42</p>
          </div>
        </div>
      </div>
    </div>
  );
}