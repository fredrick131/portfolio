import Reveal from "./Reveal.jsx";

const TIMELINE = [
  {
    period: "2024 – 2027 (Expected Graduation)",
    title: "B.Sc. Computer Science (Artificial Intelligence & Data Science)",
    sub: "Gobi Arts & Science College, Tamil Nadu · Department of Computer Science · Bharathiar University",
    current: true,
  },
  {
    period: "Completed 2024",
    title: "Higher Secondary Education (12th Standard)",
    sub: "Diamond Jubilee Higher Secondary School",
  },
  {
    period: "Completed 2021",
    title: "Secondary Education (10th Standard)",
    sub: "Diamond Jubilee Matriculation School",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="wrap">
        <Reveal className="eyebrow">Academic Journey</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>Education</Reveal>
        <Reveal className="section-sub" delay={0.1}>My academic path so far, leading up to my current degree.</Reveal>

        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal
              key={t.title}
              delay={0.15 + i * 0.08}
              className={`timeline-item${t.current ? " current" : ""}`}
            >
              <div className="timeline-dot" />
              <span className="tl-period">{t.period}</span>
              <div className="tl-title">{t.title}</div>
              <div className="tl-sub">{t.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
