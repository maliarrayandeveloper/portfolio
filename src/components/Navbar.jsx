import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Process", id: "how-it-works" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a
        href="#"
        className={styles.logo}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span className={styles.logoName}>Ali Arrayyan</span>
        <span className={styles.logoDot}>.</span>
      </a>

      {/* Desktop links */}
      <nav className={styles.links}>
        {links.map((l) => (
          <button
            key={l.id}
            className={styles.link}
            onClick={() => scrollTo(l.id)}
          >
            {l.label}
          </button>
        ))}
        <a
          href="https://drive.google.com/file/d/1E0sQJ7X7dK3KCtjXy6afHzkDKTxrdWYv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Download CV ↗
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <button
              key={l.id}
              className={styles.mobileLink}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1E0sQJ7X7dK3KCtjXy6afHzkDKTxrdWYv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileCta}
          >
            Download CV ↗
          </a>
        </div>
      )}
    </header>
  );
}
