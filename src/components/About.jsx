import Reveal from "./Reveal.jsx";

const STATS = [
  { num: "2024–27", label: "B.Sc. AI & Data Science" },
  { num: "4+", label: "Programming Languages" },
  { num: "4", label: "Certifications Earned" },
  { num: "2", label: "Languages Spoken" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <Reveal className="eyebrow">About Me</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Building a foundation in AI &amp; software craft
        </Reveal>
        <Reveal className="section-sub" delay={0.1}>
          A quick look at who I am and what I'm working toward.
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text" delay={0.15}>
            <p>I'm an Artificial Intelligence and Data Science student with a strong foundation in programming, data analysis, and software development.</p>
            <p>I'm passionate about learning emerging technologies, solving real-world problems, and building innovative solutions — from clean front-end interfaces to the data-driven systems behind them.</p>
            <p>Currently pursuing my B.Sc. in Computer Science (AI &amp; Data Science) at Gobi Arts &amp; Science College, I'm actively seeking opportunities to apply my technical skills and contribute to a growth-oriented organization.</p>
          </Reveal>

          <div className="stat-grid">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.2 + i * 0.05} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
