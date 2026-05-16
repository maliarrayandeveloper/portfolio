import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

/* ── CONFIG — ganti dengan data kamu ── */
const EMAIL = "maliarrayandeveloper@gmail.com";
const LINKEDIN = "https://linkedin.com/in/maliarrayan";
const GITHUB = "https://github.com/maliarrayandeveloper";

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={`${styles.inner} ${visible ? styles.visible : ""}`}>
        <p className={styles.label}>Get In Touch</p>

        <h2 className={styles.heading}>
          Let's build something
          <br />
          <em>together.</em>
        </h2>

        <p className={styles.body}>
          I'm currently open for <strong>remote opportunities</strong>,
          freelance projects, or full-time roles worldwide. Whether you have a
          question or just want to say hi — my inbox is always open.
        </p>

        {/* Email CTA */}
        <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
          {EMAIL}
        </a>

        {/* Copy button */}
        <button className={styles.copyBtn} onClick={copyEmail}>
          {copied ? "✓ Copied!" : "Copy email"}
        </button>

        {/* Social links */}
        <div className={styles.socials}>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>

          <a href={`mailto:${EMAIL}`} className={styles.socialBtn}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email Me
          </a>
        </div>
      </div>

      {/* Decorative large text */}
      <div className={styles.bigText} aria-hidden="true">
        Open to work
      </div>
    </section>
  );
}
