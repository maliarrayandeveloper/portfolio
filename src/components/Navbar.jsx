import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const links = ["About", "Projects", "Contact"];

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
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
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
        <span className={styles.logoName}>Muhammad Ali Arrayyan Bukhori</span>
        <span className={styles.logoDot}>.</span>
      </a>

      {/* Desktop links */}
      <nav className={styles.links}>
        {links.map((l) => (
          <button key={l} className={styles.link} onClick={() => scrollTo(l)}>
            {l}
          </button>
        ))}
        <a
          href="https://drive.google.com/file/d/1EphlW8xzhW-USZFLs-kVVku3FI-n0uI7/view?usp=sharing"
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
              key={l}
              className={styles.mobileLink}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          ))}
          <a
            href="YOUR_CV_LINK_HERE"
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
