import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    tag: "30 min",
    title: "Understand the goal",
    desc: "A quick call or async chat to get clear on what you need — the problem, the constraints, the timeline, and whether I'm the right fit for it.",
  },
  {
    num: "02",
    tag: "1–2 days",
    title: "Plan the approach",
    desc: "I map out the stack, architecture, and milestones before writing a single line of code, so there are no surprises once the build starts.",
  },
  {
    num: "03",
    tag: "Build phase",
    title: "Build & ship",
    desc: "I work in small, visible increments — sharing progress, handling feedback fast, and getting the result production-ready, not just demo-ready.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className={styles.howItWorks} ref={ref}>
      <div className={styles.inner}>
        <div
          className={`${styles.sectionHead} ${visible ? styles.visible : ""}`}
        >
          <p className={styles.label}>Process</p>
          <h2 className={styles.heading}>
            How I work
            <br />
            <em>from idea to shipped.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`${styles.card} ${visible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.tag}>{s.tag}</span>
              </div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
