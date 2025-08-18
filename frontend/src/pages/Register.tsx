import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/users/register", form);
      localStorage.setItem("token", data.token);
      navigate("/profile", { replace: true });
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1321] text-[#f0ebd8] font-[Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md p-10 rounded-xl bg-[#1d2d44] border border-[#3e5c76] shadow-lg"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2 text-[#f0ebd8]">
          Create Account
        </h2>
        <p className="text-[#748cab] text-center mb-8 text-sm">
          Join as a writer and start contributing
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            className="w-full px-4 py-3 rounded-lg bg-[#0d1321] border border-[#3e5c76] text-[#f0ebd8] placeholder-[#748cab] focus:outline-none focus:border-[#748cab] focus:ring-1 focus:ring-[#748cab] transition-all"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-[#0d1321] border border-[#3e5c76] text-[#f0ebd8] placeholder-[#748cab] focus:outline-none focus:border-[#748cab] focus:ring-1 focus:ring-[#748cab] transition-all"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-3 rounded-lg bg-[#0d1321] border border-[#3e5c76] text-[#f0ebd8] placeholder-[#748cab] focus:outline-none focus:border-[#748cab] focus:ring-1 focus:ring-[#748cab] transition-all"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-[#f0ebd8] bg-[#3e5c76] hover:bg-[#748cab] transition-all"
          >
            Register
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6 text-sm text-[#748cab]">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#f0ebd8] hover:text-[#3e5c76] transition-colors font-medium"
          >
            Login
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
