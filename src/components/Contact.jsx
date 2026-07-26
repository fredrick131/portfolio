import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { api } from "../api/client.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });
    try {
      await api.sendMessage(form);
      setStatus({ type: "success", text: "Message sent — thanks for reaching out! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-card">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Get In Touch</div>
          <h2>Let's build something great together.</h2>
          <p>I'm open to internships, entry-level roles, and collaborations in software development, AI, and data science. Reach out through any of the channels below, or send a message directly.</p>

          <div className="contact-methods">
            <a className="contact-pill" href="tel:9952330613">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
              9952330613
            </a>
            <a className="contact-pill" href="mailto:fredrickfredrick1156@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5h18v14H3z" /><path d="M3 6l9 7 9-7" /></svg>
              fredrickfredrick1156@gmail.com
            </a>
            <a className="contact-pill" href="https://www.linkedin.com/in/fredrick-s-027a8a350" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
              LinkedIn
            </a>
            <a className="contact-pill" href="https://github.com/fredrick131" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
              GitHub
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="What would you like to say?" required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending} style={{ alignSelf: "center" }}>
              {sending ? "Sending…" : "Say Hello →"}
            </button>
            {status.text && <p className={`form-status ${status.type}`} style={{ textAlign: "center" }}>{status.text}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
