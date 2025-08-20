// src/components/AnimatedSkills.tsx
import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { heroIcons, palette } from "../data/data";

const AnimatedSkills: React.FC = () => {
  const [activeIconId, setActiveIconId] = useState<string | null>(null);
  const controls = useAnimation();
  const rotationDuration = 20; // 20 seconds for a full rotation

  // Set responsive icon radius
  const getRadius = () => {
    return window.innerWidth < 768 ? 80 : 120; // Reduced radius for a more compact layout
  };
  const iconRadius = getRadius();

  useEffect(() => {
    // Start the infinite rotation animation
    controls.start({
      rotate: 360,
      transition: {
        duration: rotationDuration,
        ease: "linear",
        repeat: Infinity,
      },
    });

    // Check for the active icon at the top
    const interval = setInterval(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) {
        const style = window.getComputedStyle(spinner);
        const transform = style.transform;
        const matrix = new DOMMatrix(transform);
        const rotateZ = Math.round(
          Math.atan2(matrix.m12, matrix.m11) * (180 / Math.PI)
        );

        heroIcons.forEach((item, index) => {
          const baseAngle = (360 / heroIcons.length) * index;
          const currentAngle = (baseAngle + rotateZ) % 360;

          if (currentAngle > 350 || (currentAngle >= 0 && currentAngle < 10)) {
            setActiveIconId(item.id);
          }
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [controls]);

  // Find the active icon's data
  const activeIcon = activeIconId
    ? heroIcons.find((item) => item.id === activeIconId)
    : null;

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto"
      style={{ height: `50vh` }} // Set component height to 50vh
    >
      {/* Central Profile Picture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20">
        <div
          className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden" // Reduced size
          style={{
            boxShadow: `0 0 0 4px ${palette.accent}`,
          }}
        >
          <img
            src="https://res.cloudinary.com/dvl2r3bdw/image/upload/v1755525952/1749898239122_v2xyue.jpg"
            alt="Olarewaju Adebulu"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Orbiting Icons Container (Spinner) */}
      <motion.div
        id="spinner"
        className="absolute inset-0"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            rotate: 360,
            transition: {
              duration: rotationDuration,
              ease: "linear",
              repeat: Infinity,
            },
          })
        }
      >
        {heroIcons
          .filter((item) => item.label !== "Quick Navigation")
          .map((item, index) => {
            const angle = (2 * Math.PI * index) / (heroIcons.length - 1); // Adjusted angle calculation
            const top = Math.sin(angle) * iconRadius;
            const left = Math.cos(angle) * iconRadius;

            const isActive = item.id === activeIconId;

            return (
              <motion.a
                key={item.id}
                href={item.link}
                target={item.link.startsWith("#") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="absolute w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer p-1.5" // Reduced size
                style={{
                  top: `calc(50% + ${top}px)`,
                  left: `calc(50% + ${left}px)`,
                  backgroundColor: isActive
                    ? item.color + "50"
                    : palette.subtle + "20",
                  borderColor: isActive ? item.color : palette.subtle,
                  borderWidth: 2,
                  borderStyle: "solid",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  style={{
                    color: isActive ? item.color : palette.accent,
                  }}
                  rotate={-360}
                >
                  {item.icon}
                </motion.div>
              </motion.a>
            );
          })}
      </motion.div>

      {/* Dynamic Active Icon Label and Button at the bottom */}
      <div className="absolute text-center" style={{ bottom: "25px" }}>
        <p
          className="font-bold text-xs md:text-sm"
          style={{ color: palette.text }}
        >
          Get in Touch
        </p>
        <AnimatePresence mode="wait">
          {activeIcon && (
            <motion.a
              key={activeIcon.id}
              href={activeIcon.link}
              target={activeIcon.link.startsWith("#") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center space-x-1 font-normal text-xs px-2 py-1 rounded-full cursor-pointer" // Reduced size
              style={{
                color: palette.text,
                backgroundColor: activeIcon.color,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: [0, -5, 0],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div style={{ transform: "translateY(1px)" }}>
                {activeIcon.icon}
              </div>
              <span>{activeIcon.label}</span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedSkills;
