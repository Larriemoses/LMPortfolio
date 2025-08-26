import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";

const navItems = ["Home", "Services", "Portfolio", "Blog", "About", "Contact"];

function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text-primary)",
        borderBottom: "1px solid var(--border)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: 600 }}>Olarewaju Adebulu</div>
      <nav>
        <ul
          style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  transition: "color 0.2s",
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <ThemeToggle />
        <Button label="Work With Me" href="/contact" />
      </div>
    </header>
  );
}

export default Navbar;
