import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import RoutePlanner from "../pages/RoutePlanner";
import Wallet from "../pages/Wallet";
import Analytics from "../pages/Analytics";
import CarbonTracker from "../pages/CarbonTracker";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/route-planner" element={<RoutePlanner />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/carbon" element={<CarbonTracker />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}