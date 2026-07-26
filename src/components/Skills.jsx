import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { api } from "../api/client.js";
import { fallbackSkills } from "../data/fallbackData.js";

const ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" /></svg>
  ),
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 2v10l7 4" /></svg>
  ),
};

export default function Skills() {
  const [groups, setGroups] = useState(fallbackSkills);

  useEffect(() => {
    api
      .getSkills()
      .then((data) => { if (data?.length) setGroups(data); })
      .catch(() => { /* keep fallback data */ });
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <Reveal className="eyebrow">What I Work With</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>Skills &amp; Technologies</Reveal>
        <Reveal className="section-sub" delay={0.1}>Tools and concepts I use to learn, build, and ship.</Reveal>

        <div className="skill-groups">
          {groups.map((g, i) => (
            <Reveal key={g._id || g.group} delay={0.15 + i * 0.05} className="skill-card">
              <div className="skill-card-head">
                <div className="skill-icon">{ICONS[g.icon] || ICONS.code}</div>
                <h3>{g.group}</h3>
              </div>
              <div className="chip-row">
                {g.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
