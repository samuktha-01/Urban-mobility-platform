export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-6">
      <h2 className="text-2xl font-bold mb-10">
        Urban Mobility
      </h2>

      <ul className="space-y-4">
        <li>Dashboard</li>
        <li>Route Planner</li>
        <li>Wallet</li>
        <li>Analytics</li>
        <li>Carbon Tracker</li>
        <li>Ride Share</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}