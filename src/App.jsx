import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Extras from "./components/Extras.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Skills />
          <Education />
          <Certifications />
          <Extras />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
