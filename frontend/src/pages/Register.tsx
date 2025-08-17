import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // ✅ for redirect

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/users/register", form);
      localStorage.setItem("token", data.token);

      // ✅ redirect to profile page after success
      navigate("/profile", { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        className="w-full mb-2 p-2 border"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        className="w-full mb-2 p-2 border"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        className="w-full mb-2 p-2 border"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
