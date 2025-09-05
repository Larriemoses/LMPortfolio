import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { palette } from "../data/data";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Particles will be pushed away from the mouse
        },
        onClick: {
          enable: false, // You can set this to 'true' to add a click effect
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 100, // How far particles will be repulsed
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: palette.primaryAccent, // The mint green color for the particles
        animation: {
          enable: true,
          speed: 10,
          sync: false,
          startValue: "random",
          hues: { min: 0, max: 360 },
          saturations: { min: 0, max: 100 },
        },
      },
      shape: {
        type: "circle", // Simple circle shape
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3, // Size of the particles
        random: true,
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150, // Max distance for a link to form between particles
        color: palette.secondaryAccent, // The cyan glow for the links
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig as any}
      className="absolute inset-0 z-0 w-full h-full"
    />
  );
};

export default ParticlesBackground;
