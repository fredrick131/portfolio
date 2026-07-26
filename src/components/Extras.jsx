import Reveal from "./Reveal.jsx";

const SOFT_SKILLS = [
  "Problem Solving & Analytical Thinking",
  "Communication Skills",
  "Team Collaboration",
  "Adaptability & Quick Learning",
  "Time Management",
];

export default function Extras() {
  return (
    <section className="extras">
      <div className="wrap extras-grid">
        <Reveal className="panel">
          <h3>Soft Skills</h3>
          <div className="chip-row">
            {SOFT_SKILLS.map((s) => <span className="chip" key={s}>{s}</span>)}
          </div>
        </Reveal>
        <Reveal className="panel" delay={0.1}>
          <h3>Languages</h3>
          <div className="lang-item"><span>Tamil</span><span>NATIVE</span></div>
          <div className="lang-item"><span>English</span><span>PROFESSIONAL</span></div>
        </Reveal>
      </div>
    </section>
  );
}
