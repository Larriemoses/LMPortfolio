import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/users/login", form);
      localStorage.setItem("token", data.token);

      // ✅ go to dashboard instead of profile
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Login</h2>
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
        Login
      </button>
    </form>
  );
};

export default Login;
