import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "Artificial Intelligence & Data Science Student",
  "Aspiring Software Developer",
  "Passionate About Building Innovative Technology Solutions",
];

// Place your own photo at frontend/public/fredcrop3.jpeg
const PHOTO_SRC = "/fredcrop3.jpeg";
// Place your resume (PDF or image) at frontend/public/fredrickresume.pdf (or .jpg)
const RESUME_SRC = "/fredrick_resume.pdf";
const RESUME_FILENAME = "fredrick_resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

function useTypewriter(roles) {
  const [text, setText] = useState("");
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setText(roles[0]);
      return;
    }
    let ri = 0, ci = 0, deleting = false, timer;

    const tick = () => {
      const full = roles[ri];
      if (!deleting) {
        ci++;
        setText(full.slice(0, ci));
        if (ci === full.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
      } else {
        ci--;
        setText(full.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }
      timer = setTimeout(tick, deleting ? 28 : 45);
    };
    tick();
    return () => clearTimeout(timer);
  }, [roles]);

  return text;
}

export default function Hero() {
  const roleText = useTypewriter(ROLES);
  const [resumeOpen, setResumeOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setResumeOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = RESUME_SRC;
    a.download = RESUME_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setResumeOpen(false);
  };

  return (
    <section className="hero" id="home">
      <div className="wrap hero-inner">
        {/* LEFT: circular photo */}
        <motion.div
          className="photo-stage"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <svg className="constellation" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="70" x2="120" y2="130" />
            <line x1="120" y1="130" x2="60" y2="220" />
            <line x1="60" y1="220" x2="140" y2="300" />
            <line x1="390" y1="60" x2="310" y2="120" />
            <line x1="310" y1="120" x2="380" y2="200" />
            <line x1="380" y1="200" x2="330" y2="290" />
            <line x1="330" y1="290" x2="260" y2="360" />
            <line x1="140" y1="300" x2="210" y2="380" />
            {[
              [30, 70, 0], [120, 130, 0.3], [60, 220, 0.6], [140, 300, 0.9],
              [390, 60, 0.2], [310, 120, 0.5], [380, 200, 0.8], [330, 290, 1.1],
              [260, 360, 1.4], [210, 380, 1.7],
            ].map(([cx, cy, d], i) => (
              <circle key={i} className="node" cx={cx} cy={cy} r="3" style={{ animationDelay: `${d}s` }} />
            ))}
          </svg>
          <div className="ring-rotate" />
          <div className="photo-frame">
            <div className="photo-inner">
              <img src={PHOTO_SRC} alt="Fredrick S" onError={(e) => (e.currentTarget.style.display = "none")} />
              <span className="photo-initials"></span>
            </div>
          </div>
          <div className="photo-badge"><span className="live-dot" /> Open to Work</div>
        </motion.div>

        {/* RIGHT: intro text */}
        <div className="hero-text">
          <motion.div className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0.1}>
            Portfolio / Erode, Tamil Nadu, India
          </motion.div>
          <motion.div className="hero-kicker" variants={fadeUp} initial="hidden" animate="show" custom={0.18}>
            Hi, I'm
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.24}>
            Fredrick <span className="accent">S</span>
          </motion.h1>
          <motion.div className="name-rule" initial={{ width: 0 }} animate={{ width: 64 }} transition={{ duration: 0.6, delay: 0.4 }} />

          <motion.div className="role-line" variants={fadeUp} initial="hidden" animate="show" custom={0.3}>
            <span>{roleText}</span><span className="cursor" />
          </motion.div>

          <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate="show" custom={0.36}>
            Artificial Intelligence and Data Science student with a strong foundation in programming,
            data analysis, and software development. Passionate about learning emerging technologies,
            solving real-world problems, and building innovative solutions.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp} initial="hidden" animate="show" custom={0.42} ref={wrapRef}>
            <a href="#contact" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Get In Touch →
            </a>

            <div className="resume-dropdown">
              <button
                className={`btn btn-ghost resume-toggle${resumeOpen ? " open" : ""}`}
                onClick={() => setResumeOpen((o) => !o)}
              >
                Check Resume
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </button>

              <AnimatePresence>
                {resumeOpen && (
                  <motion.div
                    className="resume-menu"
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <a
                      className="resume-menu-item"
                      href={RESUME_SRC}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setResumeOpen(false)}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
                      View Resume
                    </a>
                    <button className="resume-menu-item" onClick={handleDownload}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" /></svg>
                      Download Resume
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div className="hero-socials" variants={fadeUp} initial="hidden" animate="show" custom={0.48}>
            <a className="social-btn" href="https://github.com/fredrick131" target="_blank" rel="noopener" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
            </a>
            <a className="social-btn" href="https://www.linkedin.com/in/fredrick-s-027a8a350" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
            </a>
            <a className="social-btn" href="mailto:fredrickfredrick1156@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5h18v14H3z" /><path d="M3 6l9 7 9-7" /></svg>
            </a>
            <a className="social-btn" href="tel:9952330613" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="mouse"><div className="wheel" /></div>
      </div>
    </section>
  );
}
