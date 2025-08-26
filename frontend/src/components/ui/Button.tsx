import React, { type JSX } from "react";

interface Props {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

function Button({ label, href, variant = "primary" }: Props) {
  const styles = {
    primary: {
      backgroundColor: "var(--accent)",
      color: "#fff",
      border: "none",
    },
    secondary: {
      backgroundColor: "var(--card-bg)",
      color: "var(--text-primary)",
      border: "1px solid var(--border)",
    },
  };

  return (
    <a
      href={href}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: 500,
        display: "inline-block",
        ...styles[variant],
      }}
    >
      {label}
    </a>
  );
}

export default Button;
