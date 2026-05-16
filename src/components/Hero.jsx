import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

const ROLES = [
  "Fullstack Developer.",
  "MERN Stack Engineer.",
  "Frontend Developer.",
  "React Enthusiast.",
];

function useTypewriter(words, speed = 90, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index % words.length];
    const tick = deleting
      ? setTimeout(() => {
          setText(current.slice(0, sub - 1));
          setSub((s) => s - 1);
        }, speed / 2)
      : sub < current.length
        ? setTimeout(() => {
            setText(current.slice(0, sub + 1));
            setSub((s) => s + 1);
          }, speed)
        : setTimeout(() => setDeleting(true), pause);

    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => i + 1);
    }

    return () => clearTimeout(tick);
  }, [text, deleting, sub, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home">
      {/* Subtle grid background */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Available badge */}
        <div className={`${styles.badge} animate-fadeup`}>
          <span className={styles.dot} />
          Available for remote opportunities
        </div>

        {/* Main headline */}
        <h1 className={`${styles.headline} animate-fadeup delay-1`}>
          Hi, I'm{" "}
          <span className={styles.name}>Muhammad Ali Arrayyan Bukhori</span>
          <br />
          <em className={styles.italic}>Building seamless</em>
          <br />
          digital experiences.
        </h1>

        {/* Typewriter role */}
        <div className={`${styles.roleWrap} animate-fadeup delay-2`}>
          <span className={styles.roleLabel}>I'm a</span>{" "}
          <span className={styles.role}>
            {role}
            <span className={styles.cursor} aria-hidden="true">
              |
            </span>
          </span>
        </div>

        {/* Sub-headline */}
        <p className={`${styles.sub} animate-fadeup delay-3`}>
          Final-year Informatics student specializing in the{" "}
          <strong>MERN stack</strong>. I build responsive, user-centric web
          applications and am ready to bring my skills to a remote engineering
          team — anywhere in the world.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctaRow} animate-fadeup delay-4`}>
          <button className={styles.btnPrimary} onClick={scrollToProjects}>
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1EphlW8xzhW-USZFLs-kVVku3FI-n0uI7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Download Resume ↗
          </a>
        </div>

        {/* Tech stack pills */}
        <div className={`${styles.stack} animate-fadeup delay-5`}>
          {[
            "MongoDB",
            "Express.js",
            "React",
            "Node.js",
            "JavaScript",
            "REST API",
            "Git",
          ].map((t) => (
            <span key={t} className={styles.pill}>
              {t}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`${styles.scrollIndicator} animate-fadeup delay-6`}
          aria-hidden="true"
        >
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>scroll</span>
        </div>
      </div>
    </section>
  );
}
