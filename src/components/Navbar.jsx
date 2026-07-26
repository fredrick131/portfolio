import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "../hooks/useScrollSpy.js";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { active, scrolled } = useScrollSpy(NAV_ITEMS.map((i) => i.id));

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav-inner">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>
            <span className="logo-mark">FS</span>
            <span className="logo-text">
              <span className="logo-name">Fredrick S</span>
              <span className="logo-tag">Portfolio</span>
            </span>
          </a>

          <div className="nav-right">
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    className={active === item.id ? "nav-link active" : "nav-link"}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark / light toggle — placed to the left of the Let's Talk button */}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark / light mode">
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="4.5" />
                  <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
                </svg>
              )}
            </button>

            <a className="nav-cta" onClick={() => scrollTo("contact")}>Let's Talk</a>

            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
