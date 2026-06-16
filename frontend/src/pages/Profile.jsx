import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getProfileData } from "../services/profileService";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfileData().then(setProfile).catch(console.error);
  }, []);
  console.log("Profile:", profile);
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full min-h-screen bg-slate-100">
        <h1 className="text-4xl font-bold mb-8">
          Profile
        </h1>

        {profile ? (
          <>
            <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                  {profile.full_name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-3xl font-bold">
                    {profile.full_name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {profile.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Account Status
                </h3>

                <p className="text-2xl font-bold text-green-600 mt-2">
                  Active
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Member Since
                </h3>

                <p className="text-2xl font-bold mt-2">
                  2025
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-gray-500">
                  Travel Preference
                </h3>

                <p className="text-2xl font-bold mt-2">
                  Public Transit
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-500">
            Loading Profile...
          </div>
        )}
      </div>
    </div>
  );
}