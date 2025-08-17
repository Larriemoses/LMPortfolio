import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

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
      .catch(() => setMessage("⚠️ Failed to load profile"));
  }, []);

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
      setMessage("✅ Profile updated");
    } catch {
      setMessage("❌ Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (!user) return <p className="text-center mt-6">Loading profile...</p>;

  const displayPic = previewUrl || form.profilePic || "/default-avatar.png";

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={displayPic}
            alt="Profile"
            className="w-28 h-28 rounded-full border object-cover"
          />
          {user.isVerified ? (
            <span className="mt-2 text-green-600">✅ Verified</span>
          ) : (
            <span className="mt-2 text-gray-500">⏳ Not verified</span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <input
            className="w-full p-2 border rounded"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className="w-full p-2 border rounded"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            className="w-full p-2 border rounded"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            className="w-full p-2 border rounded"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New password (optional)"
          />
          <textarea
            className="md:col-span-2 w-full p-2 border rounded min-h-[90px]"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Short bio..."
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="md:col-span-1 w-full p-2 border rounded"
          />
          <input
            className="md:col-span-1 w-full p-2 border rounded"
            name="profilePic"
            value={form.profilePic}
            onChange={handleChange}
            placeholder="Or paste image URL"
          />
          <button
            type="submit"
            disabled={saving}
            className="md:col-span-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Back to Dashboard
        </button>

        {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
      </div>
    </div>
  );
};

export default Profile;
