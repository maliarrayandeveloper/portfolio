import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What do you build?",
    a: "Full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) — customer-facing apps, admin dashboards, and REST APIs, from planning through deployment.",
  },
  {
    q: "Are you open to full-time or freelance work?",
    a: "Both. I'm actively looking for full-time remote engineering roles, and I also take on select freelance builds when the scope is a good fit.",
  },
  {
    q: "Can you work with a team across time zones?",
    a: "Yes — I'm used to async communication, clear written updates, and structured handoffs so distance and time zones don't slow a project down.",
  },
  {
    q: "What does a typical project need from me?",
    a: "Just clarity on the goal to start. I handle the technical planning, keep you updated with working previews along the way, and flag anything that needs your input early.",
  },
  {
    q: "Can I see the code for your projects?",
    a: "Some repos are public and linked directly on each project. Others are private (client or thesis work) — for those I can walk you through the code on a call.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <button className={styles.question} onClick={onToggle}>
        <span>{item.q}</span>
        <span className={styles.icon} aria-hidden="true">
          {isOpen ? "×" : "+"}
        </span>
      </button>
      <div className={styles.answerWrap}>
        <p className={styles.answer}>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

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
    <section id="faq" className={styles.faq} ref={ref}>
      <div className={styles.inner}>
        <div
          className={`${styles.sectionHead} ${visible ? styles.visible : ""}`}
        >
          <p className={styles.label}>FAQ</p>
          <h2 className={styles.heading}>
            Clear answers
            <br />
            <em>for quick decisions.</em>
          </h2>
        </div>

        <div
          className={`${styles.list} ${visible ? styles.visible : ""}`}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
