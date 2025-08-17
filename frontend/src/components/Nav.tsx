import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Navbar Component: Now with icons and a deeper black color.
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SVG icons for the navigation links
  const homeIcon = (
    <svg
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
  const aboutIcon = (
    <svg
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 14.2c-3.14 0-6.1-1.57-8-4 1.9-2.43 4.86-4 8-4s6.1 1.57 8 4c-1.9 2.43-4.86 4-8 4z"></path>
    </svg>
  );
  const servicesIcon = (
    <svg
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-8.6"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
  const portfolioIcon = (
    <svg
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 17h16M4 12h16M4 7h16"></path>
    </svg>
  );
  const blogIcon = (
    <svg
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9"></polyline>
    </svg>
  );
  const contactIcon = (
    <svg
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L2 22l1.5-3.5a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 7.6 4.7z"></path>
    </svg>
  );

  return (
    <nav className="fixed w-full z-50 bg-black shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo or Your Name. Change "My Portfolio" to your name. */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-cyan-400"
        >
          My Portfolio
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">{homeIcon} Home</NavLink>
          <NavLink to="/about">{aboutIcon} About</NavLink>
          <NavLink to="/services">{servicesIcon} Services</NavLink>
          <NavLink to="/portfolio">{portfolioIcon} Portfolio</NavLink>
          <NavLink to="/blog">{blogIcon} Blog</NavLink>
          <NavLink to="/contact">{contactIcon} Contact</NavLink>
          <Link
            to="/writer-login"
            className="px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full hover:shadow-xl hover:from-cyan-300 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Writer's Login
          </Link>
        </div>
      </div>

      {/* Mobile menu - Conditionally rendered based on 'isOpen' state */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black bg-opacity-90 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center py-6 space-y-5">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            {homeIcon} Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            {aboutIcon} About
          </NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>
            {servicesIcon} Services
          </NavLink>
          <NavLink to="/portfolio" onClick={() => setIsOpen(false)}>
            {portfolioIcon} Portfolio
          </NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>
            {blogIcon} Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            {contactIcon} Contact
          </NavLink>
          <Link
            to="/writer-login"
            onClick={() => setIsOpen(false)}
            className="w-4/5 text-center px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full hover:shadow-xl hover:from-cyan-300 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Writer's Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

// NavLink Component: Reusable link with hover effects and glowing underline
const NavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative flex items-center text-gray-300 font-medium hover:text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
  >
    {children}
  </Link>
);

// AnimatedSection Component: Custom logic for scroll-triggered animation.
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

// HomePage Component: Updated with a sleek, dark-themed design, particle animation, and skill sections.
const HomePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adjust canvas size to fit window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle system logic
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        ctx!.fillStyle = `rgba(100, 255, 255, ${this.size / 5})`; // Cyan glowing particles
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const particles: Particle[] = [];
    const maxParticles = 50;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (particles.length < maxParticles) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-gray-200 min-h-screen pt-20 font-sans antialiased">
      {/* Hero Section with interactive particles */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
        <div className="relative z-10 p-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Innovate with Your Name
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-400 mb-8 max-w-3xl mx-auto">
            A full-stack developer and creative technologist specializing in
            intuitive design, automation, and AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full transition-all transform hover:scale-105 shadow-xl"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 font-semibold text-white border-2 border-gray-600 rounded-full transition-all transform hover:scale-105 hover:bg-gray-800 hover:border-white"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section - Now with scroll-triggered animations */}
      <section className="py-20 px-8 relative overflow-hidden bg-gray-950">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-5xl font-bold text-white mb-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            My Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Full-Stack Card */}
            <AnimatedSection>
              <div className="group skill-card bg-black border border-gray-700 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-400/20 shadow-lg">
                <div className="text-6xl text-cyan-400 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-gray-400">
                  Building scalable and robust applications from the ground up
                  using the MERN stack with TypeScript.
                </p>
              </div>
            </AnimatedSection>

            {/* SEO & Automation Card */}
            <AnimatedSection>
              <div className="group skill-card bg-black border border-gray-700 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-purple-400 hover:shadow-purple-400/20 shadow-lg">
                <div className="text-6xl text-purple-400 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.35 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3.5c1.45 0 2.8.62 3.8 1.62l.7.7.7-.7C14.7 4.12 16.05 3.5 17.5 3.5A5.5 5.5 0 0 1 23 8.5c0 3.78-3.4 6.85-8.55 11.53z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  SEO & AI Automation
                </h3>
                <p className="text-gray-400">
                  Optimizing web presence and automating business processes with
                  AI-driven strategies.
                </p>
              </div>
            </AnimatedSection>

            {/* Design Card */}
            <AnimatedSection>
              <div className="group skill-card bg-black border border-gray-700 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-pink-400 hover:shadow-pink-400/20 shadow-lg">
                <div className="text-6xl text-pink-400 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17 17.59 6.59 19 8l-9 9z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-400">
                  Crafting intuitive and visually appealing user interfaces that
                  are a joy to interact with.
                </p>
              </div>
            </AnimatedSection>

            {/* AI Enthusiast Card */}
            <AnimatedSection>
              <div className="group skill-card bg-black border border-gray-700 rounded-xl p-8 transform transition-all duration-500 hover:scale-105 hover:border-emerald-400 hover:shadow-emerald-400/20 shadow-lg">
                <div className="text-6xl text-emerald-400 mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="15"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 11l-4 4-4-4"></path>
                    <line x1="12" y1="15" x2="12" y2="7"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Automation Expert
                </h3>
                <p className="text-gray-400">
                  Automating complex tasks and building intelligent systems to
                  streamline workflows.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Placeholder for future sections */}
      <div className="h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-2xl text-gray-700 animate-pulse">
          More sections to come...
        </p>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here for other pages */}
      </Routes>
    </Router>
  );
}

// NOTE: You will need to add the following Tailwind CSS animations and keyframes
// to your CSS file (e.g., src/index.css or src/App.css) to see the effects.
// @keyframes fade-in-up {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
// .animate-fade-in-up {
//   animation: fade-in-up 0.8s ease-out forwards;
// }
