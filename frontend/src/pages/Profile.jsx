import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getProfileData } from "../services/profileService";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfileData().then(setProfile).catch(console.error);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Profile</h1>

        {profile ? (
          <div className="bg-white p-8 rounded-2xl shadow max-w-md">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
              {profile.name?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-500 mt-1">{profile.email}</p>
            {profile.phone && (
              <p className="text-gray-500 mt-1">{profile.phone}</p>
            )}
          </div>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
}