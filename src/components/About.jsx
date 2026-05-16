import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express.js', level: 82 },
  { name: 'JavaScript', level: 92 },
  { name: 'REST API Design', level: 78 },
]

function SkillBar({ name, level, visible }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillTop}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.inner}>

        {/* Left col — text */}
        <div className={`${styles.textCol} ${visible ? styles.visible : ''}`}>
          <p className={styles.label}>About Me</p>
          <h2 className={styles.heading}>
            A developer who codes<br />
            <em>with purpose.</em>
          </h2>
          <p className={styles.body}>
            I'm a dedicated software developer completing my Bachelor's
            degree in Informatics. My focus lies in JavaScript ecosystems —
            specifically building robust full-stack applications using
            MongoDB, Express, React, and Node.js.
          </p>
          <p className={styles.body}>
            Balancing my final-year thesis with independent development
            projects has taught me strong <strong>time management</strong>,{' '}
            <strong>self-motivation</strong>, and{' '}
            <strong>problem-solving</strong> — traits that make me highly
            effective in remote, autonomous work environments.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>2+</span>
              <span className={styles.statLabel}>Projects shipped</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>8th</span>
              <span className={styles.statLabel}>Semester (final year)</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>∞</span>
              <span className={styles.statLabel}>Remote-ready</span>
            </div>
          </div>
        </div>

        {/* Right col — skills */}
        <div className={`${styles.skillsCol} ${visible ? styles.visible : ''}`}>
          <p className={styles.label}>Core Skills</p>
          <div className={styles.skills}>
            {skills.map(s => (
              <SkillBar key={s.name} {...s} visible={visible} />
            ))}
          </div>

          {/* Tool icons row */}
          <div className={styles.tools}>
            {['Git & GitHub', 'Tailwind CSS', 'Postman', 'VS Code', 'Figma'].map(t => (
              <span key={t} className={styles.tool}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
