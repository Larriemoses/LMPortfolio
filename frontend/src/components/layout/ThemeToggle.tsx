import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        padding: "0.5rem 1rem",
        border: "1px solid var(--border)",
        backgroundColor: "var(--card-bg)",
        color: "var(--text-secondary)",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default ThemeToggle;
