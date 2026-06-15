import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 p-6">
      <h2 className="text-2xl font-bold mb-10">
        Urban Mobility
      </h2>

      <ul className="space-y-4 text-lg">
        <li>
          <Link
            to="/"
            className="block hover:text-blue-400 transition"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/route-planner"
            className="block hover:text-blue-400 transition"
          >
            Route Planner
          </Link>
        </li>

        <li>
          <Link
            to="/wallet"
            className="block hover:text-blue-400 transition"
          >
            Wallet
          </Link>
        </li>

        <li>
          <Link
            to="/analytics"
            className="block hover:text-blue-400 transition"
          >
            Analytics
          </Link>
        </li>

        <li>
          <Link
            to="/carbon"
            className="block hover:text-blue-400 transition"
          >
            Carbon Tracker
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className="block hover:text-blue-400 transition"
          >
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}