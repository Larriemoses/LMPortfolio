// src/components/icons/MediumIcon.tsx
import React from "react";

export const MediumIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 28,
  color = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 1043.63 592.71"
  >
    <path d="M588.67 296.36c0 163.64-131.65 296.36-294.34 296.36S0 460 0 296.36 131.65 0 294.34 0s294.33 132.72 294.33 296.36zm173.33 0c0 154.08-65.82 279.02-147 279.02s-147-124.94-147-279.02 65.82-279.01 147-279.01 147 124.94 147 279.01zm281.63 0c0 142.16-30.1 257.47-67.28 257.47s-67.28-115.31-67.28-257.47 30.1-257.46 67.28-257.46 67.28 115.31 67.28 257.46z" />
  </svg>
);
