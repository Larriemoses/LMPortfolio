import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserEdit,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    title: "",
    bio: "",
    profilePic: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const previewUrl = useMemo(
    () => (file ? URL.createObjectURL(file) : ""),
    [file]
  );

  useEffect(() => {
    api
      .get("/users/me")
      .then(({ data }) => {
        setUser(data);
        setForm({
          name: data.name || "",
          email: data.email || "",
          password: "",
          title: data.title || "",
          bio: data.bio || "",
          profilePic: data.profilePic || "",
        });
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("title", form.title);
      formData.append("bio", form.bio);
      if (form.password) formData.append("password", form.password);
      if (file) formData.append("profilePic", file);
      else if (form.profilePic) formData.append("profilePic", form.profilePic);

      const { data } = await api.put("/users/me", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUser(data);
      setForm({
        name: data.name,
        email: data.email,
        password: "",
        title: data.title,
        bio: data.bio,
        profilePic: data.profilePic,
      });
      setFile(null);
      setMessage("✅ Profile updated successfully!");
      setIsModalOpen(false); // Close modal on success
    } catch {
      setMessage("❌ Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-300">
        <p>Loading profile...</p>
      </div>
    );

  const displayPic = user.profilePic || "/default-avatar.png";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-xl w-full mx-auto p-8 bg-gray-800 rounded-3xl shadow-lg border border-gray-700 text-center relative">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">My Profile</h2>

        {/* Display Profile */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={displayPic}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
            {user.isVerified && (
              <FaCheckCircle
                className="absolute bottom-1 right-1 text-green-500 bg-gray-800 rounded-full"
                size={24}
              />
            )}
          </div>
          <h3 className="text-2xl font-semibold text-blue-300">{user.name}</h3>
          <p className="text-gray-400 font-medium">{user.title}</p>
          <p className="mt-4 text-gray-300 max-w-sm">{user.bio}</p>
          <p className="mt-2 text-gray-500">{user.email}</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors duration-300 flex items-center justify-center mx-auto"
        >
          <FaUserEdit className="mr-2" /> Update Profile
        </button>

        {message && (
          <p
            className={`mt-4 text-center ${
              message.startsWith("✅") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 w-full md:w-auto bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          Back to Dashboard
        </button>
      </div>

      {/* Update Profile Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-xl shadow-2xl p-6 w-full max-w-2xl border border-gray-700"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
                <h3 className="text-2xl font-bold text-blue-300">
                  Edit Profile
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimesCircle size={24} />
                </button>
              </div>

              <div className="flex flex-col items-center mb-6">
                <img
                  src={previewUrl || user.profilePic || "/default-avatar.png"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-600"
                />
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    Title
                  </label>
                  <input
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    New Password
                  </label>
                  <input
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    id="password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="New password (optional)"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    Bio
                  </label>
                  <textarea
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 min-h-[90px] focus:ring focus:ring-blue-500 focus:border-blue-500"
                    id="bio"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Short bio..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="profilePicFile"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    Upload Profile Picture
                  </label>
                  <input
                    type="file"
                    id="profilePicFile"
                    accept="image/*"
                    onChange={handleFile}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="profilePicUrl"
                    className="block text-sm font-semibold mb-1 text-gray-400"
                  >
                    Or Paste Image URL
                  </label>
                  <input
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring focus:ring-blue-500 focus:border-blue-500"
                    id="profilePicUrl"
                    name="profilePic"
                    value={form.profilePic}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="md:col-span-2 w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {saving ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" /> Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
