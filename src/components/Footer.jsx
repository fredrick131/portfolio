export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      <div className="wrap">
        <a className="back-top" aria-label="Back to top" onClick={scrollTop}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
        </a>
        <div>© {new Date().getFullYear()} Fredrick S. Built with intention, powered by <span style={{ color: "var(--sky-400)" }}>curiosity</span>.</div>
      </div>
    </footer>
  );
}
