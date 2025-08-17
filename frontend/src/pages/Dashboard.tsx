import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/users/me")
      .then(({ data }) => setUser(data))
      .catch(() => navigate("/login"));
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <p className="text-center mt-6">Loading dashboard...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Dashboard</h1>
        <div className="flex gap-4">
          <a href="/profile" className="text-blue-600 hover:underline">
            Profile
          </a>
          <a href="/blogs" className="text-blue-600 hover:underline">
            Blogs
          </a>
          <button onClick={logout} className="text-red-600 hover:underline">
            Logout
          </button>
        </div>
      </nav>

      {/* User Card */}
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md text-center">
        <img
          src={user.profilePic || "/default-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border mb-3 object-cover"
        />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.title}</p>
        <p className="mt-2 text-gray-700">{user.bio}</p>
        {user.isVerified && (
          <p className="text-green-600 mt-2">✅ Profile Verified</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
