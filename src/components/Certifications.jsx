import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { api } from "../api/client.js";
import { fallbackCertifications } from "../data/fallbackData.js";

export default function Certifications() {
  const [certs, setCerts] = useState(fallbackCertifications);

  useEffect(() => {
    api
      .getCertifications()
      .then((data) => { if (data?.length) setCerts(data); })
      .catch(() => { /* keep fallback data */ });
  }, []);

  return (
    <section className="certs" id="certifications">
      <div className="wrap">
        <Reveal className="eyebrow">Verified Learning</Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>Certifications</Reveal>
        <Reveal className="section-sub" delay={0.1}>Courses and credentials I've completed along the way.</Reveal>

        <div className="cert-grid">
          {certs.map((c, i) => (
            <Reveal key={c._id || c.title} delay={0.15 + i * 0.05} className="cert-card">
              <span className="cert-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="cert-body">
                <h4>{c.title}</h4>
                <span>{c.issuer}</span>
                {c.fileUrl && (
                  <a className="view-cert" href={c.fileUrl} target="_blank" rel="noopener noreferrer">
                    View Certificate →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
